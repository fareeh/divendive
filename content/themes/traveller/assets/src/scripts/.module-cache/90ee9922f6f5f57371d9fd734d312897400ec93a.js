
var FormData = require(['./node_modules/react-form-data/index']);
var BoatWrapper = require(['./assets/src/scripts/BoatWrapper']);

var BoatForm = react.createClass({
	mixins: [FormData],
	handleSubmit: function(){
		var url = '/schedule-book';
		myRequestLib.post(url, this.formData);
	},
	render: function() {
		return 
			react.DOM.form({onChange:this.updateFormData, onSubmit:this.handleSubmit})
			
	}
});

function render(){
	return (
		BoatWrapper
	)
}

