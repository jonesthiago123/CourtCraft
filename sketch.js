// ─── Workout Data ─────────────────────────────────────────
const workouts = {

  "explosive-power": {
    title: "Explosive Power",
    icon: "⚡",
    meta: "3 Sets · 4 Exercises · Weight Training",
    desc: "Build the raw, game-changing strength that turns average players into dominant forces. Develops fast-twitch muscle fibers and lower-body explosiveness.",
    accentColor: "#F97316",
    exercises: [
      {
        icon: "🦵",
        name: "Single Leg Leg Press",
        sets: "3 Sets × 12 Reps each leg",
        timerType: "countup",
        instructions: "Place your leg on the top half of the press then push up through your heel. Lower slowly and repeat for all reps before switching legs.",
        tip: "Make sure not to completely lock out your knee at the top — this puts you at risk of injury. Keep a slight bend at full extension."
      },
      {
        icon: "🏋️",
        name: "Bulgarian Split Squat",
        sets: "3 Sets × 12 Reps each leg",
        timerType: "countup",
        instructions: "Put one leg back on a flat surface, then with the other leg go down as far as you can, then come up fast. Keep your torso upright throughout the movement.",
        tip: "If you add a slow count on the way down (2-3 seconds), this will increase the difficulty and help even more with muscle development!"
      },
      {
        icon: "⬇️",
        name: "Deep Squats",
        sets: "3 Sets × 10 Reps",
        timerType: "countup",
        instructions: "Make sure to have a plate underneath your feet for elevation. Go down as deep as you can, keeping your chest up. Try not to have your knees bend outward — push them out over your toes.",
        tip: "Doing this barefoot or shoeless could be better for the dorsiflexion of the foot, allowing you to squat deeper with better form."
      },
      {
        icon: "🦶",
        name: "Calf Raises",
        sets: "3 Sets × 12 Reps",
        timerType: "countup",
        instructions: "From a normal standing position, raise your heel as high as you can, pause at the top, then slowly lower back down. Keep your core tight throughout.",
        tip: "For even better progress you can start from off a ledge or step — this increases the range of motion and will make your calves even stronger over time."
      }
    ]
  },

  "vertical-jump": {
    title: "Vertical Jump",
    icon: "📈",
    meta: "3 Sets · 3 Exercises · Weight Training",
    desc: "Add serious inches to your vertical with proven plyometric training. Targets the fast-twitch fibers and elastic energy storage that make elite jumpers.",
    accentColor: "#A855F7",
    exercises: [
      {
        icon: "📦",
        name: "Box Jumps",
        sets: "3 Sets × 10 Reps",
        timerType: "countup",
        instructions: "Grab a 30-inch box and stand in front of it. Load your hips, swing your arms, and jump as high as you can onto the box with minimal knee bend while in the air. Land with soft knees, then step back down.",
        tip: "Make sure to stick the landing when jumping — absorb the impact with bent knees. Never jump down from the box, always step down to protect your joints."
      },
      {
        icon: "🦘",
        name: "Pogo Hops",
        sets: "3 Sets × 1 Minute",
        timerType: "countdown",
        timerSeconds: 60,
        instructions: "Jump repeatedly and make sure to focus on spending as little time as possible on the ground between hops. Stay on your toes and keep your legs mostly straight. Think of your ankles as springs.",
        tip: "If you are struggling, try thinking of this motion as lifting your toes up as soon as you land — this mental cue helps activate the right muscles."
      },
      {
        icon: "🚀",
        name: "Max Effort Jumps",
        sets: "15 Minutes Total",
        timerType: "countdown",
        timerSeconds: 900,
        instructions: "At an open area, have a target to reach overhead. Do a full approach, swing your arms hard, and do a max effort jump trying to touch the target. Rest fully between each jump, then repeat.",
        tip: "Most people use sports-related objects like a basketball rim to touch — having a target makes your brain recruit more muscle. Try it!"
      }
    ]
  },

  "core-stability": {
    title: "Core & Stability",
    icon: "🎯",
    meta: "3 Sets · 3 Exercises · Weight Training",
    desc: "A strong core is the foundation of every basketball movement — cutting, shooting, posting up. Build the stability and anti-rotation strength elite players rely on.",
    accentColor: "#22C55E",
    exercises: [
      {
        icon: "🌀",
        name: "Russian Twists",
        sets: "3 Sets × 30 Seconds",
        timerType: "countdown",
        timerSeconds: 30,
        instructions: "With a medicine ball, get in a V position — feet off the ground, leaning back at 45 degrees. Rotate the medicine ball to your right side, then to your left side, and repeat. Keep your core tight the entire time.",
        tip: "For beginners, don't use a medicine ball if this is too hard — start with just your hands clasped together. Master the movement before adding weight."
      },
      {
        icon: "🪵",
        name: "Planks",
        sets: "3 Sets × 45 Seconds",
        timerType: "countdown",
        timerSeconds: 45,
        instructions: "Get in a plank position on your forearms. Keep your body in a perfectly straight line from head to heels. Squeeze your glutes, brace your abs, and breathe steadily. Hold for 45 seconds.",
        tip: "Keep your arms parallel and directly under your shoulders. Do not let your hips sag or your butt rise — the straighter the line, the harder the core works."
      },
      {
        icon: "🔁",
        name: "Crunches",
        sets: "3 Sets × 25 Reps",
        timerType: "countup",
        instructions: "Lie on your back, put your hands behind your head, and bend your knees. Curl your ribcage toward your pelvis, lifting just your shoulder blades off the ground. Lower with control and repeat.",
        tip: "For a harder experience, you can straighten your legs out flat. Do not pull on your neck — the power should come from your abs, not your hands."
      }
    ]
  },

  "in-season": {
    title: "In-Season Maintenance",
    icon: "🔄",
    meta: "3 Exercises · Weight Training",
    desc: "Stay strong and injury-free during the season without burning out. Low-volume work that keeps your gains and keeps your legs fresh for game day.",
    accentColor: "#F59E0B",
    exercises: [
      {
        icon: "🏃",
        name: "Mile Run",
        sets: "Target: Under 8 Minutes",
        timerType: "countdown",
        timerSeconds: 480,
        instructions: "Head to a track or open stretch and run one full mile (4 laps on a standard track). Maintain a steady pace — push yourself but keep it sustainable. Focus on your breathing rhythm.",
        tip: "Run at a conversational pace for the first half, then push harder in the second half. Consistent aerobic base work keeps your engine running all season."
      },
      {
        icon: "🧻",
        name: "Foam Rolling",
        sets: "Under 10 Minutes Total",
        timerType: "countdown",
        timerSeconds: 600,
        instructions: "Grab a foam roller and roll out your entire body — start at your calves, work up to your hamstrings, quads, IT band, glutes, and upper back. Spend extra time on any tight or sore spots.",
        tip: "Go slow and pause on tender spots for 20-30 seconds to release the tension. This is recovery work — it should feel uncomfortable but not painful."
      },
      {
        icon: "💨",
        name: "Sprints",
        sets: "3 Sets × 2 Reps (100m each)",
        timerType: "countup",
        instructions: "Find a straight stretch of at least 100 meters. Sprint at full effort for the entire distance. Walk back to the start as your rest. Complete 2 sprints per set, rest 90 seconds between sets.",
        tip: "Drive your arms hard and stay relaxed in your face and shoulders. Tension in the upper body slows you down. Full effort every single rep."
      }
    ]
  }

};


