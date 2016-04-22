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

    'Teams.insertPlayer'(team, player) {

        check(player, String);

        if (! Meteor.userId()) {
            throw new Meteor.Error('not-authorized');
        }

        Teams.update({teamName: team}, {$push: {players: player}});

    }
});
