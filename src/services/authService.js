function authenticateUser(email, password) {
  const validUser = {
    email: "admin@example.com",
    password: "password123",
  };

  if (!email || !password) {
    return {
      ok: false,
      error: "Missing credentials.",
    };
  }

  if (email !== validUser.email) {
    return {
      ok: false,
      error: "Unknown email address.",
    };
  }

  if (password !== validUser.password) {
    return {
      ok: false,
      error: "Incorrect password.",
    };
  }

  return {
    ok: true,
    user: {
      email,
      role: "admin",
    },
  };
}

module.exports = {
  authenticateUser,
};
