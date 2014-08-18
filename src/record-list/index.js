
var $ = window.$,
	_ = require('lodash'),
	listTemplate = require('./index.vash'),
	itemTemplate = require('./item.vash');


function RecordList(){
	var self = this, 
		items = [];

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
				var $modal = self.$element.filter('.modal');
				$modal.find('.modal-title').text(item.record.type);
				$modal.find('.modal-body')
					.empty()
					.append(item.record.$element);

				$modal.modal({show: true});
			});

		items.push(item);
		this.$element.find('tbody').append($item);
	};


	this.getData = function(){
		return _.chain(items)
			.pluck('record')
			.map(function(record){ return record.getData();})
			.value();
	};

}

module.exports = RecordList;
