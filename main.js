const loginForm = document.getElementById('loginForm');
const messageDiv = document.getElementById('message');

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    const res = await fetch('https://scuderia-backend.onrender.com/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();
    if (res.ok) {
      messageDiv.style.color = 'green';
      messageDiv.textContent = `Benvenuto ${data.email}!`;
    } else {
      messageDiv.style.color = 'red';
      messageDiv.textContent = data.error;
    }
  } catch (err) {
    messageDiv.style.color = 'red';
    messageDiv.textContent = 'Errore di connessione al backend';
  }
});




