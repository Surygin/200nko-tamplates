const mainFormClose = document.getElementById("mainFormClose");
const mainForm = document.getElementById("mainForm");
const btnHelp = document.getElementById("btnHelp");

mainFormClose.addEventListener('click', ()=>{
    mainForm.classList.remove("fade__in")
});

btnHelp.addEventListener('click', ()=>{
    mainForm.classList.add("fade__in")
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