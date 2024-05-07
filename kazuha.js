var pashalko_kazuha = 0

function pashalko_kazuha_active(){
    let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
    width=520,height=315,left=100,top=100`;
    win = window. open ('DK_Pashalka.html', 'DK_Pashalka', params)
}

function pashalko_kazuha_reverse(){
    
}
document.addEventListener('keydown', function(event) {
    if (event.code == ('KeyD' && 'KeyK')) {
        if(pashalko_kazuha == 0){
            pashalko_kazuha_active();
            pashalko_kazuha += 1;
        }
        else if(pashalko_kazuha == 1){
            pashalko_kazuha_reverse();
            pashalko_kazuha -= 1;
        }
      }
});