// ─── State ────────────────────────────────────────────────
let currentProgramKey   = null;
let currentExerciseIndex = 0;
let timerInterval       = null;
let timerSeconds        = 0;
let isPaused            = false;
let isStarted           = false;
let totalSessionSeconds = 0;
let sessionStartTime    = null;


// ─── Page Navigation ──────────────────────────────────────
function showPage(id) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function goHome() {
  stopTimer();
  showPage("page-home");
}

function goToProgram() {
  stopTimer();
  showPage("page-workout");
}


// ─── Program Detail Page ──────────────────────────────────
function goToWorkout(key) {
  closeModal("weight-overlay");
  currentProgramKey = key;

  const data = workouts[key];
  if (!data) return;

  // Populate header
  document.getElementById("wp-icon").textContent  = data.icon;
  document.getElementById("wp-title").textContent = data.title;
  document.getElementById("wp-meta").textContent  = data.meta;
  document.getElementById("wp-desc").textContent  = data.desc;

  // Style accent colors
  const tag = document.getElementById("wp-tag");
  tag.style.background   = hexToRgba(data.accentColor, .12);
  tag.style.borderColor  = hexToRgba(data.accentColor, .3);
  tag.style.color        = data.accentColor;
  document.getElementById("wp-title").style.color = data.accentColor;

  // Build exercise cards
  const grid = document.getElementById("exercises-grid");
  grid.innerHTML = "";

  data.exercises.forEach((ex, i) => {
    const card = document.createElement("div");
    card.className = "exercise-card";
    card.style.setProperty("--accent-color", data.accentColor);
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");

    card.innerHTML = `
      <div class="ex-number">${String(i + 1).padStart(2, "0")}</div>
      <span class="ex-icon">${ex.icon}</span>
      <div class="ex-name">${ex.name}</div>
      <div class="ex-sets">${ex.sets}</div>
      <div class="ex-cta">Tap to start this exercise →</div>
    `;

    card.addEventListener("click",    () => startExercise(i));
    card.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); startExercise(i); } });

    grid.appendChild(card);
  });

  showPage("page-workout");
}


