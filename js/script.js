const skillCards = document.querySelectorAll(".skill-card");

skillCards.forEach(card => {
  const header = card.querySelector(".skill-header");
  const content = card.querySelector(".skill-content");

  // store the default text (for skills vs chat)
  header.dataset.defaultText = header.textContent;

  header.addEventListener("click", () => {
    const isActive = card.classList.contains("active");

    if (isActive) {
      // collapse
      content.style.maxHeight = null;
      card.classList.remove("active");

      // reset header text
      header.textContent = header.dataset.defaultText;
    } else {
      // expand
      content.style.maxHeight = content.scrollHeight + "px";
      card.classList.add("active");

      // if this is the chat card, toggle text
      if (card.classList.contains("chat-card")) {
        header.textContent = "Close Chat";
      }
    }
  });
});

/* ==================== MODAL ELEMENTS ==================== */
const modal = document.getElementById("modal");
const modalBody = modal.querySelector(".modal-body");
const closeBtn = modal.querySelector(".modal-close");

/* ==================== EDUCATION CONTENT ==================== */
const content = {
  dal: {
    title: "Main learnings from Dalhousie University",
    points: [
      "Advanced coursework in data analytics",
      "International academic collaboration",
      "Applied data-driven problem solving"
    ]
  },
  "cbs-ds": {
    title: "Main learnings from CBS – Data Science",
    points: [
      "Machine learning & deep learning",
      "Natural language processing",
      "Python, SQL, Power BI & Tableau",
      "GDPR and Data Privacy"
    ]
  },
  "cbs-ba": {
    title: "Main learnings from CBS – Business Administration",
    points: [
      "Micro & macroeconomics",
      "Financial analysis",
      "Business strategy & analytics",
      "Statistics and Econometrics"
    ]
  },
  maastricht: {
    title: "Main learnings from Maastricht University",
    points: [
      "EU law & legal methodology",
      "Case-based learning",
      "International academic environment"
    ]
  },
  ku: {
    title: "Main learnings from University of Copenhagen",
    points: [
      "Legal analysis & argumentation",
      "Research methodology",
      "Structured problem solving"
    ]
  },
  hhx: {
    title: "Main learnings from HHX",
    points: [
      "Fundamental business economics",
      "Introductory accounting & finance",
      "Commercial understanding"
    ]
  }
};

/* ==================== WORK EXPERIENCE CONTENT ==================== */
const workContent = {
  "work-esg": {
    title: "ESG Student Analyst – GN Store Nord",
    points: [
      "Automated ESG data workflows using Python, SQL and Microsoft Fabric",
      "Built Power BI reports supporting CSRD & ESRS reporting",
      "Drived GNs pollution reporting for the annual sustainability report",
      "Created External ESG Data Hub for investors and stakeholders",
      "Collaborated with sustainability, operations and finance stakeholders",
      "Improved data quality and reporting efficiency"
    ]
  },
  "work-agile": {
    title: "Agile Center of Excellence – GN Store Nord",
    points: [
      "Supported agile transformation initiatives",
      "Worked with agile frameworks and best practices",
      "Assisted teams with process optimization",
      "Data-driven evaluation of agile maturity"
    ]
  },
  "work-carlsberg-events": {
    title: "Event & Sales Worker – Home of Carlsberg",
    points: [
      "Customer-facing sales and event execution",
      "Brand representation and storytelling",
      "Hosted Beer Tastings and Historical tours for B2B and B2C guests",
      "Collaboration in fast-paced event environments"
    ]
  },
  "work-novo": {
    title: "Student Worker – Payroll – Novo Nordisk",
    points: [
      "Applied and collected reimbursesment",
      "Solved HR related cases in Service Now",
      "Data handling with high accuracy requirements",
      "Collaboration across HR and finance functions",
    ]
  },
  "work-carlsberg-dist": {
    title: "Distributional Employee – Carlsberg Danmark",
    points: [
      "Logistics and warehouse operations",
      "Team-based physical work environment",
      "Understanding of supply chain processes"
    ]
  },
  "work-carlsberg-sales": {
    title: "Sales Consultant – Off Trade – Carlsberg Danmark",
    points: [
      "Retail sales and customer engagement",
      "Market analysis and product placement",
      "Brand visibility and sales optimization"
    ]
  },
  "work-mentor": {
    title: "Student Mentor – Hillerød Handelsskole",
    points: [
      "Academic mentoring and guidance",
      "Supporting younger students",
      "Communication and leadership development"
    ]
  }
};

document.addEventListener("DOMContentLoaded", () => {

  /* ==================== EDUCATION CLICK HANDLER ==================== */
document.querySelectorAll(".education-item").forEach(item => {
  item.addEventListener("click", () => {
    const key = item.dataset.modal;
    const data = content[key];
    if (!data) return;

    openModal(data);
  });
});

  /* ==================== WORK CLICK HANDLER ==================== */
  document.querySelectorAll(".work-item").forEach(item => {
    item.addEventListener("click", () => {
      const key = item.dataset.modal;
      const data = workContent[key];
      if (!data) return;

      openModal(data);
    });
  });

});

/* ==================== MODAL OPEN FUNCTION ==================== */
function openModal(data) {
  modalBody.innerHTML = `
    <h3>${data.title}</h3>
    <ul>
      ${data.points.map(point => `<li>${point}</li>`).join("")}
    </ul>
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

/* ==================== CLOSE MODAL ==================== */
closeBtn.addEventListener("click", closeModal);

modal.addEventListener("click", e => {
  if (e.target === modal) closeModal();
});

/* ==================== ESC KEY SUPPORT ==================== */
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
});

function closeModal() {
  modal.classList.remove("active");
  document.body.style.overflow = "";
}
