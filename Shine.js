function loadShine()
{
    let size = noteBlockArray.length;
    var shineArray = new Array(size);
    var shinemap = new THREE.TextureLoader().load( "lib/three.js-master/examples/textures/sprites/circle.png" );
    var shinematerial = new THREE.SpriteMaterial( { map: shinemap, color: 0xffffff, fog: true } );
   
    for(let i = 0; i < size; ++i){
        shineArray[i] = new THREE.Sprite( shinematerial);
    }
    return shineArray;
}  

function addShine(noteBlock, index){
    var xPos = getPositionX(noteBlock.note);
    shineArray[index].position.x = xPos;
    shineArray[index].position.y = -blockpos+1.5;
    shineArray[index].position.z = 2;
    shineArray[index].scale.set(2,1,1);
    scene.add(shineArray[index]);
}

function removeShine(noteBlock, index){
    scene.remove(shineArray[index]);
}

