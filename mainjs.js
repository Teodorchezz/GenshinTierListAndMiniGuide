var usia = 0;
function change_fur_img() {
    if(usia == 0){
        document.getElementById("fr_img").setAttribute("src", "Furina_Card_2.jpg") ;
        usia += 1;
    }
    else if(usia == 1){
        document.getElementById("fr_img").setAttribute("src", "Furina_Card.png") ;
        usia -= 1;
    }
}

var pashalko = 0;
function pashalko_activate(){
    document.getElementById("fur_vid").setAttribute("src", "https://www.youtube.com/embed/WlR0mFut-rw?si=4HCwm2y7ZTEw6IJs?autoplay=1&mute=1") ;
}
function pashalko_reverse(){
    document.getElementById("fur_vid").setAttribute("src", "https://www.youtube.com/embed/r6Zs1c87Vxc?si=NSPQUZpubiWkqPvm") ;
}
document.addEventListener('keydown', function(event) {
    if (event.code == ('KeyF' && 'KeyR')) {
        if(pashalko == 0){
            pashalko_activate();
            pashalko += 1;
        }
        else if(pashalko == 1){
            pashalko_reverse();
            pashalko -= 1;
        }
      }
});
