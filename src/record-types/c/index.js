var $ = window.$,
	template = require('./index.vash');

function RecordA(){

	function getCoordinateField(selector){ return +self.$element.find(selector).val(); }

	var self = this;
	self.$element = $(template({ }));
	self.type = 'Location';

	self.getData = function(){
		return {
			lat: getCoordinateField('.js-lat'),
			lng: getCoordinateField('.js-lng'),
		};
	};
}

module.exports = RecordA;
