// ----- Contact form (demo only: it does not send an email or store data) -----
const form = document.querySelector("#contactForm");
const formMessage = document.querySelector("#formMessage");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const fields = [
        document.querySelector("#name"),
        document.querySelector("#email"),
        document.querySelector("#message")
    ];

    let allValid = true;

    fields.forEach(function (field) {
        const value = field.value.trim();
        const valid = value !== "" && field.checkValidity();
        field.classList.toggle("invalid", !valid);
        if (!valid) {
            allValid = false;
        }
    });

    if (!allValid) {
        formMessage.className = "error";
        formMessage.textContent =
            "Please enter your name, a valid email address, and a message.";
        return;
    }

    formMessage.className = "success";
    formMessage.textContent =
        "Thank you! Your message was received by this demo form.";

    form.reset();
});


form.addEventListener("input", function (event) {
    event.target.classList.remove("invalid");
});

// ----- Footer year -----
const yearElement = document.querySelector("#year");
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// ----- Profile image fallback -----
const avatar = document.querySelector("#avatar");
const profileImage = document.querySelector("#profileImage");

function showFallback() {
    avatar.classList.add("no-image");
}

if (profileImage) {
    if (profileImage.complete && profileImage.naturalWidth === 0) {
        showFallback();
    }
    profileImage.addEventListener("error", showFallback);
}
