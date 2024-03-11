const mainFormClose = document.getElementById("mainFormClose");
const mainForm = document.getElementById("mainForm");
const btnHelp = document.getElementById("btnHelp");
const notbgBody = document.getElementsByClassName("notbg__body");

function changeZindex(zIndex){
    for (const section of notbgBody) {
        section.style.zIndex = zIndex;
    }
}

mainFormClose.addEventListener('click', ()=>{
    mainForm.classList.remove("fade__in");
    btnHelp.style.zIndex = "2";
    changeZindex(1);
});

btnHelp.addEventListener('click', ()=>{
    mainForm.classList.add("fade__in");
    btnHelp.style.zIndex = "0";
    changeZindex(0);
})

document.addEventListener('keydown', event=>{
    if(event.code === 'Escape' && !mainForm.classList.contains("fade__out")){
        mainForm.classList.add("fade__out")
    }
});

window.addEventListener('scroll', () => {
    if(window.scrollY > 800){
        btnHelp.classList.add('fade__in');
    }else{
        btnHelp.classList.remove('fade__in');
    }
})