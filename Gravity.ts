import Orb from "./Orb";

export default class Gravity {
  mostMassive: Orb;
  leastMassive: Orb;
  constructor(firstOrb: Orb, secondOrb: Orb) {
    const [mostMassive, leastMassive] = [firstOrb, secondOrb].sort((a, b) => a.mass - b.mass);
    this.mostMassive = mostMassive;
    this.leastMassive = leastMassive;
  }

  force() {
    const gravitationalConstant = 6.67 * 10^-11;
    const distanceBetween = Math.sqrt(
      (this.leastMassive.x - this.mostMassive.x)^2 + 
      (this.leastMassive.y - this.mostMassive.y)^2 + 
      (this.leastMassive.z - this.mostMassive.z)^2
    );
    return (gravitationalConstant * this.mostMassive.mass * this.leastMassive.mass) / distanceBetween^2;
  }
}
