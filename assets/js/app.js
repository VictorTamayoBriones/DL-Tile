$(document).ready(function(){

    var btnDespliegue = document.querySelector('#servicies');
    var desplegable = document.querySelector('.desplegable');
    
    var btnMenu = document.querySelector('#menu');
    var ulMenu = document.querySelector('#ul');

    var picture = document.querySelectorAll('#galleryImg');

    $(desplegable).hide();

    btnDespliegue.addEventListener('mouseover', ()=>{
        $(desplegable).show();
    });

    btnDespliegue.addEventListener('mouseout', ()=>{    
        $(desplegable).hide();     
    });

    btnMenu.addEventListener('click', ()=>{
        $(ulMenu).slideToggle();
    });

    picture.addEventListener('click', ()=>{

    });

});