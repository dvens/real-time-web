import './team.js';

Meteor.methods({
    'Teams.insert'(data) {

        check(data.teamName, String);
        check(data.teamCaptain, String);

        if (! Meteor.userId()) {
          throw new Meteor.Error('not-authorized');
        }

        Teams.insert({
          teamName: data.teamName,
          teamCaptain: data.teamCaptain,
        });

        FlowRouter.go('home');

    },

    'Teams.delete'(data) {

        check(data.teamName, String);
        check(data.summonerName, String);

        if (! Meteor.userId()) {
          throw new Meteor.Error('not-authorized');
        }

        //get old array
        let oldData = Teams.find({teamName: data.teamName}).fetch()[0].players;
        let index = _.without(oldData, data.summonerName);

        Teams.update({teamName: data.teamName}, {$set: {players: index}});

        FlowRouter.go('users');

    },

    'Teams.insertPlayer'(team, player) {

        check(player, String);

        if (! Meteor.userId()) {
            throw new Meteor.Error('not-authorized');
        }

        Teams.update({teamName: team}, {$push: {players: player}});

    }
});
