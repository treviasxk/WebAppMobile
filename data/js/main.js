function OpenNavigation(Open){
    if(Open == false){
        Navigate.style.left = "0px";
        document.body.style.overflow = "hidden";
    }else{
        Navigate.style.left = "-100%";
        document.body.style.overflow = "scroll";
    }
    if(Navigate.style.left == "0px"){
        Navigate.style.left = "-100%";
        document.body.style.overflow = "scroll";
    }else{
        Navigate.style.left = "0px";
        document.body.style.overflow = "hidden";
    }
}