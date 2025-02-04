$(document).ready(function(){

    /*

    //MÚSICA 1
    var audio = $("#audio1")[0];
    $("#play1").click(function(){
        audio.play();
    });
    $("#pause1").click(function(){
        audio.pause();
    });
    $("#stop1").click.click(function(){
        audio.pause();
        audio.currentTime = 0;
    });

    //MÚSICA 2
    var audio = $("#audio2")[0];
    $("#play2").click(function(){
        audio.play();
    });
    $("#pause2").click(function(){
        audio.pause();
    });
    $("#stop2").click.click(function(){
        audio.pause();
        audio.currentTime = 0;
    });

    //MÚSICA 3
    var audio = $("#audio3")[0];
    $("#play3").click(function(){
        audio.play();
    });
    $("#pause3").click(function(){
        audio.pause();
    });
    $("#stop3").click.click(function(){
        audio.pause();
        audio.currentTime = 0;
    });

    */

    //SCRIPT DA MÚSICA SECRETA
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