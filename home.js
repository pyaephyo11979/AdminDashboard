let container=document.querySelector("#body");
let themeChangeBtn=document.getElementById("dLbtn");
let homeBtn=document.getElementById('homeBtn');
let usersBtn=document.getElementById('usersBtn');
let staticsBtn=document.getElementById('staticsBtn');
let booksBtn=document.getElementById('booksBtn');
homeBtn.addEventListener('click',()=>{
    homeBtn.classList.add('action');
    usersBtn.classList.remove('action');
    staticsBtn.classList.remove('action');
    booksBtn.classList.remove('action');
})
usersBtn.addEventListener('click',()=>{
    usersBtn.classList.add('action');
    homeBtn.classList.remove('action');
    staticsBtn.classList.remove('action');
    booksBtn.classList.remove('action');
})
staticsBtn.addEventListener('click',()=>{
    staticsBtn.classList.add('action');
    usersBtn.classList.remove('action');
    homeBtn.classList.remove('action');
    booksBtn.classList.remove('action');
})
booksBtn.addEventListener('click',()=>{
    booksBtn.classList.add('action');
    usersBtn.classList.remove('action');
    staticsBtn.classList.remove('action');
    homeBtn.classList.remove('action');
})

function dark(){
    container.setAttribute('data-bs-theme','dark');
}
function light(){
    container.setAttribute('data-bs-theme','light');
}
themeChangeBtn.addEventListener('click',()=>{
    if(!container.hasAttribute('data-bs-theme')){
        dark()
    }else if(container.hasAttribute('data-bs-theme')){
        light()
        container.removeAttribute('data-bs-theme');
    }
})
