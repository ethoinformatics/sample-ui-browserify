var $ = window.$,
	template = require('./index.vash');


function Modal(title, $content){
	var $modal = $(template({title: title}));
	$modal.find('h1.title').text(title);
	$modal.find('.modal-body')
		.empty()
		.append($content);

	$modal.find('.js-close')
		.on('click', function(ev){
			ev.preventDefault();
			$modal.fadeOut(function(){
				$modal.slideUp();
			});
		});

	this.show = function(){
		$modal.slideDown();
		$('body').append($modal);
	};
}

module.exports = Modal;
