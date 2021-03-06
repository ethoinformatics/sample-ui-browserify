var $ = window.$,
	_ = require('lodash'),
	recordTypes = require('./record-types'),
	RecordSelector = require('./record-selector'),
	RecordList = require('./record-list'),
	mainTemplate = require('main.vash');

$(function(){
	var $body = $('body'),
		$content = $(mainTemplate({})),
		$btnSave = $content.find('.js-btn-save'),
		recordSelector = new RecordSelector({
				recordTypes: _.pluck(recordTypes, 'name')
			}),
		recordList = new RecordList();
		
		$content.find('#select-container').append(recordSelector.$element);
		$content.find('#list-container').append(recordList.$element);

		$body.append($content);

		recordSelector.on('new-record', function(recordTypeName){
			var recordType = _.find(recordTypes, function(r){ return r.name === recordTypeName; });
			if (!recordType)
				window.alert('bad recordType: ' + recordTypeName);

			recordList.add(new recordType.ctor());
		});

		$btnSave.on('click', function(){
			var data = recordList.getData();
			$body.find('pre#results')
				.text(JSON.stringify(data, null, "\t"))
				.fadeIn();
		});
});




