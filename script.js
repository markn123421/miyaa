const welcomeScreen = document.getElementById('welcome-screen');
const startButton = document.getElementById('start-btn');
const gameContainer = document.getElementById('game-container');
const messageBox = document.getElementById('message-box');
const finalMessage = document.getElementById('final-message');

const reasons = [
  "わあ、このレベルは簡単だったね！さあ、続けよう、僕のプリンセス ❤️",
  "このレベルはすごかったね！だから、と〜っても強いハグをあげるよ〜 ❤️<3",
  "これで君の手がもっと素早くなるよ…僕の友達と遊ぶためにね、えへへ〜 😏",
  "お願い…レベル10はクリアしないでぇぇぇ！！あああああ〜〜〜 😫",
  "次のレベルをクリアできたら…キス100回あげちゃうよ 😘",
  "もう仕方ない…次のレベルのために僕の貞操を捧げますっ 💗",
  "こんなに想ってる僕に…他の女の子なんて必要だと思う？",
  "好きだよ、ミヤ <33",
  "次は…例の4ラウンドをプレゼントしちゃうよ。わかるでしょ？😏",
  "ここまで来れるかわからないけど…君のこと、本当に大好きだよ。いつか家族を作って、たくさんの子どもたちと一緒に笑おうね！だから、いっしょに頑張ろう！💖"
];


const difficulty = [
  { duration: 1190 },
  { duration: 900 },
  { duration: 850 },
  { duration: 750 },
  { duration: 740 },
  { duration: 720 },
  { duration: 650 },
  { duration: 620 },
  { duration: 550 },
  { duration: 480 }
];

let currentIndex = 0;

startButton.addEventListener('click', () => {
  // Oculta la pantalla de bienvenida con doble seguridad
  welcomeScreen.classList.add('hidden');
  welcomeScreen.style.display = "none";

  gameContainer.classList.remove('hidden');
  spawnNextImage();
});

function spawnNextImage() {
  if (currentIndex >= reasons.length) {
    finalMessage.classList.remove('hidden');
    return;
  }

  const img = document.createElement('img');
  img.src = `corazon${currentIndex + 1}.png`;
  img.className = 'reason-image';

  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 100);
  img.style.left = `${x}px`;
  img.style.top = `${y}px`;

  gameContainer.appendChild(img);

  let timer = setTimeout(() => {
    img.remove();
    spawnNextImage(); // reintenta si no se atrapa
  }, difficulty[currentIndex].duration);

  img.addEventListener('click', () => {
    clearTimeout(timer);
    img.remove();
    showMessage(reasons[currentIndex]);
  });
}

function showMessage(text) {
  messageBox.textContent = text;
  messageBox.classList.remove('hidden');

  setTimeout(() => {
    messageBox.classList.add('hidden');
    currentIndex++;
    spawnNextImage();
  }, 6000);
}

