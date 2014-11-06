'use strict';

// This does away with the original wrapper, putting tourcat div first

var tourCatWrapper = React.createFactory(require(['./assets/src/scripts/tourcat']));

var BoatWrapper =  React.createClass({displayName: 'BoatWrapper', 
	 render:function(){
	 	 return ( 
	 	 	 React.DOM.div({className:"all-boats"}, 
	 	      React.DOM.form({className: "boat-search"},
	      	 	"Select by: Month",
	 	      	 React.DOM.select({}, 
	 	      	  React.DOM.option({value:"November"}, "November"),
	 	      	  	React.DOM.option({value:"December"}, "December")
	 	           )
	 	      	 ),
	 	      React.DOM.section({id: "boat-list"}
	 	        ),
	 	      tourCatWrapper
	 	     )
	 	  )
	 	}
	 });

React.render(<BoatWrapper/>, document.getElementById('sml-schedule')
	);