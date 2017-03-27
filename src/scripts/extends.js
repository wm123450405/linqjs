/**
 * Created by wm123 on 2017/3/24.
 */
$(document).on('click', '[data-toggle="toggle"]', (event) => {
	let element = $(event.target);
	if (element.data('toggle') !== 'toggle') element = element.closest('[data-toggle="toggle"]');
	let target = (element.is('a') ? element.attr('href') : '') || element.data('target');
	target && $(target).toggleClass(element.data('classes'));
	event.preventDefault();
});