const initial = document.getElementById("initial");
const active = document.getElementById("active");
const submit = document.getElementById("submit-btn");
const dismiss = document.getElementById("dismiss-btn");
const form = document.getElementById("form");
const email = document.getElementById("email");
const error = document.getElementById("error");

active.style.display = "none";
error.style.display = "none";

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (emailRegex.test(data.email)) {
    initial.style.display = "none";
    active.style.display = "grid";

    email.classList.remove("error-input");
    error.style.display = "none";
  } else {
    email.classList.add("error-input");
    error.style.display = "block";
  }
});

dismiss.addEventListener("click", (e) => {
  initial.style.display = "grid";
  active.style.display = "none";
  form.reset();
});
