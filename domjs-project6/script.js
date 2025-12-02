const progress = document.querySelector('.progress');
const percentText = document.getElementById('percent');
const button = document.getElementById('startBtn');

button.addEventListener('click', () => {
  let width = 0;
  const interval = setInterval(() => {
    if (width >= 100) {
      clearInterval(interval);
      percentText.textContent = "Download Complete!";
    } else {
      width++;
      progress.style.width = width + '%';
      percentText.textContent = width + '%';
    }
  }, 50); // speed of the download effect
});
