let container=document.querySelector("#body");
let themeChangeBtn=document.getElementById("dLbtn");
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