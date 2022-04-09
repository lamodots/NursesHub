var LoadTime = setInterval( animatedScreen, 3000);
var main = document.getElementById('main');
function animatedScreen (){
    if (!LoadTime) {
        //remain on loading page
     main.transition="all 2s ease-out";
     clearInterval(LoadTime);
    }else{
        // Load index page in public
        window.location="file:///C:/NursesHub/public/index.html";
    }
}