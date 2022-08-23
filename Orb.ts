import { Mesh, MeshBasicMaterial, SphereGeometry } from 'three';

export default class Orb extends Mesh {
  
  constructor(
    radius: number,
    x: number,
    y: number,
    z: number,
    color: string,
    private _mass: number
  ) {
    super(new SphereGeometry(radius), new MeshBasicMaterial({ color }));
    this.position.x = x;
    this.position.y = y;
    this.position.z = z;
  }

  get x() {
    return this.position.x;
  }

  set x(x: number) {
    this.position.x = x;
  }

  get y() {
    return this.position.y;
  }

  set y(y: number) {
    this.position.y = y;
  }

  get z() {
    return this.position.z;
  }

  set z(z: number) {
    this.position.z = z;
  }

  get mass() {
    return this._mass;
  }
}
