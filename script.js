//ANALISAR DEPOIS SE SERÃO ADICIONADAS IMAGENS QUE POSSUEM LIGAÇÃO ÀS MÚSICAS, VAI SER PRECISO FAZER UMA ESPÉCIE DE "CLICK FUNCTION"
$(document).ready(function(){

    /*

    //MÚSICA 1: TRIO PARADA DURA - ME MATA DE UMA VEZ
    var audio1 = $("#audio1")[0];
    $("#play1").click(function(){
        audio1.play();
    });
    $("#pause1").click(function(){
        audio1.pause();
    });
    $("#stop1").click.click(function(){
        audio1.pause();
        audio1.currentTime = 0;
    });

    //MÚSICA 2
    var audio2 = $("#audio2")[0];
    $("#play2").click(function(){
        audio2.play();
    });
    $("#pause2").click(function(){
        audio2.pause();
    });
    $("#stop2").click.click(function(){
        audio2.pause();
        audio2.currentTime = 0;
    });

    //MÚSICA 3: NINJA LOW TAPER FADE
    var audio3 = $("#audio3")[0];
    $("#play3").click(function(){
        audio3.play();
    });
    $("#pause3").click(function(){
        audio3.pause();
    });
    $("#stop3").click.click(function(){
        audio3.pause();
        audio3.currentTime = 0;
    });

    */

    //SCRIPT DA MÚSICA SECRETA: KASINO - CAN'T GET OVER FT. GILBERTO BARROS
    var audioS = $("#audioSecreto")[0];
    $("#play").click(function(){
        audioS.play();
    });
    $("#pause").click(function(){
        audioS.pause();
    });
    $("#stop").click.click(function(){
        audioS.pause();
        audioS.currentTime = 0;
    });

});