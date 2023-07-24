let loginButton=document.getElementById('loginBtn');
let message=document.getElementById("message");
let username=document.getElementById("name");
let password=document.getElementById('psw');
username.value=""
password.value=""
function login(){
    let usname=username.value;
    let psw=password.value;
    let adminUsname="admin";
    let adminPsw="root"; 
    if(usname===adminUsname && psw===adminPsw){
        window.location.href="/home.html";
    }else {
        message.innerText="Try again!";
    }
}
username.addEventListener('keydown',e =>{
    if(e.key==='Enter'){
        document.location.href="#psw"
    }else {}
})
password.addEventListener('keydown', e =>{
    if(e.key === 'Enter'){
        login()
    }else{}
})
loginButton.addEventListener('click',()=>login())

