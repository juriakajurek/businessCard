let isNavOpen = false;
let btn = document.getElementById("btn-toggle-nav");
let sidebar = document.getElementById("nav-sidebar");
let items = document.getElementsByClassName("menu-item");
let aboutHeader = document.getElementById("about-header");

let line = document.getElementById("line");





let displayMenu = function(){
    if(isNavOpen){
        for(let i=0; i<items.length; i++){
            setTimeout(()=>{items[i].style.visibility = "hidden";},
            i*80);
        };
        btn.style.backgroundImage="url('img/hamburger.png')";
        btn.style.filter="invert(1)";
        setTimeout(()=>{sidebar.style.width = 0;}, items.length*80);   
    }else{
        sidebar.style.width = '50%';
        btn.style.filter="invert(0)";
        btn.style.backgroundImage="url('img/exit.png')";
        setTimeout(()=>{
            for(let i=0; i<items.length; i++){
                setTimeout(()=>{items[i].style.visibility = "visible";},
                i*80);
            };
        }, 300);
    }
    isNavOpen = !isNavOpen;
};
btn.addEventListener("click", displayMenu);

let scrollFunc = function(){
    let rect = aboutHeader.getBoundingClientRect();
    let elemBottom = rect.bottom;
    var isVisible = elemBottom >= 0;
    
    if(isVisible) {
        line.style.opacity = "0";
    }
    else{
        line.style.opacity = "1";
    }
}
window.addEventListener("wheel", scrollFunc);
window.addEventListener("keyup", scrollFunc);           //!!!!!!!!!!!!!!!!!!!!