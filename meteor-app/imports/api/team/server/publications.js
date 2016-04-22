import '../team.js';

Meteor.publish('getTeams', function() {

    return Teams.find();

});
