//Adding Background
let horizonLine = window.innerHeight / 1.2
let sky = window.innerHeight - horizonLine
let grass = horizonLine

function tile(url, left, bottom, width, height){
    for(let y = 0; y < height; y++){
        for(let x = 0; x < width; x++){
            newImage(url, left + x*100, bottom + y*100)
            
        }
    }
}

tile('assets/sky.png', 0, horizonLine, window.innerWidth/100, sky/100)
tile('assets/grass.png', 0, 0, window.innerWidth/100, grass/100) 
