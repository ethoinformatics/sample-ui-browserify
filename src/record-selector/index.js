var $ = window.$,
	util = require('util'),
	EventEmitter = require('events').EventEmitter,
	template = require('./index.vash');


function RecordSelector(params){
	EventEmitter.call(this);
	var self = this;

	this.$element = $(template({
			recordTypes: params.recordTypes
		}));

	$(this.$element)
		.find('.js-new-record')
		.on('click', function(){
			var $this = $(this);

			self.emit('new-record', $this.text());

		});

}

util.inherits(RecordSelector, EventEmitter);
module.exports = RecordSelector;
