// Minimal app script to restore button functionality and simple session flow
let authMode = "login";
let currentProgram = null;
let session = {
  exercises: [],
  index: 0,
  running: false,
  paused: false,
  timer: null,
  seconds: 0,
  startTs: 0
};

function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._timeout);
  t._timeout = setTimeout(() => t.classList.remove('show'), 3000);
}

/* ----- Modals ----- */
function openAuth() { document.getElementById('auth-overlay').classList.add('open'); }
function closeModal(id) { const el = document.getElementById(id); if (el) el.classList.remove('open'); }
function handleOverlayClick(e, id) { if (e.target && e.target.id === id) closeModal(id); }

function switchTab(mode) {
  authMode = mode;
  const isLogin = mode === 'login';
  document.getElementById('tab-login').classList.toggle('active', isLogin);
  document.getElementById('tab-signup').classList.toggle('active', !isLogin);
  const nameField = document.getElementById('field-name');
  if (nameField) nameField.style.display = isLogin ? 'none' : 'block';
  const title = document.getElementById('auth-title'); if (title) title.textContent = isLogin ? 'Welcome Back' : 'Create Account';
  const sub = document.getElementById('auth-sub'); if (sub) sub.textContent = isLogin ? 'Sign in to track your progress.' : 'Join thousands of athletes today.';
  const submit = document.getElementById('auth-submit'); if (submit) submit.textContent = isLogin ? 'Log In' : 'Create Account';
}

function handleAuth(e) {
  if (e && e.preventDefault) e.preventDefault();
  closeModal('auth-overlay');
  showToast((authMode === 'login' ? 'Logged in' : 'Account created') + ' successfully!');
}

/* ----- Page navigation ----- */
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const el = document.getElementById(id);
  if (el) el.classList.add('active');
}

function goHome() { showPage('page-home'); }
function goToProgram() { showPage('page-workout'); }

/* ----- Weight / Court modals ----- */
function openWeightTraining() { document.getElementById('weight-overlay').classList.add('open'); }
function openCourtTraining()  { document.getElementById('court-overlay').classList.add('open'); }

