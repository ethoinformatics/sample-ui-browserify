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
				$modal.remove();
			});
		});

	this.show = function(){
		$('body').append($modal);

		$modal.fadeIn();
	};
}

module.exports = Modal;
