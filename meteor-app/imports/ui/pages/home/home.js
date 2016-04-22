import './home.html';
import '../../../api/team/methods.js';

Template.home.onCreated(function() {

  this.subscribe('getUsers');
  this.subscribe('getTeams');

});

Template.home.events({
    'submit form': function(e){

        e.preventDefault();

        let team = Meteor.user().profile.team;
        let player = $('[name=summonername]').val();
        let id = $('[name=userid]').val();

        let userData = {
            team: team,
            teamRole: 'member'
        };

        Meteor.call('Teams.insertPlayer', team, player);
        Meteor.users.update({_id: id}, {$set: {"profile.teamRole": userData.teamRole, "profile.team": userData.team}});

    }
});

Template.home.helpers({
    singleUser() {

        const currentUser = Meteor.user();

        return currentUser;

    },
    users() {

        const users = Meteor.users.find().fetch();

        return users;

    },

    teams() {

        const teams = Teams.find().fetch();

        return teams;

    },

    teamActive(team) {

        const teamActive = Teams.find({_id: team}).fetch()[0];

        return (teamActive.isPlaying) ? 'They are playing' : 'Not playing';


    }
});
