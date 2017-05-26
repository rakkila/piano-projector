/**
 * Creating an array with "sprites", the same size as noteBlockArray
 * Two booleans (bigShine and removing) and three scale variables for every sprite
 */
function loadShine()
{
    let size = noteBlockArray.length;
    var shineArray = new Array(size);
    var shinemap = new THREE.TextureLoader().load( "lib/three.js-master/examples/textures/sprites/circle.png" );
    var shinematerial = new THREE.SpriteMaterial( { map: shinemap, color: 0xffffff, fog: true } );
   
    for(let i = 0; i < size; ++i){
        shineArray[i] = new THREE.Sprite( shinematerial);
        bigShine[i] = new Boolean(false);
        sx[i] = 1.4;
        sy[i] = 0.5;
        sz[i] = 0.5;
        removing[i] = false;
    }
    return shineArray;
}  

//Adding shine to the scene at a note blocks position
function addShine(noteBlock, index){
    var xPos = getPositionX(noteBlock.note);
    shineArray[index].position.x = xPos; //At the noteBlocks x position
    shineArray[index].position.y = -blockpos - 0.1; //By the keys vertically
    shineArray[index].position.z = 0.201; //In front of the noteBlocks from users perspective
    shineArray[index].scale.set(sx[index],sy[index],sz[index]);
    scene.add(shineArray[index]);
}

//Scale the shine bigger if it has been added or smaller if it should be removed  
function removeShine(index){
    removing[index] = true;
}

function scaleShine(index)
{
    
    if(sx[index] == 1.1){ 
        //Shine is its max size
        bigShine[index] = true;
    }

    //Shine is not its max size, enlarge
    if(bigShine[index] == false) 
    {
        sx[index] = sx[index] ;
        sy[index] = sy[index] ;
        sz[index] = sz[index] ;
        shineArray[index].scale.set(sx[index],sy[index],sz[index]);

    }
    //Remove shine by reducing its size
    if(removing[index] == true) 
    {
        /*
        sx[index] = sx[index] - 0.1;
        sy[index] = sy[index] - 0.1;
        sz[index] = sz[index] - 0.1;
        shineArray[index].scale.set(sx[index],sy[index],sz[index]);
        */
        //Remove shine from the scene
        //if(sx[index] < 1) 
        //{
            scene.remove(shineArray[index]);
            removing[index] = false;
       // }
    }
}