// ─── Exercise Session ─────────────────────────────────────
function startExercise(index) {
  stopTimer();
  isStarted = false;
  isPaused  = false;
  timerSeconds = 0;

  currentExerciseIndex = index;
  const data = workouts[currentProgramKey];
  const ex   = data.exercises[index];
  const total = data.exercises.length;

  // Progress bar
  const pct = ((index) / total) * 100;
  document.getElementById("session-progress-fill").style.width = pct + "%";
  document.getElementById("session-counter").textContent = `Exercise ${index + 1} of ${total}`;

  // Info panel
  document.getElementById("info-icon").textContent         = ex.icon;
  document.getElementById("info-title").textContent        = ex.name;
  document.getElementById("info-sets").textContent         = ex.sets;
  document.getElementById("info-instructions").textContent = ex.instructions;
  document.getElementById("info-tip").textContent          = ex.tip;

  // Style the badge accent
  const badge = document.getElementById("info-sets");
  badge.style.background   = hexToRgba(data.accentColor, .15);
  badge.style.borderColor  = hexToRgba(data.accentColor, .3);
  badge.style.color        = data.accentColor;

  // Reset timer panel
  document.getElementById("timer-exercise-name").textContent = ex.name;
  document.getElementById("timer-display").textContent = formatTime(0);
  document.getElementById("timer-sets-info").textContent = ex.sets;
  document.getElementById("btn-pause").textContent = "⏸ Pause";
  updateRing(0, ex);

  // Show info panel, hide timer
  document.getElementById("info-panel").style.display   = "flex";
  document.getElementById("timer-panel").style.display  = "none";

  // Set ring color
  const ringFill = document.getElementById("ring-fill");
  ringFill.style.stroke = data.accentColor;

  if (!sessionStartTime) sessionStartTime = Date.now();

  showPage("page-session");
}

function startTimer() {
  const data = workouts[currentProgramKey];
  const ex   = data.exercises[currentExerciseIndex];

  isStarted = true;
  isPaused  = false;

  // Swap panels
  document.getElementById("info-panel").style.display   = "none";
  document.getElementById("timer-panel").style.display  = "flex";

  // Set initial timer value
  if (ex.timerType === "countdown") {
    timerSeconds = ex.timerSeconds;
    document.getElementById("timer-label").textContent = "remaining";
  } else {
    timerSeconds = 0;
    document.getElementById("timer-label").textContent = "elapsed";
  }

  document.getElementById("timer-display").textContent = formatTime(timerSeconds);
  updateRing(timerSeconds, ex);

  runTimer(ex);
}

