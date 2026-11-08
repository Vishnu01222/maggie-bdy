
// 🎂 BIRTHDAY COUNTDOWN SETTINGS
const birthdayMonth = 10; // November (0 = January)
const birthdayDay = 17;

// Get the next birthday date
function getNextBirthday() {
    const now = new Date();

    let birthday = new Date(
        now.getFullYear(),
        birthdayMonth,
        birthdayDay,
        0, 0, 0
    );

    if (birthday < now) {
        birthday.setFullYear(now.getFullYear() + 1);
    }

    return birthday;
}

// ❤️ UPDATED COUNTDOWN
function updateCountdown() {
    const now = new Date();
    const birthday = getNextBirthday();

    const difference = birthday - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );
    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );
    const seconds = Math.floor(
        (difference / 1000) % 60
    );

    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");

    // Birthday celebration
    if (
        now.getMonth() === birthdayMonth &&
        now.getDate() === birthdayDay
    ) {
        document.getElementById("birthdayMessage").textContent =
            "🎉 Happy Birthday Maggie! 🎂";

        document.getElementById("countdown").style.display = "none";
    }
}

updateCountdown();
setInterval(updateCountdown, 1000);


// ❤️ FLOATING HEARTS
function createHeart() {
    const heart = document.createElement("div");

    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration =
        (Math.random() * 3 + 3) + "s";

    heart.style.fontSize =
        (Math.random() * 20 + 15) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 400);




// 🎁 SURPRISE POPUP
const surpriseBtn = document.getElementById("surpriseBtn");
const popup = document.getElementById("surprisePopup");
const closePopup = document.getElementById("closePopup");

if (surpriseBtn && popup) {
    surpriseBtn.addEventListener("click", () => {
        popup.style.display = "flex";
        launchFireworks();
    });
}

if (closePopup && popup) {
    closePopup.addEventListener("click", () => {
        popup.style.display = "none";
    });
}





// 🎆 FIREWORKS
function launchFireworks() {
    for (let i = 0; i < 35; i++) {
        const firework = document.createElement("div");

        firework.innerHTML = "✨";
        firework.classList.add("firework");

        firework.style.left = Math.random() * 100 + "vw";
        firework.style.top = Math.random() * 70 + "vh";

        document.body.appendChild(firework);

        setTimeout(() => {
            firework.remove();
        }, 2000);
    }
}


// 💌 ROMANTIC LETTER TYPING ANIMATION
const letterText = `Dear Maggie ❤️,

You are one of the most beautiful parts of my life.

Your smile makes ordinary days feel special.
I hope your birthday brings you endless happiness,
beautiful memories, and everything your heart wishes for.

Keep smiling and shining always.

Happy Birthday, Maggie! ❤️

With lots of love.`;

const letterElement = document.getElementById("letterText");
const letterBtn = document.getElementById("letterBtn");

if (letterBtn && letterElement) {
    letterBtn.addEventListener("click", () => {
        letterElement.textContent = "";

        let index = 0;

        const typing = setInterval(() => {
            if (index < letterText.length) {
                letterElement.textContent += letterText.charAt(index);
                index++;
            } else {
                clearInterval(typing);
            }
        }, 45);
    });
}
