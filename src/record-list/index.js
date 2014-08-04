var $ = window.$,
	_ = require('lodash'),
	listTemplate = require('./index.vash'),
	itemTemplate = require('./item.vash');


function RecordList(){
	var self = this, items = [];

	this.$element = $(listTemplate({}));

	this.add = function(record){
		var $item = $(itemTemplate({
				type: record.type,
				description: record.description,
			})),
			item = {
				record: record,
				$item: $item,
			};

		$item.find('.js-delete')
			.on('click', function(){
				_.remove(items, item);
				$item.fadeOut('fast', function(){
					$item.remove();
				});
			});

		$item.find('.js-edit')
			.on('click', function(){
				window.alert('not yet...');
			});

		items.push(item);
		this.$element.find('tbody').append($item);
	};

	$(this.$element)
		.find('.js-new-record')
		.on('click', function(){
			var $this = $(this);

			self.emit('new-record', $this.text());

		});

}

module.exports = RecordList;
