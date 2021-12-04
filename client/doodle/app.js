document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid')
    const doodler = document.createElement('div')
    let doodlerLeftSpace = 50
    let doodlerBottomSpace = 150


    function createDoodler() {
    grid.appendChild(doodler)
    doodler.classLast.add('doodler')
    doodler.style.left = doodlerLeftSpace + 'px'
    doodler.style.bottom = doodlerBottomSpace + 'px'
     j
    }
    function start() {
        if (!isGameOver) {
            createDoodler()
            createPlatforms()
        }
    }
    //attach to buttom
    start()
})