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
		.find('select')
		.on('change', function(){
			var $this = $(this);

			self.emit('new-record', $this.val());
		});

}

util.inherits(RecordSelector, EventEmitter);
module.exports = RecordSelector;
