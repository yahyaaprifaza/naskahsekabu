function createPasswordPopup() {
    const overlay = document.createElement("div");
    overlay.className = "overlay";
    overlay.id = "overlay";

    const popup = document.createElement("div");
    popup.className = "popup";
    popup.id = "popup";

    const title = document.createElement("h2");
    title.textContent = "Masukkan Password";

    const passwordInput = document.createElement("input");
    passwordInput.type = "password";
    passwordInput.placeholder = "Password";
    passwordInput.id = "passwordInput";

    const submitButton = document.createElement("button");
    submitButton.textContent = "Submit";
    submitButton.onclick = checkPassword;

    popup.appendChild(title);
    popup.appendChild(passwordInput);
    popup.appendChild(submitButton);
    overlay.appendChild(popup);
    document.body.appendChild(overlay);
}

function checkPassword() {
    const correctPassword = "naskah2225";
    const userPassword = document.getElementById("passwordInput").value;

    if (userPassword === correctPassword) {
        showWelcomePopup();
    } else {
        window.location.href = "./pw salah.html";
    }
}

function showWelcomePopup() {
    const popup = document.getElementById("popup");
    popup.innerHTML = "";

    const welcomeMessage = document.createElement("h2");
    welcomeMessage.textContent = "Selamat datang!";
    const closeButton = document.createElement("button");
    closeButton.textContent = "Lanjutkan";
    closeButton.onclick = () => {
        document.getElementById("overlay").style.display = "none";
    };

    popup.appendChild(welcomeMessage);
    popup.appendChild(closeButton);
}

window.onload = createPasswordPopup;