function runTimer(ex) {
  clearInterval(timerInterval);

  timerInterval = setInterval(() => {
    if (isPaused) return;

    if (ex.timerType === "countdown") {
      timerSeconds--;
      if (timerSeconds <= 0) {
        timerSeconds = 0;
        clearInterval(timerInterval);
        document.getElementById("timer-display").textContent = "Done!";
        document.getElementById("timer-label").textContent   = "✅ complete";
        showToast("✅ " + ex.name + " complete! Hit Move On.");
      }
    } else {
      timerSeconds++;
    }

    document.getElementById("timer-display").textContent = formatTime(timerSeconds);
    updateRing(timerSeconds, ex);
  }, 1000);
}

function togglePause() {
  isPaused = !isPaused;
  document.getElementById("btn-pause").textContent = isPaused ? "▶ Resume" : "⏸ Pause";
}

function moveOn() {
  stopTimer();

  const data  = workouts[currentProgramKey];
  const total = data.exercises.length;
  const next  = currentExerciseIndex + 1;

  if (next < total) {
    startExercise(next);
  } else {
    showComplete();
  }
}

function stopTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function showComplete() {
  stopTimer();

  const data     = workouts[currentProgramKey];
  const elapsed  = sessionStartTime ? Math.floor((Date.now() - sessionStartTime) / 1000) : 0;
  sessionStartTime = null;

  document.getElementById("cs-exercises").textContent = data.exercises.length;
  document.getElementById("cs-time").textContent      = formatTime(elapsed);
  document.getElementById("complete-sub").textContent =
    `You finished all ${data.exercises.length} exercises in the ${data.title} program. Rest up and come back stronger!`;

  // Progress bar to 100%
  document.getElementById("session-progress-fill").style.width = "100%";

  showPage("page-complete");
}

function replayProgram() {
  sessionStartTime = null;
  goToWorkout(currentProgramKey);
}


// ─── Timer Ring ───────────────────────────────────────────
function updateRing(seconds, ex) {
  const circumference = 553; // 2 * pi * 88
  const ringFill = document.getElementById("ring-fill");

  if (ex.timerType === "countdown") {
    const total    = ex.timerSeconds;
    const fraction = seconds / total;
    const offset   = circumference * (1 - fraction);
    ringFill.style.strokeDashoffset = offset;
  } else {
    // For count-up: fill ring every 60 seconds of a cycle
    const cycle    = seconds % 60;
    const fraction = cycle / 60;
    const offset   = circumference * (1 - fraction);
    ringFill.style.strokeDashoffset = offset;
  }
}


// ─── Modal Controls ───────────────────────────────────────
function openWeightTraining() {
  document.getElementById("weight-overlay").classList.add("open");
}

function openCourtTraining() {
  document.getElementById("court-overlay").classList.add("open");
}

function openAuth() {
  document.getElementById("auth-overlay").classList.add("open");
}

function closeModal(id) {
  document.getElementById(id).classList.remove("open");
}

function handleOverlayClick(e, id) {
  if (e.target.id === id) closeModal(id);
}


// ─── Auth ─────────────────────────────────────────────────
let authMode = "login";

function switchTab(mode) {
  authMode = mode;
  const isLogin = mode === "login";
  document.getElementById("tab-login").classList.toggle("active", isLogin);
  document.getElementById("tab-signup").classList.toggle("active", !isLogin);
  document.getElementById("field-name").style.display    = isLogin ? "none" : "block";
  document.getElementById("auth-title").textContent      = isLogin ? "Welcome Back" : "Create Account";
  document.getElementById("auth-sub").textContent        = isLogin ? "Sign in to track your progress." : "Join thousands of athletes today.";
  document.getElementById("auth-submit").textContent     = isLogin ? "Log In" : "Create Account";
}

function handleAuth(e) {
  e.preventDefault();
  closeModal("auth-overlay");
  showToast("✅ " + (authMode === "login" ? "Logged in" : "Account created") + " successfully!");
}


// ─── Toast ────────────────────────────────────────────────
function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3500);
}


// ─── Helpers ──────────────────────────────────────────────
function formatTime(totalSeconds) {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return m + ":" + String(s).padStart(2, "0");
}

function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}


// ─── Keyboard on home cards ───────────────────────────────
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("keydown", e => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); card.click(); }
  });
});