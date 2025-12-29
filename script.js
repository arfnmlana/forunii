const messages = [
  "Aloo, Ni Komang Sri Wahyuni Murtika Dewi 👋",
  "Kamu tau ga? Aku tuh sering kalah kalau main game :(",
  "Tapi ada yang lebih parah, aku selalu kalah sama senyummanmu :3 ❤️",
  "Serius deh, aku nyaman banget sama kamu...",
  "Jadi ... ",
  "Unii, are u minee? 💕"
];

let index = 0;

const messageEl = document.getElementById("message");
const nextBtn = document.getElementById("nextBtn");

nextBtn.addEventListener("click", () => {
  index++;
  if (index < messages.length) {
    messageEl.textContent = messages[index];
  } else {
    messageEl.textContent = "Unii, are u minee 💕";

    // buat container tombol
    const btnContainer = document.createElement("div");
    btnContainer.style.marginTop = "20px";

    // tombol Iya
    const yesBtn = document.createElement("button");
    yesBtn.textContent = "Iya ❤️";
    yesBtn.style.margin = "10px";
    yesBtn.onclick = () => {
      messageEl.innerHTML = "🎉 Yeay! ur minee  <br> (Hadiah Real Lifenya nyusul yaww) 😍";
      btnContainer.remove();
      

      // munculin efek love & bunga
      startFloating();

      // buat container tombol tambahan
      const extraBtns = document.createElement("div");
      extraBtns.style.marginTop = "20px";

      // tombol peluk
      const hugBtn = document.createElement("button");
      hugBtn.textContent = "Peluk 🤗";
      hugBtn.style.margin = "10px";
      hugBtn.onclick = () => {
        for (let i = 0; i < 15; i++) {
          const heart = document.createElement("span");
          heart.textContent = "❤️";
          heart.classList.add("float");
          heart.style.left = Math.random() * 100 + "vw";
          heart.style.animationDuration = 2 + Math.random() * 2 + "s";
          document.body.appendChild(heart);
          setTimeout(() => heart.remove(), 4000);
        }
      };

      // tombol hadiah
      const giftBtn = document.createElement("button");
      giftBtn.textContent = "Buka Hadiah 🎁";
      giftBtn.style.margin = "10px";

      giftBtn.onclick = () => {
        // langsung pindah ke halaman bunga
        window.location.href = "bunga.html"; 
      };

      extraBtns.appendChild(hugBtn);
      extraBtns.appendChild(giftBtn);
      document.querySelector(".container").appendChild(extraBtns);


      // munculin efek love & bunga
      startFloating();
      // bikin gambar kecil di bawah tombol
      const cuteImg = document.createElement("img");
      cuteImg.src = "Desain tanpa judul(8).png"; // ganti dengan nama file sesuai
      cuteImg.style.width = "200px"; // biar gak kegedean
      cuteImg.style.marginTop = "200px";
      cuteImg.style.display = "block"; // biar tampil di bawah tombol
      cuteImg.style.borderRadius = "20px"; // agak rounded

      cuteImg.style.margin = "20px auto 0"; // atas auto bawah
      cuteImg.style.display = "block"; // biar bisa auto center

      // tambahkan ke container tombol tambahan
      extraBtns.appendChild(cuteImg);

      };

    // tombol Ga Mau
    const noBtn = document.createElement("button");
    noBtn.textContent = "Ga Mau 😝";
    noBtn.style.margin = "10px";

    // bikin tombol kabur kalau di-hover
    noBtn.onmouseover = () => {
      const x = Math.floor(Math.random() * 300) - 150;
      const y = Math.floor(Math.random() * 200) - 100;
      noBtn.style.transform = `translate(${x}px, ${y}px)`;
    };

    btnContainer.appendChild(yesBtn);
    btnContainer.appendChild(noBtn);
    document.querySelector(".container").appendChild(btnContainer);

    nextBtn.style.display = "none";
  }
});

function startFloating() {
  const emojis = ["❤️", "💖", "🌸", "🌹"];
  for (let i = 0; i < 25; i++) {
    const span = document.createElement("span");
    span.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    span.classList.add("float");
    span.style.left = Math.random() * 100 + "vw";
    span.style.animationDuration = 3 + Math.random() * 2 + "s";
    document.body.appendChild(span);

    setTimeout(() => {
      span.remove();
    }, 5000);
  }
}

  const playBtn = document.getElementById("playBtn");
  const popup = document.getElementById("popup");
  const mainContent = document.getElementById("mainContent");
  const bgMusic = document.getElementById("bgMusic");

  playBtn.addEventListener("click", () => {
    bgMusic.play();                 // mulai musik
    popup.style.display = "none";   // sembunyiin popup
    mainContent.style.display = "block"; // tampilkan isi
  });

