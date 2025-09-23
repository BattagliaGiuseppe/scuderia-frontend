import axios from "axios";

const BASE_URL = "https://scuderia-backend.onrender.com/api"; // <-- qui non deve avere /api/api

// Token di test (se serve autenticazione, lo aggiungeremo)
let token = null;

async function testEndpoints() {
  try {
    console.log("🔹 Test: /login");
    const loginRes = await axios.post(`${BASE_URL}/login`, {
      username: "admin",
      password: "admin123" // cambia con la tua password
    });
    console.log("✅ Login OK:", loginRes.data);
    token = loginRes.data.token;
  } catch (err) {
    console.error("❌ Login error:", err.response?.status, err.response?.data);
  }

  try {
    console.log("🔹 Test: /vehicles");
    const res = await axios.get(`${BASE_URL}/vehicles`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    console.log("✅ Vehicles OK:", res.data);
  } catch (err) {
    console.error("❌ Vehicles error:", err.response?.status, err.response?.data);
  }

  try {
    console.log("🔹 Test: /expiring_parts");
    const res = await axios.get(`${BASE_URL}/expiring_parts`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    console.log("✅ Expiring parts OK:", res.data);
  } catch (err) {
    console.error("❌ Expiring parts error:", err.response?.status, err.response?.data);
  }

  try {
    console.log("🔹 Test: /components");
    const res = await axios.get(`${BASE_URL}/components`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    console.log("✅ Components OK:", res.data);
  } catch (err) {
    console.error("❌ Components error:", err.response?.status, err.response?.data);
  }

  try {
    console.log("🔹 Test: /maintenances");
    const res = await axios.get(`${BASE_URL}/maintenances`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    console.log("✅ Maintenances OK:", res.data);
  } catch (err) {
    console.error("❌ Maintenances error:", err.response?.status, err.response?.data);
  }
}

testEndpoints();
