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

  
  function addReceivedMessage(sender, text, imageUrl) {
    var messageBubble = document.createElement('div');
    messageBubble.className = 'message-bubble received-message';

    var profilePic = document.createElement('img');
    profilePic.className = 'profile-pic';
    profilePic.src = imageUrl; // Set the source to the profile image URL
    profilePic.alt = sender + "'s profile picture";

    var messageContent = document.createElement('div');
    messageContent.className = 'message-content';

    var senderName = document.createElement('p');
    senderName.className = 'sender-name';
    senderName.textContent = sender;

    var messageText = document.createElement('span');
    messageText.className = 'message-text';
    messageText.textContent = text;

    messageContent.appendChild(senderName);
    messageContent.appendChild(messageText);

    if (sender === 'John Doe') {
      // Create an anchor tag for the profile picture
      var profileLink = document.createElement('a');
      profileLink.href = 'johndoe.html';
      // Append the profile picture to the anchor tag
      profileLink.appendChild(profilePic);
      messageBubble.appendChild(profileLink);
    } else {
      messageBubble.appendChild(profilePic);
    }

    messageBubble.appendChild(messageContent);

    var chatMessages = document.getElementById('chatMessages');
    chatMessages.appendChild(messageBubble);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

document.addEventListener('DOMContentLoaded', () => {
    addReceivedMessage('John Doe', 'Good morning, everyone!', 'imgs/johnicon.svg');
    addReceivedMessage('Jane Smith', 'How are we all doing today?', 'imgs/janeicon.svg');
    addReceivedMessage('Alan', 'Great, how are you?', 'imgs/alanicon.svg');
    addReceivedMessage('John Doe', 'When were you all born?', 'imgs/johnicon.svg');
    addReceivedMessage('Jane Smith', 'A long time ago! I still remember World War I!', 'imgs/janeicon.svg');
});