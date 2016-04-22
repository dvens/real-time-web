import './register.html';

// Used for inspiration http://meteortips.com/second-meteor-tutorial/user-accounts/
Template.register.events({
    'submit form': function(e){

        e.preventDefault();

        let email = $('[name=email]').val();
        let password = $('[name=password]').val();
        let summonerName = $('[name=summonername]').val();

        Accounts.createUser({
            email: email,
            password: password,
            summonerName: summonerName
        }, function(error){

            if(error) console.log(error);

            FlowRouter.go('login');

        });

    }
});
