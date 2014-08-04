var $ = window.$,
	template = require('./index.vash');

function RecordA(){

	function getTxtField(selector){ return self.$element.find(selector).val(); }
	function getBooleanField(selector){ return self.$element.find(selector).is(':checked'); }

	var self = this;
	self.type = 'Labeled flags';
	self.$element = $(template({ }));

	self.getData = function(){
		return {
			label: getTxtField('.js-label'),
			flagA: getBooleanField('.js-flag-a'),
			flagB: getBooleanField('.js-flag-b'),
		};
	};
}

module.exports = RecordA;
