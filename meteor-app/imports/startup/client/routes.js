import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import components
import '../../ui/components/form/form.js';

// Import base
import '../../ui/layouts/index.js';

// Import pages
import '../../ui/pages/home/home.js';
import '../../ui/pages/login/login.js';
import '../../ui/pages/register/register.js';
import '../../ui/pages/team/team.js';
import '../../ui/pages/users/users.js';
import '../../ui/pages/game/game.js';

// Home router
FlowRouter.route( '/', {
	name: 'home',
	triggersEnter: function(context, redirect) {

		// If the user is not logged in give no access to the dashboard
		if(!Meteor.userId()) {

			redirect('/login');

		}

	},
	action: function() {

		BlazeLayout.render( 'applicationLayout', {
		  header: 'header',
		  main: 'home',
		  footer: 'footer'
		});

	}
});

// Users router
FlowRouter.route( '/users', {
	name: 'users',
	triggersEnter: function(context, redirect) {

		// If the user is not logged in give no access to the dashboard
		if(!Meteor.userId()) {

			redirect('/login');

		}

	},
	action: function() {

		BlazeLayout.render( 'applicationLayout', {
		  header: 'header',
		  main: 'users',
		  footer: 'footer'
		});

	}
});

// Team router
FlowRouter.route( '/team', {
	name: 'team',
	triggersEnter: function(context, redirect) {

		// If the user is not logged in give no access to the dashboard
		if(!Meteor.userId()) {

			redirect('/login');

		}

	},
	action: function() {

		BlazeLayout.render( 'applicationLayout', {
		  header: 'header',
		  main: 'team',
		  footer: 'footer'
		});

	}
});

// Team router
FlowRouter.route( '/game', {
	name: 'game',
	triggersEnter: function(context, redirect) {

		// If the user is not logged in give no access to the dashboard
		if(!Meteor.userId()) {

			redirect('/login');

		}

	},
	action: function() {

		BlazeLayout.render( 'applicationLayout', {
		  header: 'header',
		  main: 'game',
		  footer: 'footer'
		});

	}
});

// Login router
FlowRouter.route( '/login', {
	name: 'login',
	action: function() {

		BlazeLayout.render( 'applicationLayout', {
		  main: 'login',
		});

	}
});

// Register router
FlowRouter.route( '/register', {
	name: 'register',
	action: function() {

		BlazeLayout.render( 'applicationLayout', {
		  main: 'register',
		});

	}
});
