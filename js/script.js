
let slidesCollection = [];

$(function(){

    $('.carousel__photo').each(function(){
        slidesCollection.push($(this));
    });

    slidesCollection.forEach(function(slide, index){

        slide.css({'order': index});
        slide.data('order', index);
    });
});

$('.carousel__photo').click(function(){

    if ($(this).data('order')!=0){

        slidesCollection.forEach((slide)=>{
            slide.removeClass('big');
        });

        const clickedPictureOrder = $(this).data('order');

        slidesCollection.forEach(function(slide){
            
            switch (slide.data('order')){
                case 0:
                    slide.css({'order': clickedPictureOrder});
                    slide.data('order', clickedPictureOrder);
                    break;

                case clickedPictureOrder:
                    slide.css({'order': 0})
                    slide.data('order', 0);
                    slide.addClass('big');
                    break;
            }
        });
    }
});


$('.arrow').click(function(){

    slidesCollection.forEach((slide)=>{
        slide.removeClass('big');
    });

    switch ($(this).data('direction')){

        case 'left':
            $('.carousel__photo').each(function () {

                const nextOrder = Number($(this).css('order')) + 1;

                $(this).css({'order': nextOrder});
                $(this).data('order', nextOrder);
        
                if ($(this).data('order')==5) {
                    $(this).css({'order': 0});
                    $(this).data('order', 0);
                    $(this).addClass('big');
                } 
            });
            break;

        case 'right':
            $('.carousel__photo').each(function () { 

                const previousOrder = Number($(this).css('order')) - 1;

                $(this).css({'order': previousOrder}); 
                $(this).data('order', previousOrder);

                switch ($(this).data('order')){
                    case 0:
                        $(this).addClass('big');
                        break;
                    case -1:
                        $(this).css({'order': 4});
                        $(this).data('order', 4);
                        break;
                }
            });
            break;
    }
});

