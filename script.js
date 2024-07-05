const form = document.querySelector("#signup-form");
const emailField = document.querySelector(".email-field");
const emailInput = document.querySelector(".email");
const passField = document.querySelector(".create-password");
const passInput = document.querySelector(".password");
const cPassField = document.querySelector(".confirm-password");
const cPassInput = document.querySelector(".cPassword");

function checkEmail() {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  if (!emailPattern.test(emailInput.value)) {
    emailField.classList.add("invalid");
  } else {
    emailField.classList.remove("invalid");
  }
}

const eyeIcons = document.querySelectorAll(".show-hide");

eyeIcons.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    const pInput = eyeIcon.previousElementSibling;
    if (pInput.type === "password") {
      eyeIcon.classList.replace("bx-hide", "bx-show");
      pInput.type = "text";
    } else {
      eyeIcon.classList.replace("bx-show", "bx-hide");
      pInput.type = "password";
    }
  });
});

function createPass() {
  const passPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passPattern.test(passInput.value)) {
    passField.classList.add("invalid");
  } else {
    passField.classList.remove("invalid");
  }
}

function confirmPass() {
  if (passInput.value !== cPassInput.value || cPassInput.value === "") {
    cPassField.classList.add("invalid");
  } else {
    cPassField.classList.remove("invalid");
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkEmail();
  createPass();
  confirmPass();

  emailInput.addEventListener("input", checkEmail);
  passInput.addEventListener("input", createPass);
  cPassInput.addEventListener("input", confirmPass);

  if (
    !emailField.classList.contains("invalid") &&
    !passField.classList.contains("invalid") &&
    !cPassField.classList.contains("invalid")
  ) {
    // Simulación de acción de envío exitoso
    setTimeout(() => {
      // Redirigir a una página de éxito
      window.location.href = "success.html";
    }, 1000); // Simular un pequeño retraso para propósitos demostrativos
  }
});
