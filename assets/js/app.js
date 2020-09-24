$(document).ready(function(){
    //$('.materialboxed').materialbox();
    var despliegue = document.querySelector('#servicies');
    var desplegable = document.querySelector('.desplegable');

    $(desplegable).hide();

    despliegue.addEventListener('mouseover', ()=>{
        var desplegable = document.querySelector('.desplegable');

        $(desplegable).show();
    
    });

    despliegue.addEventListener('mouseout', ()=>{
        $(desplegable).hide();
    });
});