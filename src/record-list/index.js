
var $ = window.$,
	_ = require('lodash'),
	Modal = require('modal'),
	listTemplate = require('./index.vash'),
	itemTemplate = require('./item.vash');


function RecordList(){
	var self = this, 
		items = [];

	var modal;
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
			.on('click', function(ev){
				ev.stopPropagation();

				_.remove(items, item);
				$item.fadeOut('fast', function(){
					$item.remove();
				});
			});

		$item.on('click', function(){
			modal = new Modal(item.record.type, item.record.$element);
			modal.show();
			});

		items.push(item);
		this.$element.filter('.list').append($item);
	};


	this.getData = function(){
		return _.chain(items)
			.pluck('record')
			.map(function(record){ return record.getData();})
			.value();
	};

}

module.exports = RecordList;
