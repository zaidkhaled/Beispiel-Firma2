/*global $ */


$(function () {
    
    'use strict';

//   strat resizing
    
    $(".header").height($(window).height());
  
//scroll To features
    

    $(".header .arow i").click(function () {
        
        $("html, body").animate({
            
            scrollTop: $(".features").offset().top
            
        }, 1000);
    });


//end Scroll To features
    
    
//     start ourwork
    
    
    $(".show-more").click(function () {
        
        $(".ourwork .hidden").fadeIn(2000);
        
        if (!$(".item").hasClass(".hidden")) {
            
            $(this).css("visibility", "hidden");
        }
    });
    
    
    
//    end OurWork
    
    
    
//    start testmonial
    
    var leftarrow = $(".testim .fa-chevron-left"),
        
        rightarrow = $(".testim .fa-chevron-right");
    
    function checkcleints() {
        
        if ($(".cleint:first").hasClass('activ')) {
            
            leftarrow.fadeOut();
            
        } else {
            
            leftarrow.fadeIn();
        }
        
        if ($(".cleint:last").hasClass('activ')) {
            
            rightarrow.fadeOut();
            
        } else {
             
            rightarrow.fadeIn();
        }
    }
    checkcleints();
    
    $(".testim i").click(function () {
        
        if ($(this).hasClass('fa-chevron-right')) {
            
            $(".testim .activ").fadeOut(200, function () {
                
                $(this).removeClass('activ').next('.cleint').addClass('activ').fadeIn(400);
                
                checkcleints();
                
            });
            
            
        } else {
            $(".testim .activ").fadeOut(200, function () {
                 
                $(this).removeClass('activ').prev('.cleint').addClass('activ').fadeIn(400);
                
                checkcleints();
            });
          
        }
    });
        
    
//    end testmonial
    
//    start OurTeam
    
    
    function countup(elm) {
         
        var end = parseInt(elm.attr("power"), 10),
            
            t = 1600,
            
            tim = t / end,
            
            setup = setInterval(function () {
                
                var wid = end + "%",
                    
                    val = elm.data("value"),
                    
                    elmo = parseInt(val, 10),
                  
                    numer = $("#prosent" + val),
                    
                    counter = parseInt(numer.html(), 10);
                
                
                $(".o" + elmo).animate({
                    
                    width : wid
                  
                }, t);

                if (counter !== end) {
                    
                    numer.html(counter + 1);
                    
                } else {
                    
                    clearInterval(setup);
                }
            
            
            
            }, tim);
     
        
    }
    

    
    $(".ourteam .the-team .person").mouseenter(function () {
        
        $("#" + $(this).data("value")).css({
            
            backgroundColor: "#f7600e",
            
            transform: "scale(1.8)"
            
        });
        
        
        countup($(this));
        
    });
    
    $(".ourteam .the-team .person").mouseleave(function () {
        
        $("#" + $(this).data("value")).css({
            
            backgroundColor: "#ddd",
            
            transform: "scale(1)"
        });
      
        
    });
 
    
});

 









