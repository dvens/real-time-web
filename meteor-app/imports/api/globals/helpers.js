Template.registerHelper('isActive', function(id) {

    let isActive = Meteor.users.findOne({_id: id}).profile.isActive;

    return (isActive === 'online') ? true : false;

});

Template.registerHelper('isInTeam', function(id) {

    let isInTeam = Meteor.users.findOne({_id: id}).profile.team;

    return (isInTeam === '') ? false : true;

});

Template.registerHelper('getTeamRole', function(id) {

    let isLeader = Meteor.users.findOne({_id: id}).profile.teamRole;

    return (isLeader === 'leader') ? true : false;

});
