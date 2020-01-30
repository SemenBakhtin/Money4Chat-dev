$(document).ready(function () {


	// Анимированная иконка
	var menulink = $('.menu-link');
	var pull = $('#navigation-toggle');
	var menu = $('.navigation ul');
	
	menulink.click(function () {

	menulink.toggleClass('active');
	menu.slideToggle('active');

	pull.toggleClass('navigation__toggle-button--active');
	return false;

	});

	// Фильтр для блока карточек
	var mixer = mixitup('#mixitup');

});