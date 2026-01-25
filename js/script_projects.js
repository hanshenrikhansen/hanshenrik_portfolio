/* ==================== PROJECT CARD BACKGROUNDS ==================== */
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".project-card").forEach(card => {
    const image = card.dataset.image;
    if (!image) return;

    card.style.setProperty("--bg", `url("./images/${image}")`);
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("projectsContainer");
  const cards = document.querySelectorAll(".project-card");
  const dotsContainer = document.getElementById("projectsDots");
  const prevBtn = document.querySelector(".projects-arrow.left");
  const nextBtn = document.querySelector(".projects-arrow.right");

  if (!container || !cards.length || !dotsContainer) return;

  let currentIndex = 0;
  const visibleCards = 3;
  const maxIndex = cards.length - visibleCards;
  const scrollIntervalTime = 3000;
  let autoScrollInterval;

  /* ==================== DOTS ==================== */
  dotsContainer.innerHTML = "";
  for (let i = 0; i <= maxIndex; i++) {
    const dot = document.createElement("span");
    if (i === 0) dot.classList.add("active");

    dot.addEventListener("click", () => {
      stopAutoScroll();
      scrollTo(i);
      startAutoScroll();
    });

    dotsContainer.appendChild(dot);
  }

  const dots = dotsContainer.querySelectorAll("span");

  /* ==================== SCROLL FUNCTION ==================== */
  function scrollTo(index) {
    currentIndex = Math.max(0, Math.min(index, maxIndex));
    const cardWidth = cards[0].offsetWidth + 30;

    container.scrollTo({
      left: cardWidth * currentIndex,
      behavior: "smooth"
    });

    updateDots();
  }

  function updateDots() {
    dots.forEach(dot => dot.classList.remove("active"));
    dots[currentIndex]?.classList.add("active");
  }

  /* ==================== ARROWS ==================== */
  prevBtn?.addEventListener("click", () => {
    stopAutoScroll();
    scrollTo(currentIndex - 1);
    startAutoScroll();
  });

  nextBtn?.addEventListener("click", () => {
    stopAutoScroll();
    scrollTo(currentIndex + 1);
    startAutoScroll();
  });

  /* ==================== AUTO SCROLL ==================== */
  function startAutoScroll() {
    autoScrollInterval = setInterval(() => {
      if (currentIndex >= maxIndex) {
        scrollTo(0);
      } else {
        scrollTo(currentIndex + 1);
      }
    }, scrollIntervalTime);
  }

  function stopAutoScroll() {
    clearInterval(autoScrollInterval);
  }

  /* Pause on hover (recommended UX) */
  container.addEventListener("mouseenter", stopAutoScroll);
  container.addEventListener("mouseleave", startAutoScroll);

  /* Recalculate on resize */
  window.addEventListener("resize", () => scrollTo(currentIndex));

  /* Start */
  startAutoScroll();
});


document.addEventListener("DOMContentLoaded", () => {
  const modalOverlay = document.getElementById("projectModal");
  const modalBody = modalOverlay.querySelector(".project-modal-body");
  const modalClose = modalOverlay.querySelector(".project-modal-close");

  // Project details
// Project details
const projectDetails = {
    "project-webpage": {
    title: "Personal Portfolio Webpage",
    description: "This project contains the full code repository used for building my personal portfolio webpage that you are currently viewing",
    technologies: ["CSS", "Javascript", "HTML"],
    results: "A fully implemented and working webpage",
    type: "Web development",
    github: "https://github.com/hanshenrikhansen/hanshenrik_portfolio"
  },
    "project-dog": {
    title: "Dog Breed Rating App",
    description: "An API based Python application using external APIs for dog breeds, storing user ratings persistently, and displaying breed images.",
    technologies: ["Python", "APIs"],
    results: "User-friendly and reusable code (OOP). The app allows the user to perform breed rating and tracking",
    type: "Python App",
    github: "https://github.com/hanshenrikhansen/Dog-Rater-App"
  },
  "project-fakenews": {
    title: "Fake News Detection",
    description: "BERT-based NLP model for detecting misinformation on Twitter. Trained on labeled datasets with preprocessing and feature engineering.",
    technologies: ["Python", "PyTorch", "Transformers", "NLP"],
    results: "F1 score of 93% using BiLSTM",
    type: "Data Science & Machine Learning",
    github: "https://github.com/hanshenrikhansen/Fake-News-Detection-on-Twitter"
  },
  "project-esg": {
    title: "Student Dropout Prediction",
    description: "Setting up- and optimizing machine learning models in order to achieve best performance for predicting student dropouts. This was a part of my final exam project for a machine learning course I attended as part of my masters in Data Science. It is a group effort and was created together with 3 of my fellow students.",
    technologies: ["Python", "SQL", "Scikit", "Tensorflow"],
    results: "F1 score of 0.9 and dropout class recall of 0.83",
    type: "Data Science & Machine Learning",
    github: "https://github.com/hanshenrikhansen/StudentDropoutPrediction"
  },
  "project-dog-2": {
    title: "Comparative Study of Next Word Predictors",
    description: "This study compares three approaches, statistical N-gram models, LSTM networks, and pretrained GPT-2 transformers, using a Wikipedia-derived corpus.",
    technologies: ["Python", "Transformers", "HuggingFace APIs", "Tensorflow", "Torch", "tqdm"],
    results: "LSTM model perplexity score of 159, Mini GPT2 model perplexity score of 69 but very poor perplexity for N-gram model",
    type: "Data Science and Machine Learning",
    github: "https://github.com/hanshenrikhansen/Comparative-study-of-next-word-predictors"
  },
    "project-goldprice": {
    title: "Gold Price Prediction",
    description: "This paper examines the ability of time series models to forecast weekly gold prices using the SPDR Gold Trust ETF (GLD) as a proxy.",
    technologies: ["R"],
    results: "All the models seriously underperform when tested on the testing data and achieve a rather high RMSE indicating a high error level, as well as high MAE indicating high bias and MAPE of around 9.7%.",
    type: "Predictive Analytics",
    github: "https://github.com/hanshenrikhansen/Personal-Portfolio-Webpage"
  }
};


  // Open modal when clicking a card
  document.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", () => {
      const key = card.dataset.modal;
      const details = projectDetails[key];
      if (!details) return;

    modalBody.innerHTML = `
    <h3>${details.title}</h3>
    <p>${details.description}</p>
    ${details.results ? `<p><strong>Results / Impact:</strong> ${details.results}</p>` : ""}
    <p><strong>Technologies:</strong> ${details.technologies.join(", ")}</p>
    ${details.type ? `<p><strong>Type:</strong> ${details.type}</p>` : ""}
    <p><a href="${details.github}" target="_blank">View on GitHub</a></p>
    `;


      modalOverlay.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  });

  // Close modal
  modalClose.addEventListener("click", () => {
    modalOverlay.classList.remove("active");
    document.body.style.overflow = "";
  });

  modalOverlay.addEventListener("click", e => {
    if (e.target === modalOverlay) {
      modalOverlay.classList.remove("active");
      document.body.style.overflow = "";
    }
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      modalOverlay.classList.remove("active");
      document.body.style.overflow = "";
    }
  });
});
