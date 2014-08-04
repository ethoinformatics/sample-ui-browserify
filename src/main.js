var $ = window.$,
	RecordSelector = require('./record-selector'),
	mainTemplate = require('main.vash');

$(function(){
	var $body = $('body'),
		$content = $(mainTemplate({})),
		recordSelector = new RecordSelector({
				recordTypes: ['Record A', 'Record B', 'Record C']
			});
		
		$content.find('#select-container').append(recordSelector.$element);
		$body.append($content);

		recordSelector.on('new-record', window.alert.bind(window));

});




