function Player(name) {
  this.name = name;
  this.lvl = 1;
  this.points = 0;
}

Player.prototype.gainXP = function (xp) {
  this.points += xp;

  if (this.points >= 10) {
    this.lvl++;
    this.points -= 10;
  }
};

Player.prototype.describe = function () {
  return "${this.name} is level ${this.lvl} with ${this.points} experience points";
};

const player1 = new Player("Halima");
const player2 = new Player("Momilo");

player1.gainXP(5);
player2.gainXP(7);
player1.gainXP(2);
player2.gainXP(1);
player1.gainXP(6);
player2.gainXP(8);
