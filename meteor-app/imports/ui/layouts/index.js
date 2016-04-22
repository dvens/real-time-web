// Base
import './base/footer.html'
import './base/header.html'

// Main
import './index.html'

Template.header.events({
    'click .header__navigation-item--logout': function(e){

        e.preventDefault();

        Meteor.users.update(Meteor.userId(), {$set: {'profile.isActive': 'offline'}});

        Meteor.logout();

        FlowRouter.go('login');

    }
});

Template.header.helpers({
    'activeIfTemplateIs': function (template) {
        var currentRoute = FlowRouter.getRouteName();
        return currentRoute && template === currentRoute ? 'active' : '';
    }
})
