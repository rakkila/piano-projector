
class ParticleSystem_KeyPressed {

    constructor(xPos, note){

              this.particleSystem =  new THREE.GPUParticleSystem( {maxParticles: 10000} );
       this.note = note;
       this.particleSystem.position.y = -6.6;
       this.particleSystem.position.x = xPos;

       this.options = {
            position: new THREE.Vector3(),
            positionRandomness: 1,
            velocity: new THREE.Vector3(0,0.7,-0.6),
            velocityRandomness: 0.08,
            color: 0x0000ff,
            colorRandomness: 1.5,
        //	turbulence: .5,
            turbulence: 0.07,
            lifetime: 3,
            size: 7,
            sizeRandomness: 1.2
        };

        this.spawnerOptions = {
            spawnRate: 3000,
            horizontalSpeed: 0,
            verticalSpeed: -0.2   ,
            timeScale: 1
        };

    }

    setLifeTime(lTime){
        this.options.lifetime = lTime;
    }

}