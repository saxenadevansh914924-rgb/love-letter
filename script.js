const letterCard = document.querySelector("#letterCard");
const openLetter = document.querySelector("#openLetter");
const replayLetter = document.querySelector("#replayLetter");
const sparkButton = document.querySelector("#sparkButton");
const typedMessage = document.querySelector("#typedMessage");
const ambient = document.querySelector(".ambient");

const message = `happy birthday Muskan ji, apki muskaan mein ek ajeeb si shaanti hai.
I hope aapka Aaj ka din bahut achha jae,aaj hm logo ko baat krte hue kitne mahine ho gye.aap meri life ka ek aham hissa bn chuki hai.
mai aapse itni dur hu aapse mil to nhi skta ,but aap mujhe btao aapko kya pasand hai ,mai aapke address pr order kr dunga ,jo bhi aapko pasand ho.
Jab bhi aapse baat hoti hai, din thoda halka, aur dil thoda zyada sachcha lagne lagta hai.

Main shayad perfect lafz na dhoondh paaun, par itna zaroor kehna chahta hoon: aap mere liye special ho.

Meri mann ki baat bas itni hai... agar aap chaho, to main aapki zindagi mein ek pyaari si jagah banana chahta hoon.
i love you so much Muskan ji. ❤️
`
;

let typeTimer;

function typeLetter() {
  clearInterval(typeTimer);
  typedMessage.textContent = "";

  let index = 0;
  typeTimer = setInterval(() => {
    typedMessage.textContent += message[index];
    index += 1;

    if (index >= message.length) {
      clearInterval(typeTimer);
    }
  }, 33);
}

function openLoveLetter() {
  letterCard.classList.add("open");
  window.setTimeout(typeLetter, 620);
  burstSparks(20);
}

function replayLoveLetter() {
  letterCard.classList.remove("open");
  clearInterval(typeTimer);
  typedMessage.textContent = "";

  window.setTimeout(openLoveLetter, 420);
}

function burstSparks(count = 14) {
  for (let i = 0; i < count; i += 1) {
    const spark = document.createElement("span");
    spark.className = "spark";
    spark.textContent = i % 3 === 0 ? "♡" : i % 3 === 1 ? "✦" : "✿";
    spark.style.setProperty("--x", `${Math.random() * 96}%`);
    spark.style.setProperty("--s", `${0.65 + Math.random() * 1.1}`);
    spark.style.animationDelay = `${Math.random() * 0.6}s`;
    spark.style.color = i % 2 === 0 ? "rgba(255, 229, 236, 0.95)" : "rgba(255, 215, 161, 0.92)";
    ambient.appendChild(spark);

    window.setTimeout(() => spark.remove(), 4700);
  }
}

openLetter.addEventListener("click", openLoveLetter);
replayLetter.addEventListener("click", replayLoveLetter);
sparkButton.addEventListener("click", () => burstSparks(18));

window.addEventListener("load", () => {
  window.setTimeout(openLoveLetter, 900);
});
