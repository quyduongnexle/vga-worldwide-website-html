$('.carousel').carousel({
      interval: 5000 //changes the speed
  })
   $(window).scroll(function() {
  
  if ($(".navbar").offset().top > 50) {
    $(".navbar-fixed-top").addClass("top-nav-collapse");
  } else {
    $(".navbar-fixed-top").removeClass("top-nav-collapse");
  }
});

//Quantity
   $(document).ready( () => {
  $('.minus-button').click( (e) => {

    const currentInput = $(e.currentTarget).parent().prev()[0];

    let minusInputValue = $(currentInput).html();

    minusInputValue --;
    $(currentInput).html(minusInputValue);
  });

  $('.plus-button').click( (e) => {

    const currentInput = $(e.currentTarget).parent().prev()[0];

    let plusInputValue = $(currentInput).html();

    plusInputValue ++;
    $(currentInput).html(plusInputValue);
  });
});