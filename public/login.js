/**
 * checkpont 2
 * mudincer
 */
const form = document.getElementById("loginForm");
const message = document.getElementById("message");

function setMessage(text, type = "info") {
  message.textContent = text;
  message.dataset.type = type;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validateLogin(email, password) {
  const errors = [];

  if (!email) {
    errors.push("Email is required.");
  } else if (!isValidEmail(email)) {
    errors.push("Email format is invalid.");
  }

  if (!password) {
    errors.push("Password is required.");
  } else if (password.length < 6) {
    errors.push("Password must be at least 6 characters.");
  }

  return errors;
}

async function submitLogin(email, password) {
  const response = await fetch("/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  return response.json();
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const errors = validateLogin(email, password);

  if (errors.length > 0) {
    setMessage(errors.join(" "), "error");
    return;
  }

  try {
    setMessage("Checking credentials...", "loading");
    const result = await submitLogin(email, password);

    if (result.ok) {
      setMessage(`Login success. Welcome ${result.user.email}.`, "success");
    } else {
      setMessage(result.error || "Login failed.", "error");
    }
  } catch (error) {
    setMessage("Network error. Please try again.", "error");
  }
});