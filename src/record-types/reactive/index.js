// this does not appear to work.
// model never changes.

var fs = require('fs');
var $ = window.$,
	reactive = require('reactive');

var strTemplate = fs.readFileSync(__dirname+'/index.html', 'utf8');

function ReactiveRecord(){
	var self = this,
		model = {
			test: 'this is a test field',
			label: 'hello',
			label2: 'goodbye',
			flagA: false,
			flagB: true,
		},
		view = reactive(strTemplate, model);

	self.type = 'Reactive Record';
	self.$element = $(view.el);
	self.getData = function(){ return model; };
}

module.exports = ReactiveRecord;
