jQuery(function ($) {
  'use strict';
  contactForm();
  populaCarousel();
});

// $.validator.addMethod(
//   'valueNotEquals',
//   function (value, element, arg) {
//     return arg !== value;
//   },
//   'Value must not equal arg.'
// );

var contactForm = function () {
  if ($('#contactForm').length > 0) {
    $('#contactForm').validate({
      debug: true,
      rules: {
        nome: {
          required: true,
          minlength: 4,
        },
        email: {
          required: true,
          email: true,
        },
        textArea: {
          required: true,
          minlength: 14,
        },
        select: { min: 1 },
        // checkbox: '',

        checkbox: {
          required: true,
          maxlength: 1,
        },
      },

      messages: {
        nome: 'Por favor, escreva seu nome',
        email: 'Por favor, adicione um email válido',
        textArea: 'Por favor, adicione um comentário',
        // select: { valueNotEquals: 'Please select an item!' },
        select: 'Por favor, selecione um item!',
        checkbox: {
          required: 'Aceite os termos',
        },
      },
      errorElement: 'span',
      errorLabelContainer: '.form-error',
      /* submit via ajax */
      submitHandler: function (form) {
        form.preventDefault();
        // $("form").submit(function(e){
        //   e.preventDefault();
        // });
        // trata o submit
      },
    });
  }
};

var populaCarousel = function () {
  $('.hero-slider').owlCarousel({
    items: 1,
    // autoplay: true,
    // autoplayTimeout: 5000,
    smartSpeed: 400,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    autoplayHoverPause: true,
    loop: true,
    nav: true,
    merge: true,
    dots: true,
    navText: [
      '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-left-short" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/></svg>',
      '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"/></svg>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      997: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
  });
};