function goToWorkout(slug) {
  // small program registry
  const programs = {
    'explosive-power': {
      title: 'Explosive Power', tag: 'Weight Training', icon: '🏋️', meta: '4 Exercises · Strength Focus', desc: 'Build strength and lower-body power.',
      exercises: [
        { name: 'Single Leg Leg Press', sets:3, reps:12, duration:null, instructions: 'Place your leg on the top half of the press then push up. Do not completely lock out the knee to avoid injury.', tip: 'Avoid locking the knee; control the descent.' },
        { name: 'Bulgarian Split Squats', sets:3, reps:12, duration:null, instructions: 'Put one leg back on a flat surface, lower the front leg down as far as comfortable, then drive up explosively.', tip: 'Add a tempo/count on the descent for extra benefit.' },
        { name: 'Deep Squats', sets:3, reps:10, duration:null, instructions: 'Stand with plates under your feet if needed and squat deep while keeping knees from collapsing outward.', tip: 'Perform barefoot for improved dorsiflexion if appropriate.' },
        { name: 'Calf Raises', sets:3, reps:12, duration:null, instructions: 'From standing, raise the heels as high as possible and lower slowly.', tip: 'Use a ledge to increase range of motion for greater progress.' }
      ]
    },
    'vertical-jump': {
      title: 'Vertical Jump', tag: 'Weight Training', icon: '📈', meta: 'Explosiveness · Plyometrics', desc: 'Develop reactive strength and jump height.',
      exercises: [
        { name: 'Box Jumps', sets:3, reps:10, duration:null, instructions: 'Use a ~30 in box, jump onto it with minimal knee bend and stick the landing.', tip: 'Focus on a soft, controlled landing.' },
        { name: 'Pogo Hops', sets:3, reps:'1 min', duration:60, instructions: 'Jump repeatedly minimizing ground contact time; keep ankles stiff.', tip: 'Think about lifting the toes immediately after takeoff.' },
        { name: 'Max Effort Jumps', sets:1, reps:'15 min', duration:900, instructions: 'In an open area, perform maximal approach jumps toward a target for the given time.', tip: 'Use a rim or high target to measure reach.' }
      ]
    },
    'core-stability': {
      title: 'Core & Stability', tag: 'Weight Training', icon: '🎯', meta: 'Stability · Core Control', desc: 'Improve trunk strength and control.',
      exercises: [
        { name: 'Russian Twists', sets:3, reps:'30s', duration:30, instructions: 'Sit in a V position with or without a medicine ball and rotate the ball from right to left.', tip: 'Beginners: omit the medicine ball until comfortable.' },
        { name: 'Planks', sets:3, reps:'45s', duration:45, instructions: 'Hold a strong plank position with a neutral spine.', tip: 'Keep forearms parallel and core braced.' },
        { name: 'Crunches', sets:3, reps:25, duration:null, instructions: 'Lie on your back with knees bent and perform short controlled crunches.', tip: 'For more challenge, perform without bending the knees.' }
      ]
    },
    'in-season': {
      title: 'In-Season Maintenance', tag: 'Recovery', icon: '🔄', meta: 'Short · Recovery Focused', desc: 'Maintain performance with low-volume work.',
      exercises: [
        { name: 'Mile Run', sets:1, reps:1, duration:480, instructions: 'Run one mile at a steady pace; aim to keep it under 8 minutes.', tip: 'Warm up lightly before starting.' },
        { name: 'Foam Rolling', sets:1, reps:1, duration:600, instructions: 'Use a foam roller to roll major muscle groups for mobility and recovery.', tip: 'Roll slowly and focus on tight areas.' },
        { name: 'Sprints', sets:3, reps:2, duration:null, instructions: 'Perform 2 × 100m sprints per set (or effort-based), with full recovery between reps.', tip: 'Maximal effort on each sprint; recover fully between reps.' }
      ]
    }
  };

  const p = programs[slug];
  if (!p) return showToast('Program not found');
  currentProgram = p;
  // populate workout page
  const setText = (id, text) => { const el = document.getElementById(id); if (el) el.textContent = text; };
  setText('wp-title', p.title);
  setText('wp-meta', p.meta);
  setText('wp-desc', p.desc);
  setText('wp-tag', p.tag);
  setText('wp-icon', p.icon);

  const grid = document.getElementById('exercises-grid');
  if (grid) {
    grid.innerHTML = '';
    p.exercises.forEach((ex, i) => {
      const div = document.createElement('div');
      div.className = 'exercise-card';
      div.innerHTML = `<h3>${ex.name}</h3><p class="meta">${ex.sets} × ${ex.reps}</p><p class="instr">${ex.instructions}</p><button class="start-btn" onclick="startProgram(${i})">Start From Here</button>`;
      grid.appendChild(div);
    });
    // add overall start button
    const startAll = document.createElement('div'); startAll.className='exercise-card'; startAll.innerHTML = `<button class="start-btn" onclick="startProgram()">Start Workout 🔥</button>`; grid.appendChild(startAll);
  }

  showPage('page-workout');
  closeModal('weight-overlay');
}

/* ----- Program / Session control ----- */
function startProgram(startIndex = 0) {
  if (!currentProgram) return showToast('No program selected');
  // if called from click with event param, adjust: handle numeric strings
  if (typeof startIndex === 'string') startIndex = parseInt(startIndex,10) || 0;
  session.exercises = currentProgram.exercises;
  session.index = startIndex || 0;
  session.seconds = 0; session.running = false; session.paused = false; clearInterval(session.timer);
  populateInfoPanel();
  showPage('page-session');
}

