function sendMessage() {
    var message = document.getElementById("message-input").value;
    if (message.trim() !== "") {
        var chatBox = document.getElementById("chat-box");
        
        // Membuat elemen pesan baru
        var messageElement = document.createElement("div");
        messageElement.textContent = "Anonymous: " + message;
        
        // Menambahkan pesan ke chat box
        chatBox.appendChild(messageElement);
        
        // Scroll ke bawah otomatis
        chatBox.scrollTop = chatBox.scrollHeight;
        
        // Mengosongkan input
        document.getElementById("message-input").value = "";
    }
}