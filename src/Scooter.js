class Scooter{
  static nextSerial = 1;
  constructor(station, user, charge, isBroken){
  this.station = station;
  this.user = user;
  this.serial = Scooter.nextSerial++;
  this.charge = charge;
  this.isBroken = isBroken;


}
}

module.exports = Scooter
