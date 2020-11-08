const messageList = document.getElementById('message-list')
var messageInput = document.getElementById('message-input')
var username = document.getElementById('username').textContent
const activeUserCount = document.getElementById('activeusercount')
const socket = io()


function newMessageAddList(username,message) {
    if(message != ""){
        socket.emit('chat-message',{username,message})
    }else{
        window.alert("Boş mesaj gönderemezsiniz...")
    }
}

function messageSend(){
    var str = 'Kullanıcı adı : '
    username = username.replace(str,'')
    var message = messageInput.value
    newMessageAddList(username,message)
    messageInput.value = ""
}

socket.on('chat-message',function(msg){
    messageList.innerHTML += "<li><strong>"+msg.username+"</strong> : "+msg.message+"</li>"
    //scroll u alttan başlatma
    messageList.scrollTop = messageList.scrollHeight;
})
socket.on('active-user-count',function(num){
    activeUserCount.innerHTML= '<strong>Aktif Kullanıcı Sayısı :</strong> '+num
})



//Enterla mesaj gönderme
messageInput.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById("sendButton").click();
    }
})

//Form kontrol
function validateForm() {
    var x = document.forms["loginForm"]["username"].value;
    if (x == "") {
      alert("Kullanıcı adı boş olamaz !!");
      return false;
    }
  }