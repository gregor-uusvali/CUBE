document.addEventListener('DOMContentLoaded', () => {
    const front = document.getElementById('front')
    const back = document.getElementById('back')
    const left = document.getElementById('left')
    const right = document.getElementById('right')
    const top = document.getElementById('top')
    const bottom = document.getElementById('bottom')
    const box = document.querySelector('.box')
    let counter = 0
    box.addEventListener('click', () => {
        counter++
        if (counter % 2 == 0) {
            front.style.transform = "translateZ(125px)"
            back.style.transform = "translateZ(-125px)"
            left.style.right = "125px"
            right.style.left = "125px"
            top.style.bottom = "125px"
            bottom.style.top = "125px"
        } else {
            front.style.transform = "translateZ(200px)"
            back.style.transform = "translateZ(-200px)"
            left.style.right = "200px"
            right.style.left = "200px"
            top.style.bottom = "200px"
            bottom.style.top = "200px"
        }
    })
})