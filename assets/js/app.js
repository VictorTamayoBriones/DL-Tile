$(document).ready(function(){
<<<<<<< HEAD
    
    var despliegue = document.querySelector('#servicies');
=======

    var btnDespliegue = document.querySelector('#servicies');
>>>>>>> 636c50b2a62177d4bd80126e1668b573aeb48d3c
    var desplegable = document.querySelector('.desplegable');
    
    var btnMenu = document.querySelector('#menu');
    var ulMenu = document.querySelector('#ul');

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
    $('.materialboxed').materialbox();
});