import './team.html';
import '../../../api/team/methods.js';

Template.team.onCreated(function() {

    this.subscribe('getUsers');
    this.subscribe('getTeams');

});

Template.team.events({
    'submit form': function(e){

        e.preventDefault();

        let data = {
            teamName: $('[name=teamName]').val(),
            teamCaptain: Meteor.user().profile.summonerName
        };

        let userData = {
            team: $('[name=teamName]').val(),
            teamRole: 'leader'
        };

        Meteor.call('Teams.insert', data);
        Meteor.users.update({_id: Meteor.userId()}, {$set: {"profile.teamRole": userData.teamRole,"profile.team": userData.team}});

    }
});

Template.team.helpers({
    singleUser() {

        const currentUser = Meteor.user();

        return currentUser;

    },
    team() {
        let team = Meteor.user().profile.teamName;
        return Teams.find({teamName: team}).fetch();
    }
});
