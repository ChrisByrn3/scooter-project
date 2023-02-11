class Scooter{
  static nextSerial = 1;
  constructor(station, user, charge, isBroken){
  this.station = station;
  this.user = user;
  this.serial = Scooter.nextSerial++;
  this.charge = charge;
  this.isBroken = isBroken;
}

rent(){
  if (this.charge < 20){
    throw ("Scooter needs to charge")
  }
  if(this.isBroken === true){
    throw ("Scooter needs repair")
  }
  this.user.push(user)
  this.station = null
}

}

module.exports = Scooter
