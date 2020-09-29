document.addEventListener('DOMContentLoaded', () => {
    const bird = document.querySelector('.bird')
    const ground = document.querySelector('.ground')
    const gameDisplay = document.querySelector('.game-container')

    let birdLeft = 220
    let birdBottom = 200
    let gravity = 2
    let isGameOver = false

    function startGame() {

        birdBottom -= gravity

        bird.style.bottom = birdBottom + 'px'
        bird.style.left = birdLeft + 'px'
    }

    function jump() {
        if (birdBottom < 520) {
            birdBottom += 50
        }
        bird.style.bottom = birdBottom + 'px'
    }
    document.addEventListener('click', jump)
    let timerId = setInterval(startGame, 20)

    function generateObstacle() {
        let obstacleLeft = 500
        let randomHeight = Math.random() * 200
        let obstacleBottom = randomHeight
        const obstacle = document.createElement('div')
        obstacle.classList.add('obstacle')
        gameDisplay.appendChild(obstacle)
        obstacle.style.left = obstacleLeft + 'px'
        obstacle.style.bottom = obstacleBottom + 'px'

        function moveObstacle() {
            let speed = 2
            obstacleLeft -= speed
            obstacle.style.left = obstacleLeft + 'px';

            if (obstacleLeft === -60) {
                clearInterval(speedId)
                gameDisplay.removeChild(obstacle)
            }
            if (birdBottom === 0) {
                gameOver()
                
            }
        }
        let speedId = setInterval(moveObstacle, 20)
        setTimeout(generateObstacle, 3000)
    }
    generateObstacle()

    function gameOver() {
        clearInterval(timerId)
        isGameOver = true
        document.removeEventListener('click', jump)
    }
})