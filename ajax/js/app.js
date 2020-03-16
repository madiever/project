$(function(){

	var $container = $('main-menu');

	function handleMenu() {

		function toggleInfoPanel(anchor) {
			var infoPanelEl = $(this).siblings('.menu-item-info');
			infoPanelEl.toggleClass('is-visible');
		}

		$('.menu-item > a')
			.mouseover(toggleInfoPanel)
			.mouseout(toggleInfoPanel);
	}

	function buildMenuItem(data) {
		var $el,
			$infoPanel;

		$el = $('<li class="menu-item">' + 
				'<a href="#">' + data.title + '</a>' + 
				'<div  class="menu-item-info"></div>' +
				'</li>');

		return $el;

	}

	$.get('api/menu.json', function(data){
		//data has been loaded.
		//console.log(data);

		//clean the content  of the URL element first
		$container.empty();

		data.forEach(function(menuItem) {
			$container.append(buildMenuItem(menuItem));
		});
	}, 'json');

});