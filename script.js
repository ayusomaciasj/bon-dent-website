// hamburger menu function
function toggleMenu() {
  const nav = document.getElementById("main-nav");
  const btn = document.getElementById("hamburger-btn");

  nav.classList.toggle("show");
  btn.textContent = nav.classList.contains("show") ? "✖" : "☰";
}

//auto-close menu when a link is clicked (mobile)
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('#main-nav a').forEach(link =>
    link.addEventListener('click', () => {
      document.getElementById("main-nav").classList.remove("show");
      document.getElementById("hamburger-btn").textContent = "☰";
    })
  );
});

// faq function for the pointing arrow and accordion effect
document.addEventListener('DOMContentLoaded', function () {
  const faqButtons = document.querySelectorAll('.faq-question');

  faqButtons.forEach(button => {
    button.addEventListener('click', () => {
      const parent = button.closest('.faq-item');
      const answer = parent.querySelector('.faq-answer');
      const isOpen = parent.classList.contains('open');

      // Close all items
      document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('open');
        item.querySelector('.faq-answer').style.maxHeight = null;
        item.querySelector('.faq-toggle').textContent = '▶';
      });

      // Open the clicked one
      if (!isOpen) {
        parent.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + "px";
        parent.querySelector('.faq-toggle').textContent = '▼';
      }
    });
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('darkModeToggle');
  const prefersDark = localStorage.getItem('darkMode') === 'true';

  if (prefersDark) {
    document.body.classList.add('dark-mode');
  }

  toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark);
  });
});

//function for estimated payments for services 
function estimatePayment() {
  const select = document.getElementById("serviceSelect");
  const result = document.getElementById("estimateResult");
  const service = select.value;

  const services = {
    tradicionales: { setup: 249000, monthly: 30000 },
    autoligados: { setup: 330000, monthly: 28000 },
    invisalign: { setup: 3400000, monthly: 60000 },
    lingual: { setup: 450000, monthly: 40000 },
    blanqueamiento: { setup: 80000, monthly: 35000 },
    retenedores: { setup: 45000, monthly: 4500 },
  };

  if (!service) {
    result.innerHTML = "";
    return;
  }

  const selected = services[service];
  const months = 12; // Example: 12 months treatment
  const total = selected.setup + (selected.monthly * months);

  result.innerHTML = `
    <p><strong>Instalación:</strong> $${selected.setup.toLocaleString()}</p>
    <p><strong>Pago mensual:</strong> $${selected.monthly.toLocaleString()}</p>
    <p><strong>Total estimado por ${months} meses:</strong> $${total.toLocaleString()}</p>
  `;
}

// Function to handle the scroll to top button
window.onscroll = function () {
  const btn = document.getElementById("scrollBtn");
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

// Scroll to top function
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

//effect for fade-in on page load
window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("fade-in");
});



