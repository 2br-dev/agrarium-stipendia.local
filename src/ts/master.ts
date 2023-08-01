import Lazy from 'vanilla-lazyload';
import * as M from 'materialize-css';


let lazy = new Lazy({}, document.querySelectorAll('.lazy'));

$(() => {

	// Отображение первой секции
	$('#cards .container:first-of-type .section-content').css({
		display: 'grid'
	}).prev().addClass('active');

	// Переключение отображения секций
	$('body').on('click', '.section-trigger', (e:JQuery.ClickEvent) => {
		e.preventDefault();
		$(e.currentTarget).toggleClass('active');

		$(e.currentTarget).next().slideToggle('fast').css({
			display: 'grid'
		});
	});

	// Активация первой вкладки
	$('.tabs').each((index:number, el:HTMLElement) => {

		el.querySelector('li:first-of-type')?.classList.add('active');

		el.nextElementSibling?.querySelector('.tab-content').classList.add('active')
	});

	// Переключение вкладок
	$('body').on('click', '.tabs a', (e:JQuery.ClickEvent) => {
		e.preventDefault();
		let $parent = $(e.currentTarget).parents('.tabs');
		$parent.find('li').removeClass('active');
		$(e.currentTarget).parents('li').addClass('active');

		let hash = '#' + $(e.currentTarget).attr('href')?.split('#')[1];
		
		$parent.next().find('.tab-content').removeClass('active');
		$(hash).addClass('active');
	})

	
})

