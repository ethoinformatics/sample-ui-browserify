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
			var v = $this.val();
			if (/select/i.test(v)) return;

			self.emit('new-record', v);
			$this.val('Select');
		});

}

util.inherits(RecordSelector, EventEmitter);
module.exports = RecordSelector;
