/** @jsx React.DOM */
'use strict';

// This does away with the original wrapper, putting boatcat div first

var tourCatWrapper = require(['./assets/src/scripts/tourcat.js'])

var BoatWrapper =  React.createClass({displayName: 'BoatWrapper', 
	 render: function(){
	 	 return ( 
	 	 	 React.DOM.div({className:"all-boats"}, 
	 	      React.DOM.form({className: "boat-search"},
	      	 	"Select by: Month",
	 	      	 React.DOM.select({}, 
	 	      	  React.DOM.option({value:"November"}, "November"),
	 	      	  	React.DOM.option({value:"December"}, "December")
	 	           )
	 	      	 ),
	 	      React.DOM.section({id: "boat-list"})
	 	   )
	 	 )
	 	}
	 });

React.renderComponent(BoatWrapper(null), document.getElementById('sml-schedule')
	);