var $ = window.$,
	template = require('./index.vash');

function RecordA(){

	function getTxtField(selector){ return self.$element.find(selector).text(); }

	var self = this;
	self.$element = $(template({ }));
	self.type = 'Record C';
	self.description = 'tmp desc';
	self.getData = function(){
		return {
			name: getTxtField('.name'),
			age: getTxtField('.age'),
		};
	};
}

module.exports = RecordA;
