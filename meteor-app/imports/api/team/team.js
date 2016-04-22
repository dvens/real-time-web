Teams = new Mongo.Collection('teams');

let Schemas = {};

Schemas.teams = new SimpleSchema({
    teamName: {
        type: String,
        max: 50
    },
    teamCaptain: {
        type: String,
        max: 20
    },
    isPlaying: {
        type: Boolean,
        defaultValue: false,
        optional: true
    },
    players : {
        type: [String],
        maxCount: 7,
        defaultValue: [],
        optional: true
    },
    gameInfo: {
        type: Object,
        defaultValue: {},
        optional: true
    }
});

Teams.attachSchema(Schemas.teams);
