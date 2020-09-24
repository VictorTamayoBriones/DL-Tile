$(document).ready(function(){
    //$('.materialboxed').materialbox();
    var despliegue = document.querySelector('#servicies');
    var desplegable = document.querySelector('.desplegable');
    var enlace = document.querySelectorAll('#dow-item');
    $(desplegable).hide();

    despliegue.addEventListener('mouseover', ()=>{
        var desplegable = document.querySelector('.desplegable');

        $(desplegable).show();
    
    });
    /*
    enlace.addEventListener('mouseover', ()=>{
        $(desplegable).show(); 
    })

    enlace.addEventListener('mouseout', ()=>{
        $(desplegable).hide(); 
    })
*/
    despliegue.addEventListener('mouseout', ()=>{    
        $(desplegable).hide();     
    });


});