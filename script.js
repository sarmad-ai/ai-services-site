const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const data = new FormData(form);
  const name = data.get('name');
  const email = data.get('email');
  const project = data.get('project');
  const message = data.get('message');
  const subject = encodeURIComponent(`New project inquiry: ${project}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nProject type: ${project}\n\n${message}`);
  window.location.href = `mailto:tsarmad30@gmail.com?subject=${subject}&body=${body}`;
  status.textContent = 'Opening your email app to send this...';
  form.reset();
});
