var $ = window.$,
	_ = require('lodash'),
	recordTypes = require('./record-types'),
	RecordSelector = require('./record-selector'),
	mainTemplate = require('main.vash');

$(function(){
	var $body = $('body'),
		$content = $(mainTemplate({})),
		recordSelector = new RecordSelector({
				recordTypes: _.pluck(recordTypes, 'name')
			});
		
		$content.find('#select-container').append(recordSelector.$element);
		$body.append($content);

		recordSelector.on('new-record', window.alert.bind(window));

});




