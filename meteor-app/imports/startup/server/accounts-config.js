import { Accounts } from 'meteor/accounts-base';

Accounts.onCreateUser(function(options, user) {

    user.profile = options.profile || {};

    user.profile.summonerName = options.summonerName;
    user.profile.team = options.team || '';
    user.profile.teamRole = options.teamRole || '';
    user.profile.isActive = 'Offline';

    return user;

})
