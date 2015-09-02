$(document).ready(function(){
    $('.spanB').click(function(){
        
        if($(this).hasClass('buttonOverlay')){
            console.log('changing to checked');
            $('.large', this).removeClass('notChecked');
            $('.large', this).addClass('checked');
            $(this).removeClass('buttonOverlay');
            $(this).addClass('buttonOverlayChecked');
        } else if($(this).hasClass('buttonOverlayChecked')){
            console.log('changing to Notchecked');
            $('.large', this).removeClass('checked');
            $('.large', this).addClass('notChecked');
            $(this).removeClass('buttonOverlayChecked');
            $(this).addClass('buttonOverlay');
        }
        
    });
    
});