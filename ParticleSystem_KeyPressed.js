
class ParticleSystem_KeyPressed {

    constructor(xPos, note){

       this.particleSystem =  new THREE.GPUParticleSystem( {maxParticles: 10000} );
       this.note = note;
       this.particleSystem.position.y = -8;
       this.particleSystem.position.x = xPos;

       this.options = {
            position: new THREE.Vector3(),
        //	positionRandomness: .3,
            positionRandomness: 0.9,
            velocity: new THREE.Vector3(0,0.8,0),
        //	velocityRandomness: .5,
            velocityRandomness: 0.1,
            color: 0x0000ff,
            colorRandomness: 1.8,
        //	turbulence: .5,
            turbulence: 0.1,
            lifetime: 0.0000001,
            size: 7,
            sizeRandomness: 1.5
        };

        this.spawnerOptions = {
            spawnRate: 2500,
        //	horizontalSpeed: 1.5,
        //	verticalSpeed: 1.33,
            horizontalSpeed: 0.8,
            verticalSpeed: 0.9,
            timeScale: 1
        };

    }

    setLifeTime(lTime){
        this.options.lifetime = lTime;
    }

}