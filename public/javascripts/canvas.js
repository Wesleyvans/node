/**
 * Created by Wesley on 11-4-2017.
 */
(function () {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    var entity = function(type,x,y,vx,vy,life) {
        var self = {
            x : canvas.width / 2,
            y : canvas.height / 2,
            vx : 5,
            vy : 5,
            life : 100,
            pressingDown : false,
            pressingUp : false,
            pressingLeft : false,
            pressingRight : false
        };

        if(self.type == 'player') {
            alert('we got a player');
        };

        self.update = function(){
            self.updatePosition();
            self.draw();
        };
        self.updatePosition = function(){
            console.log('position');
        };
        self.draw = function(){
            console.log('drawing');
        };
        return self;
    };

    var actor = function(type,x,y,vx,vy,life) {
        var self = new entity(type, 25, 25, 5, 5, 100);
        return self;
    };

    var Player = function() {
        var p = new actor('player', 25, 25, 5, 5, 100);
        p.pressingDown = false;
        p.pressingUp = false;
        p.pressingLeft = false;
        p.pressingRight = false;

        return p;
    };

    var update = function(){
        player.update();
    };

    var player = new Player();

    setInterval(function(){
        update();
    },30)


})();