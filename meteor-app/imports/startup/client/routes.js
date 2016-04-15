import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import base
import '../../ui/layouts/index.js';

// Import pages
import '../../ui/pages/home/home.js';

// Home router
FlowRouter.route( '/', {
	name: 'home',
	action: function() {
		
		BlazeLayout.render( 'applicationLayout', { 
		  header: 'header',
		  main: 'home',
		  footer: 'footer'
		}); 
		
	}
});