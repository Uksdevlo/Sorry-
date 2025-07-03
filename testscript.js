
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const resp = document.getElementById('response');

    yesBtn.addEventListener('click', () => {
      resp.textContent = "I’m so grateful. Thank you ❤️";
      saveResponse('yes');
    });

    noBtn.addEventListener('click', () => {
      resp.textContent = "I understand. Take your time.";
      saveResponse('no');
    });

    function saveResponse(answer) {
      const data = { answer, time: new Date().toISOString() };
      localStorage.setItem('loveResponse', JSON.stringify(data));
    }

    // Optional: recall past response and show it
    document.addEventListener('DOMContentLoaded', () => {
      const stored = JSON.parse(localStorage.getItem('loveResponse'));
      if (stored) {
        resp.textContent = stored.answer === 'yes'
          ? "You already said yes 😊"
          : "You already said no. I understand 💔";
      }
    });