var Loading = true;
//Fechar ou abrir menu lateral
function OpenNavigation(Open){
    if(Open == false){
        Navigate.style.left = "0px";
    }else{
        Navigate.style.left = "-100%";
    }
    
    if(Navigate.style.left == "0px"){
        Navigate.style.left = "-100%";
        if(Loading == false){
            document.body.style.overflow = "visible";
        }
    }else{
        Navigate.style.left = "0px";
        document.body.style.overflow = "hidden";
    }
}

//Fechar tela de carregamento
function CloseScreenLoading(){
    Loading = false;
    document.body.style.overflowY = "visible";
    ScreenLoading.style.display = "none";
}

//Volta a página com animação
function BackPage(){
    document.getElementsByClassName('SlideLeft')[0].classList.toggle('SlideRight');
    setTimeout(function() {
        window.history.back();
    }, 200);
}


//Configurações Swipe
window.addEventListener('load', () => {
    var content = document.getElementById('Content');
    if(document.body.contains(document.getElementById('Navigate'))){
        swipedetect(content, (swipedir) => {
            if (swipedir =='right')
                OpenNavigation(true);
        });
        var navigate = document.getElementById('Navigate')
        swipedetect(navigate, (swipedir) => {
            if (swipedir =='left')
                OpenNavigation(false);
        });
    } else {
        swipedetect(content, (swipedir) => {
            if (swipedir =='right')
                BackPage();
        });
    }
});

//Função pra detectar ação swipe
function swipedetect(el, callback){
        var touchsurface = el,
        swipedir,
        startX,
        startY,
        distX,
        distY,
        threshold = 100,
        restraint = 100,
        allowedTime = 200,
        elapsedTime,
        startTime,
        handleswipe = callback //|| function(swipedir){}
      
        touchsurface.addEventListener('touchstart', (e) => {
            var touchobj = e.changedTouches[0]
            swipedir = 'none'
            dist = 0
            startX = touchobj.pageX
            startY = touchobj.pageY
            startTime = new Date().getTime()
        }, false)
        
        touchsurface.addEventListener('touchend', (e) => {
            var touchobj = e.changedTouches[0]
            distX = touchobj.pageX - startX
            distY = touchobj.pageY - startY
            elapsedTime = new Date().getTime() - startTime
            if (elapsedTime <= allowedTime){
                if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){
                    swipedir = (distX < 0)? 'left' : 'right'
                }
                else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint){
                    swipedir = (distY < 0)? 'up' : 'down'
                }
            }
            handleswipe(swipedir)
        }, false)
    }

//Mostrar e esconder AppBar
var prevScrollpos = window.pageYOffset;
window.onscroll = () => {
    if(Loading == false){
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos >= currentScrollPos || prevScrollpos == 0) {
            document.getElementById("AppBar").style.top = "0";
        } else {
            document.getElementById("AppBar").style.top = "-55px";
        }
        prevScrollpos = currentScrollPos;
    }
    else{
        document.getElementById("AppBar").style.top = "0";
    }
}