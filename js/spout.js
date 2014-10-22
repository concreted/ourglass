var Spout = function(game, settings, position) {
  this.c = game.c;
  for (var i in settings) {
    this[i] = settings[i];
  }
  this.size = {x:30, y:30};
  this.color = "#097";
  this.counter = 0;
  this.won = false;

  // emit a particle on a timer
  setInterval(function() {this.emit()}.bind(this), 1000);
};


Spout.prototype = {

  collision: function(other) {
  },

  draw: function(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.center.x - this.size.x / 2,
      this.center.y - this.size.y / 2,
      this.size.x,
      this.size.y
    );
  },

  emit: function() {
    console.log(this.c);
    var particles = this.c.entities.all(Particle);
    console.log(particles);
  }

};
