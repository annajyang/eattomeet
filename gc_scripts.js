document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('chatInput');
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        sendMessage();
      }
    });
  });
  
  function sendMessage() {
    var input = document.getElementById('chatInput');
    var message = input.value.trim();
    
    if (message) {
      // Create message bubble container
      var messageBubble = document.createElement('div');
      messageBubble.className = 'message-bubble sent-message'; // Add sent-message class for styling
      
      // Create message text element
      var messageText = document.createElement('span');
      messageText.textContent = message;
      
      // Append message text to bubble container
      messageBubble.appendChild(messageText);
      
      // Append message bubble to chat messages
      var chatMessages = document.getElementById('chatMessages');
      chatMessages.appendChild(messageBubble);
      
      // Scroll to the bottom of the chat
      chatMessages.scrollTop = chatMessages.scrollHeight;
      
      // Clear the input
      input.value = '';
    }
  }
  