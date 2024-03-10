window.addEventListener("load", function(){
    setTimeout(
        function open(event){
            document.querySelector(".popup").style.display = "block";
        },
        1000
    )
 });


 document.querySelector("#close").addEventListener ("click", function(){
    document.querySelector(".popup").style.display = "none";
 });

 document.querySelector("#play").addEventListener ("click", function(){
    document.querySelector(".popup").style.display = "none";
 });

 let play = document.getElementById("play");
        function playMusic() {
            let audio = new Audio("Galeri Perpisahan/dandan.mp3");
                audio.play()
        }
        play.addEventListener("click", playMusic)
      