$(function() {

  var $root = $('html, body');
  var vh = window.innerHeight;
  
  $('.readmore_button').click(function() {
      $root.animate({
          scrollTop: vh
      }, 500);
  });

  $('.readmore_arrows').click(function() {
      $root.animate({
          scrollTop: vh
      }, 500);
  });

  $('.form_validation_good').css({
    opacity: '0'
  });
  
   $('.submit_button').click( function(e) {

    function validateEmail(address) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(address);
    }


      var email = $('.email_input').val();
      e.preventDefault();  
      console.log(validateEmail(email));


      if(validateEmail(email)) {
        
        $.ajax({
            type: "POST",
            url: "./form/form.php",
            data: {
             email: email
            },
            success:function(response){
                $('.form_validation_good').text('Twój e-mail został wysłany').animate({
                  opacity: 1,
                }, 300, function() {
                  // Animation complete.
                });;
            }
        });

        $('.submit_button').attr('disabled', true).animate({
          opacity: 0.5,
        }, 300, function() {

        });

        return false;

      } else {
        $('.form_validation_good').text('Wpisz poprawny adres e-mail').animate({
                  opacity: 1,
                }, 300, function() {
                  // Animation complete.
                });;;        

      }

    });




      

});

