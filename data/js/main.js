function OpenNavigation(Open){
    if(Open == false){
        Navigate.style.left = "0px";
        document.body.style.overflow = "hidden";
    }else{
        Navigate.style.left = "-100%";
        document.body.style.overflowY = "visible";
    }
    
    if(Navigate.style.left == "0px"){
        Navigate.style.left = "-100%";
        document.body.style.overflowY = "visible";
    }else{
        Navigate.style.left = "0px";
        document.body.style.overflow = "hidden";
    }
}

function CloseScreenLoading(){
    document.body.style.overflowY = "visible";
    ScreenLoading.style.display = "none";
}

function BackPage(){
    document.getElementsByClassName('Content')[0].classList.toggle('SlideRight');
    setTimeout(function() {
        window.history.back();
    }, 0);
}