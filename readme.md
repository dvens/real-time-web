# Real Time Web
* In this repo you will find my Meteor roadtrip of three weeks.
* [Link to MVP](http://37.139.2.180/)

# Week 1:

## Exercise 1 & 2: Starters Guide and Github
I didn't use the Discover Meteor Starter Edition. I used the new es2015(ES6) starters guide on the Meteor website instead. It has a different folder structure and you easily determine when to use certain code on client or server side because of the ES6 imports. Link to the starters guide: [Es6 Meteor Starters Guide](http://guide.meteor.com/structure.html).

## Exercise 3: Dataset and App

### App: League Ranked Pro
League Ranked Pro shows the ranked players/team of League of Legends real time game data of the opposite team. League Ranked Pro will help the ranked player/team to make decisions to win a game/lane based on the data.

### Dataset
* Link to dataset: [Current Game Api League of Legends](https://developer.riotgames.com/api/methods#!/976/3336)

> Pros

* The datasets are updated every 500ms.
* The dataset gives real time data of a match (Live data is disabled 30-04-16 because of ghosting).
* The dataset shows the spells being used in match.
* The dataset shows the different players in match with their champions and runes (runes being showed helps the enemy team to adept).
* The dataset returns masteries being used by each player.
* Data is reliable because the data is generated by Riot Games (makers of League of Legends).

> Cons

* The Api call needs a summonerId but this can only be retrieved when you make two extra calls. First you have to make a call to get the name of a summoner. Secondly you have to retrieve the summonersId and then make another call to get the ingame data of this summoner.

## Exercise 4: League Ranked Pro in depth

### Concept
My idea is to let pro players/teams get real time data of the opposite team. With this data they can make new strategies when the game progresses. The team/player can keep track of the monsters that are being spawned and get information about the opposite player such as runes, masteries and wich champions are being used.

### Users
League Ranked Pro is for the ranked League of Legends players that play in a team or alone. Most of the players play matches of 3v3 or 5v5. These players are always searching for the best improvements for their individual or team performance.

### MVP
* The team leader can add each other to a team.
* Ability to add trackers that keep the time when the dragon, baron and jungle camps are being spawned.
* The player is being notified when his team is going to play match.
* The ability to see the runes and masteries of the opposite team.

### Wishlist
* Real time map of the current match with the time/geotracking when a turret/player has been killed.
* Real time gold tracker of each player.
* The ability to see the champions and the spells they use.
* The ability to search for an user in the current match that's being played

### Reactiveness
* When the teamleader adds trackers to the team the other teammembers will be notified and will see these trackers.
* The player sees in game data thats being updated in the background (the api removed this because of ghosting).

### Structure Web App: Client views
* Home
* Your Team
* Current Game
* Your account

### Structure Web App: Server
* MongoDB with match data
* MongoDB with user data
* MongoDB with team data

# Week 2

## Structure Meteor Application
In week one I chose the meteor es6 structure. I use the following structure:
    
    client/
        head.html 
        main.js  // Import client startup js
        main.scss // Import all SASS stylesheets out of imports /ui
    imports/
        api/
            globals/
                helpers.js // Global helpers
        team/
            server/ 
                publications.js // publications for the team collection
            methods.js // methods for the team collection
            team.js // Schematic and collections
        users/
            server/
                publications.js // user publications
        startup/
            server/
                index.js // imports all server code
                accounts-config.js 
                api-config.js // imports all server code out of api server
            client/
                index.js
                routes.js
        ui/
            components/
                form/
                    form.html
                    form.js
            layouts/
                base/
                    footer.html
                    header.html
                index.html
                index.js
            pages/
                game/
                    game.html
                    game.js
                home/
                    home.html
                    home.js
                login/
                    login.html
                    login.js
                register/
                    register.html
                    register.js
                team/
                    team.html
                    team.js
                users/
                    users.html
                    users.js
            styles/
                core/
                elements/
                    buttons.scss
                    form.scss
                    lists.css
                    loader.scss
                layout/
                    footer.scss
                    header.scss
                    main.scss
                modules/
                    game.scss
                    home.scss
                    login.scss
                    page.scss
                    team.scss
                config.scss

## Packages that I used
I used the following packages:
* standard-minifier-css   # CSS minifier run for production mode
* standard-minifier-js    # JS minifier run for production mode
* es5-shim                # ECMAScript 5 compatibility for older browsers.
* ecmascript              # Enable ECMAScript2015+ syntax in app code
* fourseven:scss
* kadira:flow-router
* kadira:blaze-layout
* accounts-password
* mizzao:user-status
* arillo:flow-router-helpers
* msavin:mongol
* underscore
* aldeed:simple-schema
* aldeed:collection2
* check



