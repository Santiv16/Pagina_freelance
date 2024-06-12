document.addEventListener("DOMContentLoaded", function() {
    const medicoBtn = document.getElementById("medicoBtn");
    const pacienteBtn = document.getElementById("pacienteBtn");
    const loginForm = document.getElementById("loginForm");

    medicoBtn.addEventListener("click", function() {
        medicoBtn.classList.add("selected");
        pacienteBtn.classList.remove("selected");
        loginForm.style.display = "block";
    });

    pacienteBtn.addEventListener("click", function() {
        pacienteBtn.classList.add("selected");
        medicoBtn.classList.remove("selected");
        loginForm.style.display = "block";
    });
});
