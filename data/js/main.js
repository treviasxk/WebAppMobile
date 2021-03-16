function OpenNavigation(Open){
    if(Open == false){
        Navigate.style.left = "0px";
        document.body.style.overflow = "hidden";
    }else{
        Navigate.style.left = "-100%";
        document.body.style.overflow = "visible";
    }
    
    if(Navigate.style.left == "0px"){
        Navigate.style.left = "-100%";
        document.body.style.overflow = "visible";
    }else{
        Navigate.style.left = "0px";
        document.body.style.overflow = "hidden";
    }
}