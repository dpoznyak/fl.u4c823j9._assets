$(document).ready(function(){

  //datepicker

    $( "#datepicker" ).datepicker();

   // select2
    $(".js-example-basic-single").select2();

    $('.js-example-basic').select2();
   
	if($('.slider-class').length > 0){

   var $status = $('.pagingInfo');
       var $slickElement = $('.slider-class');


    $slickElement.each(function() {

     var slider = $(this);


       slider.on('init', sliderScrollbarHandler);

    slider.slick({
      dots: false,
      infinite: true,
      speed: 300,
      item:4,
      slidesToShow: 2.1,
      slidesToScroll: 1,
      pager:false,
      scrollOverflow:true,
      
    })

    slider.on('afterChange', sliderScrollbarHandler);

    function sliderScrollbarHandler(event, slick, currentSlide, nextSlide){
     var scrollH = $('.horizontal_scroll');
        var scroller = $('.scroller');

        var visibleCount = slider.find('.slick-active').length;

        var totalCount = slider.find('.slick-slide:not(.slick-cloned)').length

        //var totalCount = slider.find('.slick-slide').length;
            //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
            var curSlide = (currentSlide ? currentSlide : 0) + 1;
            $status.text(curSlide + '/' + slick.slideCount);

        var widthScroller = ((visibleCount / totalCount) * 100);

        slider.next().find('.scroller').css('width', widthScroller + '%');

        var leftTransform = ((curSlide - 1) / totalCount) * 100;//* ((curSlide - 1) / visibleCount);

        slider.next().find('.scroller').css('left', leftTransform + '%');

        console.log("left " + leftTransform);
     console.log("curSlide " + curSlide);
        console.log("visible " + visibleCount);
        console.log("total " + totalCount);
        console.log("widthScroller " + widthScroller);
   }
    });

    

  
   }



});

