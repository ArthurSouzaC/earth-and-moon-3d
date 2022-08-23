import { Mesh, SphereGeometry } from 'three';

export default class Orb extends Mesh { 
  constructor(
    private _radius: number,
    x: number,
    y: number,
    z: number,
    material: THREE.Material
  ) {
    super(
      new SphereGeometry(_radius), 
      material
    );
    this.position.x = x;
    this.position.y = y;
    this.position.z = z;
  }

  get radius() {
    return this._radius;
  }
}