// Function to handle Telegram input
document.getElementById('telegramInput').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    const message = e.target.value;
    if (message.trim()) {
      alert('Esto enviará el mensaje a Telegram: ' + message);
      e.target.value = '';
    }
  }
});