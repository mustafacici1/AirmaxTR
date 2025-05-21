// Scroll to Top Fonksiyonu
let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.documentElement.scrollTop > 300) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.documentElement.scrollTop = 0;
}

// Typing Effect
document.addEventListener('DOMContentLoaded', function() {
  const typedElement = document.querySelector(".auto-typed");
  if (typedElement) {
    var typed = new Typed(".auto-typed", {
      strings: ["KULLANIŞLI", "KALİTELİ", "UCUZ"],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    });
  }
});

// Scroll Animation
window.addEventListener("scroll", muncul);
function muncul() {
  let elements = document.querySelectorAll(".naik");
  elements.forEach(element => {
    let windowHeight = window.innerHeight;
    let elementTop = element.getBoundingClientRect().top;
    let elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      element.classList.add("tampil");
    } else {
      element.classList.remove("tampil");
    }
  });
}

// Hover Effect for Headings
document.addEventListener('DOMContentLoaded', function() {
  const spans = document.querySelectorAll("h1 span");
  spans.forEach(span => {
    span.addEventListener("mouseover", () => {
      span.classList.add("animated", "rubberBand");
    });
    span.addEventListener("mouseout", () => {
      span.classList.remove("animated", "rubberBand");
    });
  });
});

// Telegram Form Integration
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault(); // Sayfanın yenilenmesini önler
      
      const formStatus = document.getElementById('formStatus');
      formStatus.style.display = 'block';
      formStatus.innerHTML = '<div class="alert alert-info">Mesajınız gönderiliyor...</div>';
      
      // Telegram Bot Bilgileri
      const botToken = '7240069804:AAGkiVg0N2iheUX1TSFC2XrySFf5VTHR3Tg';
      const chatId = '7680503563';
      
      // Form verilerini topla
      const formData = {
        name: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
      };

      // Telegram mesaj formatı
      const telegramMessage = `📬 Yeni İletişim Formu\n\n`
        + `👤 Ad Soyad: ${formData.name}\n`
        + `📧 E-posta: ${formData.email}\n`
        + `📝 Mesaj: ${formData.message}`;

      // Telegram API Request
      fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: telegramMessage
        })
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('API yanıt vermedi');
        }
        return response.json();
      })
      .then(data => {
        if (data.ok) {
          formStatus.innerHTML = '<div class="alert alert-success">Mesajınız başarıyla gönderildi! 🎉</div>';
          contactForm.reset();
          setTimeout(() => {
            formStatus.style.display = 'none';
          }, 5000);
        } else {
          formStatus.innerHTML = `<div class="alert alert-danger">Hata: ${data.description}</div>`;
        }
      })
      .catch(error => {
        formStatus.innerHTML = '<div class="alert alert-danger">Bağlantı hatası! Lütfen tekrar deneyin.</div>';
        console.error('Error:', error);
      });
    });
  }
});

// AOS Initialization
document.addEventListener('DOMContentLoaded', function() {
  AOS.init({
    duration: 1000,
    once: true,
    easing: 'ease-in-out'
  });
});