function populateInfoPanel() {
  const ex = session.exercises[session.index];
  if (!ex) return finishSession();
  const set = (id, txt) => { const el = document.getElementById(id); if (el) el.textContent = txt; };
  const title = document.getElementById('info-title'); if (title) title.textContent = ex.name;
  const badge = document.getElementById('info-sets'); if (badge) badge.textContent = `${ex.sets} Sets × ${ex.reps}`;
  const icon = document.getElementById('info-icon'); if (icon) icon.textContent = currentProgram.icon || '💪';
  const instr = document.getElementById('info-instructions'); if (instr) instr.textContent = ex.instructions || '';
  const tip = document.getElementById('info-tip'); if (tip) tip.textContent = ex.tip || '';
  const counter = document.getElementById('session-counter'); if (counter) counter.textContent = `Exercise ${session.index+1} of ${session.exercises.length}`;
  // ensure panels
  document.getElementById('info-panel').style.display = '';
  document.getElementById('timer-panel').style.display = 'none';
}

function startTimer() {
  // start the active timer for current exercise
  const ex = session.exercises[session.index]; if (!ex) return;
  session.running = true; session.paused = false; session.seconds = 0; session.startTs = Date.now();
  document.getElementById('info-panel').style.display = 'none';
  document.getElementById('timer-panel').style.display = '';
  const nameEl = document.getElementById('timer-exercise-name'); if (nameEl) nameEl.textContent = ex.name;
  const label = document.getElementById('timer-label'); if (label) label.textContent = 'elapsed';
  updateTimerDisplay();
  clearInterval(session.timer);
  session.timer = setInterval(() => { if (!session.paused) { session.seconds += 1; updateTimerDisplay(); if (ex.duration && session.seconds >= ex.duration) moveOn(); } }, 1000);
}

function updateTimerDisplay() {
  const d = document.getElementById('timer-display');
  if (!d) return;
  const s = session.seconds;
  const mm = Math.floor(s / 60); const ss = s % 60;
  d.textContent = `${mm}:${ss.toString().padStart(2,'0')}`;
  const fill = document.getElementById('session-progress-fill');
  if (fill && session.exercises.length) {
    const total = session.exercises.length;
    const percent = Math.round(((session.index + (session.seconds/Math.max(1, session.exercises[session.index].duration || 1)))/total)*100);
    fill.style.width = percent + '%';
  }
}

function togglePause() {
  session.paused = !session.paused;
  const btn = document.getElementById('btn-pause'); if (btn) btn.textContent = session.paused ? '▶ Resume' : '⏸ Pause';
}

function moveOn() {
  clearInterval(session.timer);
  session.index += 1;
  if (session.index >= session.exercises.length) return finishSession();
  session.seconds = 0; session.running = false; session.paused = false;
  populateInfoPanel();
}

function finishSession() {
  clearInterval(session.timer);
  // populate complete page
  const exCount = document.getElementById('cs-exercises'); if (exCount) exCount.textContent = session.exercises.length || 0;
  const csTime = document.getElementById('cs-time'); if (csTime) csTime.textContent = '—';
  showPage('page-complete');
  showToast('Workout complete 🎉');
}

function replayProgram() {
  if (!currentProgram) return goHome();
  startProgram(0);
}

/* Accessibility: make cards keyboard-activatable */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.card[tabindex]').forEach(card => {
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); card.click(); }
    });
  });
  // attach form submit handler if present
  const authForm = document.getElementById('auth-form'); if (authForm) authForm.addEventListener('submit', handleAuth);
});

// expose a couple helpers globally for onclick attributes
window.openAuth = openAuth;
window.openWeightTraining = openWeightTraining;
window.openCourtTraining = openCourtTraining;
window.closeModal = closeModal;
window.handleOverlayClick = handleOverlayClick;
window.switchTab = switchTab;
window.handleAuth = handleAuth;
window.goToWorkout = goToWorkout;
window.goHome = goHome;
window.goToProgram = goToProgram;
window.startProgram = startProgram;
window.startTimer = startTimer;
window.togglePause = togglePause;
window.moveOn = moveOn;
window.replayProgram = replayProgram;
