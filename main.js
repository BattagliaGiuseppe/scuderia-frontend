// main.js - minimal frontend static that talks to backend API
const API_BASE = 'https://scuderia-backend.onrender.com';
const loginForm = document.getElementById('loginForm');
const msg = document.getElementById('msg');
const appArea = document.getElementById('appArea');
const vehiclesList = document.getElementById('vehiclesList');
const maintList = document.getElementById('maintList');
const addVehicleForm = document.getElementById('addVehicleForm');
const addMaintForm = document.getElementById('addMaintForm');
const m_vehicle = document.getElementById('m_vehicle');

let token = null;

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  msg.textContent = '';
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  try {
    const res = await fetch(API_BASE + '/auth/login', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    if (res.ok) {
      token = data.token;
      loginForm.style.display = 'none';
      appArea.style.display = 'block';
      loadVehicles();
      loadMaint();
    } else {
      msg.textContent = data.message || 'Errore login';
    }
  } catch (err) {
    msg.textContent = 'Errore di connessione';
  }
});

document.getElementById('logoutBtn').addEventListener('click', () => {
  token = null;
  loginForm.style.display = 'block';
  appArea.style.display = 'none';
});

async function loadVehicles() {
  vehiclesList.innerHTML = '';
  m_vehicle.innerHTML = '';
  try {
    const res = await fetch(API_BASE + '/api/vehicles', { headers: { Authorization: 'Bearer ' + token }});
    const data = await res.json();
    data.forEach(v => {
      const li = document.createElement('li');
      li.textContent = `${v.name} — ${v.chassis_number || ''} (${v.plate || ''})`;
      vehiclesList.appendChild(li);
      const opt = document.createElement('option'); opt.value = v.id; opt.text = v.name; m_vehicle.appendChild(opt);
    });
  } catch (e) { /* ignore */ }
}

addVehicleForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const payload = {
    name: document.getElementById('v_name').value,
    chassis_number: document.getElementById('v_chassis').value,
    plate: document.getElementById('v_plate').value
  };
  try {
    await fetch(API_BASE + '/api/vehicles', { method:'POST', headers: { 'Content-Type':'application/json', Authorization: 'Bearer ' + token }, body: JSON.stringify(payload) });
    document.getElementById('v_name').value=''; document.getElementById('v_chassis').value=''; document.getElementById('v_plate').value='';
    loadVehicles();
  } catch (e) {}
});

async function loadMaint() {
  maintList.innerHTML = '';
  try {
    const res = await fetch(API_BASE + '/api/maintenances', { headers: { Authorization: 'Bearer ' + token }});
    const data = await res.json();
    data.forEach(m => {
      const li = document.createElement('li');
      li.textContent = `${m.date} — ${m.type} — ${m.vehicle_name || '—'}`;
      maintList.appendChild(li);
    });
  } catch (e) {}
}

addMaintForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const payload = {
    vehicle_id: parseInt(document.getElementById('m_vehicle').value || 0),
    type: document.getElementById('m_type').value,
    date: document.getElementById('m_date').value,
    km_or_hours: parseInt(document.getElementById('m_km').value || 0),
    cost: parseFloat(document.getElementById('m_cost').value || 0),
    notes: ''
  };
  try {
    await fetch(API_BASE + '/api/maintenances', { method:'POST', headers: { 'Content-Type':'application/json', Authorization: 'Bearer ' + token }, body: JSON.stringify(payload) });
    document.getElementById('m_type').value=''; document.getElementById('m_date').value=''; document.getElementById('m_km').value=''; document.getElementById('m_cost').value='';
    loadMaint();
  } catch (e) {}
});
