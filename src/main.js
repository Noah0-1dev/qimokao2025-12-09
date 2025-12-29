import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './style.scss';

AOS.init({
  duration: 1200,
  easing: 'ease-in-out',
  once: true,
  offset: 100
});

// Form validation
const form = document.getElementById('contactForm');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Vui lòng điền đầy đủ thông tin!');
    return;
  }
  if (!/\S+@\S+\.\S+/.test(email)) {
    alert('Email không hợp lệ!');
    return;
  }
  alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm.');
  form.reset();
});