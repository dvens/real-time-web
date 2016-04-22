import './team.html';
import '../../../api/team/methods.js';

Template.team.onCreated(function() {

    this.subscribe('getUsers');
    this.subscribe('getTeams');

});

Template.team.events({
    'submit form.createTeam': function(e){

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

    },

    'submit form.remove': function(e){

        e.preventDefault();

        let data = {
            teamName: Meteor.user().profile.team,
            summonerName: e.target.childNodes[1].value,
        };

        let id = Meteor.users.find({"profile.summonerName": data.summonerName}).fetch()[0]['_id'];

        Meteor.users.update({_id: id}, {$set: {"profile.teamRole": '',"profile.team": ''}});

        Meteor.call('Teams.delete', data);

    }
});

Template.team.helpers({
    singleUser() {

        const currentUser = Meteor.user();

        return currentUser;

    },
    team() {
        let team = Meteor.user().profile.team;
        let teamMembers = Teams.find({teamName: team}).fetch()[0].players;

        return teamMembers;
    }
});
