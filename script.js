const bgMusic = document.getElementById("bgMusic");
const button = document.querySelector("button");

button.addEventListener("click", function () {
    bgMusic.play();

    document.querySelector(".container").innerHTML = `
        <h1>Babbiiaaa ❤️</h1>

        <div class="letter">
            <p>
                Aap mere liye bahut zyada special hain...
                aur sirf special hi nhi, bahut important bhi hai. 🥺❤️
            </p>

            <p>
                Sach kahe to meri duniya hi aap hai.
                Aapke alawa mujhe kisi aur se koi matlab nahi hai.
                Aapke bina mera kahi mann nhi lgta sacchii..
            </p>

            <p>
                Agr aapse thodi der bhi baat nhi hoti na,
                to mujhe bahut zyada overthinking hone lagti hai. 🥺
                Aapse baat karna, aapki caring, aapka love
                aur aapke saath spend kiya hua time
                mujhe bahut bahut pasand hai. ❤️
            </p>

            <p>
                Bas aap hamesha aise hi rahiyega...
                jaise abhi hai. 🫶🏻
                Mereko aapmai koi change nhi chahiye.
                Bas meri kuch-kuch baatein bhi maan liya kariye. 😭❤️
            </p>

            <p>
                Aur sabse important baat...
            </p>

            <p class="love">
                Main aapse bahut bahut bahut jyada pyaar karti hoon. ❤️🥺
            </p>

            <p class="final-love">
                I love you sooo muchhh, Patidev ji ❤️🫶🏻💗
            </p>
        </div>

        <button onclick="nextScreen()">Continue 💕</button>
    `;
});

function nextScreen() {
    document.querySelector(".container").innerHTML = `
        <h1>One More Thing... 🥺❤️</h1>
        <p>There is a little surprise waiting for you...</p>
        <button onclick="finalMessage()">Open 💌</button>
    `;
}

function finalMessage() {
    document.querySelector(".container").innerHTML = `
        <div class="final-screen">

            <div class="big-heart">❤️</div>

            <h1>Happy Boyfriend's Day,<br>Babbiiaaa! ❤️</h1>

            <p class="final-text">
                Aap mere liye bahut special hain. 🥺❤️
            </p>

            <p class="final-text">
                Aap meri smile ki wajah hain. 🥺💕
            </p>

            <div class="heart-line">
                ❤️ 🫶🏻 ❤️ 🫶🏻 ❤️
            </div>

            <div class="photo-section">
                <h2>Our Little Memories 📸💕</h2>

                <div class="photos">
                    <img src="Photo 1.jpeg" alt="Our memory ❤️">
                    <img src="Photo 2.jpeg" alt="Our memory ❤️">
                </div>
            </div>

            <p class="forever">
                I Love You Sooooo Muchhh! 💗
            </p>

            <p class="patidev">
                — Your Patidev ji's girl ❤️
            </p>

            <button onclick="giftScreen()">Next Surprise 🎁</button>
  `;
}

function giftScreen() {
    document.querySelector(".container").innerHTML = `
        <div class="gift-screen">

            <h1>One Last Surprise... 🥺❤️</h1>

            <p class="gift-subtitle">
                I have something special for you...
            </p>

            <div class="gift-box" onclick="openGift()">
                <div class="gift-lid">🎀</div>
                <div class="gift-body">🎁</div>
            </div>

            <p class="tap-text">
                Tap the gift 🎁
            </p>

        </div>
    `;
}

function openGift() {
    const container = document.querySelector(".container");

    // Hearts create
    const hearts = document.createElement("div");
    hearts.className = "heart-explosion";
    hearts.innerHTML = `
        ❤️ 💕 💗 💖 ❤️ 💕 💗 💖 ❤️ 💕
        💗 ❤️ 💖 💕 ❤️ 💗 💖 ❤️ 💕 💗
        💖 💗 ❤️ 💕 💖 ❤️ 💗 💕 ❤️ 💖
    `;

    document.body.appendChild(hearts);

    // 2 seconds later show the heart message
    setTimeout(() => {
        hearts.remove();

        container.innerHTML = `
            <div class="heart-reveal">

                <div class="huge-heart">❤️</div>

                <h1>You win my heart ❤️</h1>

                <button onclick="nextLoveMessage()">
                    Tap 💕
                </button>

            </div>
        `;
    }, 2000);
}

function nextLoveMessage() {
    document.querySelector(".container").innerHTML = `
        <div class="love-popup">

            <div class="sparkles">✨ 💕 ✨</div>

            <div class="popup-heart">❤️</div>

            <h1>I Love You So Muchhh! 🥺❤️</h1>

            <p>
                Babbiiaaa, you are my favourite person. 🫶🏻
            </p>

            <div class="sparkles">💗 ✨ 💗 ✨ 💗</div>

        </div>
    `;
}