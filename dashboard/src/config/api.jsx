import API_BASE from "../config/api";

fetch(`${API_BASE}/api/send-otp`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ mobileNumber }),
  credentials: "include",
});
