$(document).on('click', '[data-toggle="toggleClass"]', (event) => {
	let element = $(event.target);
	if (element.data('toggle') !== 'toggleClass') element = element.closest('[data-toggle="toggleClass"]');
	let target = (element.is('a') ? element.attr('href') : '') || element.data('target');
	target && $(target).toggleClass(element.data('classes'));
	event.preventDefault();
});