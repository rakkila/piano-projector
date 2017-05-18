function loadShine()
{
    let size = noteBlockArray.length;
    var shineArray = new Array(size);
    var shinemap = new THREE.TextureLoader().load( "lib/three.js-master/examples/textures/sprites/circle.png" );
    var shinematerial = new THREE.SpriteMaterial( { map: shinemap, color: 0xffffff, fog: true } );
   
    for(let i = 0; i < size; ++i){
        shineArray[i] = new THREE.Sprite( shinematerial);
        bigShine[i] = new Boolean(false);
        sx[i] = 1;
        sy[i] = 0.5;
        sz[i] = 0.5;
        removing[i] = false;
    }
    return shineArray;
}  

function addShine(noteBlock, index){
    var xPos = getPositionX(noteBlock.note);
    shineArray[index].position.x = xPos;
    shineArray[index].position.y = -blockpos+1.5;
    shineArray[index].position.z = 2;
    shineArray[index].scale.set(sx[index],sy[index],sz[index]);
    scene.add(shineArray[index]);
}

function removeShine(noteBlock, index){
    removing[index] = true;
}

function scaleShine(index)
{
    if(bigShine[index] == false)
    {
        sx[index] = sx[index] + 0.01;
        sy[index] = sy[index] + 0.01;
        sz[index] = sz[index] + 0.01;
        shineArray[index].scale.set(sx[index],sy[index],sz[index]);

        if(sx[index] == 2){
            bigShine[index] = true;
        }
    }
    if(removing[index] == true)
    {
        sx[index] = sx[index] - 0.1;
        sy[index] = sy[index] - 0.1;
        sz[index] = sz[index] - 0.1;
        shineArray[index].scale.set(sx[index],sy[index],sz[index]);
        if(sx[index] < 1)
        {
            scene.remove(shineArray[index]);
            removing[index] = false;
        }
    }
}