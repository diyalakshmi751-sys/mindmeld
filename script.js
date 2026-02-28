// Global variables
let model = null;
let webcam = null;
let labelContainer = null;
let maxPredictions = 0;

// Model folder path – make sure this matches your actual folder name
const MODEL_FOLDER = "./models/";

// ────────────────────────────────────────────────
// Login / Simulate functions (unchanged from your original)
function login() {
  window.location.href = "dashboard.html";
}

function simulateAI() {
  const correctEl = document.getElementById("correct");
  const pointsEl = document.getElementById("points");

  if (!correctEl || !pointsEl) {
    console.warn("Elements #correct or #points not found");
    return;
  }

  correctEl.innerText = parseInt(correctEl.innerText || "0") + 1;
  pointsEl.innerText = parseInt(pointsEl.innerText || "0") + 10;

  alert("✅ Waste classified correctly! +10 points");
}

// ────────────────────────────────────────────────
// Modal open / close
function openDemo() {
  const modal = document.getElementById('demo-modal');
  if (modal) {
    modal.style.display = 'block';
  } else {
    console.error("Modal #demo-modal not found in DOM");
  }
}

function closeModal() {
  const modal = document.getElementById('demo-modal');
  if (modal) {
    modal.style.display = 'none';
  }

  // Clean up webcam
  if (webcam) {
    try {
      webcam.stop();
    } catch (err) {
      console.warn("Could not stop webcam cleanly:", err);
    }
    webcam = null;
  }

  // Clear prediction display
  const labelCont = document.getElementById("label-container");
  if (labelCont) {
    labelCont.innerHTML = "";
  }
}

// ────────────────────────────────────────────────
// Initialize model + webcam
async function init() {
  const webcamContainer = document.getElementById("webcam-container");
  const labelCont = document.getElementById("label-container");

  if (!webcamContainer || !labelCont) {
    alert("Required elements (webcam-container or label-container) not found.");
    return;
  }

  try {
    // Loading feedback
    labelCont.innerHTML = '<div style="padding:20px; background:#e8f5e9; border-radius:12px; text-align:center; font-weight:500;">Loading model... please wait</div>';

    const modelURL = MODEL_FOLDER + "model.json";
    const metadataURL = MODEL_FOLDER + "metadata.json";

    console.log("Loading model from:", modelURL);

    model = await tmImage.load(modelURL, metadataURL);
    console.log("Model loaded successfully!");
    maxPredictions = model.getTotalClasses();

    const flip = true; // mirror effect (set false if you prefer)
    webcam = new tmImage.Webcam(400, 300, flip);

    await webcam.setup();   // ← camera permission prompt
    await webcam.play();

    window.requestAnimationFrame(loop);

    webcamContainer.innerHTML = "";
    webcamContainer.appendChild(webcam.canvas);

    // Prepare result display area
    labelCont.innerHTML = `
      <div id="top-prediction" style="
        font-size: 1.6rem;
        font-weight: 700;
        margin: 20px 0;
        padding: 16px;
        background: #f0fff4;
        border-radius: 12px;
        text-align: center;
        min-height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
      ">
        Waiting for first prediction...
      </div>

      <div id="all-predictions" style="margin-top: 24px;"></div>
    `;

  } catch (error) {
    console.error("Initialization failed:", error);

    let msg = "Failed to start demo:\n" + error.message;

    if (error.message && error.message.includes("404")) {
      msg += "\n\nModel files not found at " + MODEL_FOLDER + "\n" +
             "Check folder name, file names, and server root.";
    } else if (error.name === "NotAllowedError") {
      msg += "\n\nCamera access denied. Please allow camera permission.";
    } else if (error.name === "NotFoundError") {
      msg += "\n\nNo camera detected or already in use.";
    }

    alert(msg);
    labelCont.innerHTML = '<div style="color:#c62828; padding:20px; text-align:center;">Error loading demo. See console for details.</div>';
  }
}

// ────────────────────────────────────────────────
// Prediction loop
async function loop() {
  if (webcam) {
    webcam.update();           // refresh frame
    await predict();
  }
  window.requestAnimationFrame(loop);
}

// ────────────────────────────────────────────────
// Make prediction and update UI
async function predict() {
  if (!model || !webcam) return;

  try {
    const predictions = await model.predict(webcam.canvas);

    // Find highest confidence
    let topClass = "Uncertain";
    let topProb = 0;
    predictions.forEach(p => {
      if (p.probability > topProb) {
        topProb = p.probability;
        topClass = p.className;
      }
    });

    const topPercent = Math.round(topProb * 100);

    // Update top result (big & prominent)
    const topEl = document.getElementById("top-prediction");
    if (topEl) {
      let emoji = "❓";
      let color = "#555";

      if (topProb > 0.80) {
        emoji = "✅";
        color = "#2e7d32";
      } else if (topProb > 0.50) {
        emoji = "⚠️";
        color = "#f57c00";
      }

      topEl.innerHTML = `${emoji} ${topClass} <span style="color:${color};">(${topPercent}%)</span>`;
    }

    // Show all predictions with progress bars (like Teachable Machine)
    const allCont = document.getElementById("all-predictions");
    if (allCont) {
      allCont.innerHTML = "";
      predictions.forEach(pred => {
        const percent = (pred.probability * 100).toFixed(1);
        let barColor = "#e0e0e0";

        if (percent > 80) barColor = "#4caf50";
        else if (percent > 50) barColor = "#ff9800";

        const item = document.createElement("div");
        item.style.margin = "12px 0";
        item.innerHTML = `
          <div style="font-weight:500; margin-bottom:4px;">${pred.className}</div>
          <div style="
            background: #f5f5f5;
            border-radius: 8px;
            height: 20px;
            overflow: hidden;
          ">
            <div style="
              background: ${barColor};
              width: ${percent}%;
              height: 100%;
              transition: width 0.4s ease;
            "></div>
          </div>
          <div style="font-size:0.95rem; color:#666; text-align:right; margin-top:4px;">
            ${percent}%
          </div>
        `;
        allCont.appendChild(item);
      });
    }

  } catch (err) {
    console.warn("Prediction failed:", err);
  }
}

// ────────────────────────────────────────────────
// Smooth scroll for internal links (optional, unchanged)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});