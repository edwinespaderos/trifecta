$(document).ready(function() {

    
    $(".next").on("click", function(e){
        
        var currentActiveSection = $(".image-shown");
        var nextActiveSection = currentActiveSection.next();
         
          if(nextActiveSection.length == 0){
            nextActiveSection = $(".slider div").first();
          };


        currentActiveSection.removeClass('image-shown').addClass('image-hidden').css("z-index", -10);
        nextActiveSection.addClass('image-shown').removeClass('image-hidden');

        $(".slider img").not([currentActiveSection, nextActiveSection]).css("z-index", 1);
        
        e.preventDefault();

    });

    $(".previous").on("click", function(e){

      var currentActiveSection = $(".image-shown");
      var prevActiveSection = currentActiveSection.prev();

        if (prevActiveSection.length == 0){
          prevActiveSection = $(".slider div").first();
        };

      currentActiveSection.removeClass('image-shown').addClass('image-hidden').css("z-index", -10);
      prevActiveSection.addClass('image-shown').removeClass('image-hidden');

      $(".slider img").not([currentActiveSection, prevActiveSection]).css("z-index", 1);

      e.preventDefault();

    });

    

    $(".sweet").on("click", function(){
      
        $(".one").addClass('image-hidden').css("z-index", -10);
        $(".two").addClass('image-hidden').css("z-index", -10);
        $(".three").removeClass('image-hidden').css("z-index", -10);
        $(".four").addClass('image-hidden').css("z-index", -10);
      
      });
  
    $(".pinapple").on("click", function(){
        
        $(".one").removeClass('image-hidden').css("z-index", -10);
        $(".two").addClass('image-hidden').css("z-index", -10);
        $(".three").addClass('image-hidden').css("z-index", -10);
        $(".four").addClass('image-hidden').css("z-index", -10);
      
      });

    $(".dark").on("click", function(){
          
        $(".one").addClass('image-hidden').css("z-index", -10);
        $(".two").removeClass('image-hidden').css("z-index", -10);
        $(".three").addClass('image-hidden').css("z-index", -10);
        $(".four").addClass('image-hidden').css("z-index", -10);
      
      });

    $(".grape").on("click", function(){
              
        $(".one").addClass('image-hidden').css("z-index", -10);
        $(".two").addClass('image-hidden').css("z-index", -10);
        $(".three").addClass('image-hidden').css("z-index", -10);
        $(".four").removeClass('image-hidden').css("z-index", -10);
      
      });



    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
            || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
               if (target.length) {
                 $('html,body').animate({
                     scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });


    $('#btn-confirm').click(function(){
        $("#age-verefier").addClass("active");
    });

        
});