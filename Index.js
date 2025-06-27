AOS.init({ duration: 800, once: true });

const form = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const successMessage = document.getElementById('successMessage');
const failMessage = document.getElementById('failMessage');

const nameField = document.getElementById('name');
const emailField = document.getElementById('email');
const messageField = document.getElementById('message');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');

form.addEventListener('submit', async function (e) {
  e.preventDefault();
  let hasError = false;

  successMessage.classList.add('hidden');
  failMessage.classList.add('hidden');

  if (!nameField.value.trim()) {
    nameField.classList.add('border-red-500');
    nameError.classList.remove('hidden');
    hasError = true;
  } else {
    nameField.classList.remove('border-red-500');
    nameError.classList.add('hidden');
  }

  if (!emailField.value.trim() || !emailField.value.includes('@')) {
    emailField.classList.add('border-red-500');
    emailError.classList.remove('hidden');
    hasError = true;
  } else {
    emailField.classList.remove('border-red-500');
    emailError.classList.add('hidden');
  }

  if (!messageField.value.trim()) {
    messageField.classList.add('border-red-500');
    messageError.classList.remove('hidden');
    hasError = true;
  } else {
    messageField.classList.remove('border-red-500');
    messageError.classList.add('hidden');
  }

  if (hasError) return;

  const formData = new FormData(form);
  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending...';

  try {
    const res = await fetch('https://formspree.io/f/xrbqrazd', {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (res.ok) {
      successMessage.classList.remove('hidden');
      form.reset();
    } else {
      failMessage.classList.remove('hidden');
    }
  } catch (err) {
    failMessage.classList.remove('hidden');
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Send Message';
  }
});

const lenis = new Lenis({
  duration: 1.2,      // how long the scroll takes
  easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),  // custom ease-out
  smooth: true
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

AOS.init({
  duration: 1000,  // animation duration in ms
  once: true       // only animate once when scrolled into view
});


