const mainFormClose = document.getElementById("mainFormClose");
const mainForm = document.getElementById("mainForm");
const btnHelp = document.getElementById("btnHelp");
const notbgBody = document.getElementsByClassName("notbg__body");
const cssmenu = document.getElementById("cssmenu");

function changeZindexFornotbgBody(zIndex){
    for (const section of notbgBody) {
        section.style.zIndex = zIndex;
    }
}

mainFormClose.addEventListener('click', ()=>{
    mainForm.classList.remove("fade__in");
    btnHelp.style.zIndex = "2";
    changeZindexFornotbgBody(1);
    cssmenu.style.zIndex = 9;
});

btnHelp.addEventListener('click', ()=>{
    mainForm.classList.add("fade__in");
    btnHelp.style.zIndex = "0";
    changeZindexFornotbgBody(0);
    cssmenu.style.zIndex = 0;
})

document.addEventListener('keydown', event=>{
    if(event.code === 'Escape' && !mainForm.classList.contains("fade__out")){
        mainForm.classList.add("fade__out");
        changeZindexFornotbgBody(1);
        cssmenu.style.zIndex = 0;
    }
});

window.addEventListener('scroll', () => {
    if(window.scrollY > 800){
        btnHelp.classList.add('fade__in');
    }else{
        btnHelp.classList.remove('fade__in');
    }
});

const sidebar = document.getElementsByClassName("sidebar");
const footerSection = document.getElementById("footer");
const windowWeight = window.innerWidth;

const footerObserver = new IntersectionObserver(
    (entries) => {
        // console.log(entries);
        entries.forEach((entry) => {
            // console.log(entry);
            if (entry.isIntersecting && windowWeight > 991){
                // console.log(entry);
                for (const el of sidebar) {
                    el.style.top = "-" + footer.offsetHeight + "px";
                    // el.classList.add("sidebar__fixed");
                }
            }
            else{
                for (const el of sidebar) {
                    el.style.top = 20 + "px";
                    // el.classList.remove("sidebar__fixed");
                }
            }
        });
    }, 
    {
        // заданная область увеличена на 50px,
        // чтобы загрузка картинки началась до появления во viewport
        rootMargin: "-50px 0px 0px"
    }
);


footerObserver.observe(footerSection);

const cssmenuObserver = new IntersectionObserver(
    (entries) => {
        // console.log(entries);
        entries.forEach((entry) => {
            // console.log(entry);
            if (entry.isIntersecting && windowWeight > 991){
                // console.log(entry);
                for (const el of sidebar) {
                    el.style.top = cssmenu.offsetHeight + 20 + "px";
                }
            }
            else{
                for (const el of sidebar) {
                    el.style.top = 20 + "px";
                }
            }
        });
    }, 
);

cssmenuObserver.observe(cssmenu);

console.log("i am groot!")