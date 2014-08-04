var $ = window.$,
	template = require('./index.vash');

function RecordA(){

	function getTxtField(selector){ return self.$element.find(selector).text(); }

	var self = this;
	self.type = 'Record A';
	self.description = 'tmp desc';
	self.$element = $(template({ }));
	self.getData = function(){
		return {
			name: getTxtField('.name'),
			age: getTxtField('.age'),
		};
	};
}

module.exports = RecordA;
