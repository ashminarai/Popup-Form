document.getElementById("popup").addEventListener("click", function(){
    document.querySelector(".popupbox").style.display = "flex";
})
document.querySelector(".fa-times-circle").addEventListener("click", function(){
    document.querySelector(".popupbox").style.display = "none";
})