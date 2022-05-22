let move = (element) => {
    element.style.position = 'fixed'

    let moveToCoordinates = (left, bottom) => {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
        element.style.zIndex = 1000 - bottom
    }

    let moveWithArrowKeys = (left, bottom, callback) => {
        //if callback != null
        let direction = null;
        let x = left;
        let y = bottom;
        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
        
        let moveCharacter = () => { 
            if(direction === 'north' && y < (window.innerHeight - 70)){
                y+=1
            }
            if(direction === 'south' && y > 100){
                y-=1
            }
            if(direction === 'east' && x < (window.innerWidth - 50)){
                x+=1
            }
            if(direction === 'west' && x > 0){
                x-=1
            }
            element.style.left = x + 'px'
            element.style.bottom = y + 'px'
            element.style.zIndex = 1000 - y
        }
        
        setInterval(moveCharacter, 1)
       
        document.addEventListener('keydown', (e) => {
            if(e.repeat) return;
            if(e.key === 'ArrowUp'){
                direction = 'north'
            }
            if(e.key === 'ArrowDown'){
                direction = 'south'
            }
            if(e.key === 'ArrowRight'){
                direction = 'east'
            }
            if(e.key === 'ArrowLeft'){
                direction = 'west'
            }
            callback(direction)
        })
        
        document.addEventListener('keyup', (e) => {
            direction = null
            callback(direction)
        })
    }

    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }
}