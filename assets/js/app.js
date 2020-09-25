$(document).ready(function(){
    
    var despliegue = document.querySelector('#servicies');
    var desplegable = document.querySelector('.desplegable');
    var btnMenu = document.querySelector('#menu');
    var ulMenu = document.querySelector('#ul');

    $(desplegable).hide();

    despliegue.addEventListener('mouseover', ()=>{
        var desplegable = document.querySelector('.desplegable');

        $(desplegable).slideDown();

    });

    despliegue.addEventListener('mouseout', ()=>{    
        $(desplegable).slideUp();     
    });

    btnMenu.addEventListener('click', ()=>{
        $(ulMenu).slideToggle();
    });
    $('.materialboxed').materialbox();
});