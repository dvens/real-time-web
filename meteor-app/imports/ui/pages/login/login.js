import './login.html';

// Used for inspiration http://meteortips.com/second-meteor-tutorial/user-accounts/
Template.login.events({
    'submit form': function(e){

        e.preventDefault();

        var email = $('[name=email]').val();
        var password = $('[name=password]').val();

        Meteor.loginWithPassword(email, password, function(error){

            if(error) console.log(error);

        });

        Meteor.users.update(Meteor.userId(), {$set: {'profile.isActive': 'online'}});

        FlowRouter.go('home');

    }
});
