var $ = window.$,
	template = require('./index.vash');

function RecordA(){

	function getTxtField(selector){ return self.$element.find(selector).val(); }

	var self = this;
	self.$element = $(template({ }));
	self.type = 'Name and age';

	self.getData = function(){
		return {
			name: getTxtField('.js-name'),
			age: getTxtField('.js-age'),
		};
	};
}

module.exports = RecordA;
