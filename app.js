let topButton = document.getElementById("topBtn");


window.onscroll = function () {
    if (document.body.scrollTop >300 || document.documentElement.scrollTop > 300) {
        topButton.style.display ="block";
    }else{
        topButton.style.display ="none";

    }
}


topButton.addEventListener('click' , () =>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})