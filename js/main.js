//modal
const modalBtn = $('.present__btn');
const modalOrder = $('.modal-order');
const modalOrderWrapper = $('.modal-order__wrapper');
const modalClose = $('.modal-order__close');

modalBtn.on('click', function() {
  modalOrder.show(500);
});

modalOrder.click(function(event) {
  if (event.target === this) {
    modalOrder.hide(500);
  }
});

modalClose.on('click', function() {
  modalOrder.hide(500);
});

const modalOrderInput = $('.modal-order__input');
const modalOrderTitle = $('.modal-order__title');

modalOrderInput.focus(function() {
  modalOrderTitle.text(`Введите ${$(this).attr('placeholder').toLowerCase()}`);
});

modalOrderInput.blur(function() {
  modalOrderTitle.text('Заполните форму');
});

// mobile menu
const burger = $('.header__burger');
const navigation = $('.navigation');
const navigationClose = $('.navigation__close');

$(document).on('click', function(e){
  if (e.target === burger.get(0)) {
    navigation.addClass('navigation__open');
    navigationClose.css('opacity', 1);
  } else if(!navigation.is(e.target) || (e.target).closest('.navigation__close')){
    navigationClose.css('opacity', 0);
    navigation.removeClass('navigation__open');
  }
});