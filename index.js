const rock = document.querySelector('.rockbtn')
const paper = document.querySelector('.paperbtn')
const scissor = document.querySelector('.scissorbtn')
const flash = document.querySelector('.flashMSG')
const scoreBoard = document.querySelector('.scoreBoard')
const alertBoard = document.querySelector('.alertBoard')
const userImage = document.querySelector('.userImage')
const computerImage = document.querySelector('.computerImage')
const beatSign = document.querySelector('.beatSign')

userScore = 0
computerScore = 0

scoreBoard.innerHTML = `${userScore} / ${computerScore}`

// animation 

const animations = ()=>{
    gsap.fromTo('.userImage', {opacity : 0, x : -700}, {opacity : 1, x : 0, duration : 1})
    gsap.fromTo('.computerImage', {opacity : 0, x : 700}, {opacity : 1, x : 0, duration : 1})
}


// game functions
const gameRes = (userDecision, computerDecision)=>{
    const user = userDecision.toLowerCase()
    const computer = computerDecision.toLowerCase()

    if(user == 'rock'){
        if(computer == 'paper'){
            flash.innerHTML = 'You Lose'
            computerScore += 1
            checkScore()
            scoreBoard.innerHTML = `${userScore} / ${computerScore}`
        }
        else if(computer == 'rock'){
            flash.innerHTML = 'Draw'
        }
        else{
            flash.innerHTML = 'You Win'
            userScore += 1
            checkScore()
            scoreBoard.innerHTML = `${userScore} / ${computerScore}`
        }
    }
    else if(user == 'paper'){
        if(computer == 'scissor'){
            flash.innerHTML = 'You Lose'
            computerScore += 1
            checkScore()
            scoreBoard.innerHTML = `${userScore} / ${computerScore}`
        }
        else if(computer == 'paper'){
            flash.innerHTML = 'Draw'
        }
        else{
            flash.innerHTML = 'You Win'
            userScore += 1
            checkScore()
            scoreBoard.innerHTML = `${userScore} / ${computerScore}`
        }
    }
    else{
        if(computer == 'rock'){
            flash.innerHTML = 'You Lose'
            computerScore += 1
            checkScore()
            scoreBoard.innerHTML = `${userScore} / ${computerScore}`
        }
        else if(computer == 'scissor'){
            flash.innerHTML = 'Draw'
        }
        else{
            flash.innerHTML = 'You Win'
            userScore += 1
            checkScore()
            scoreBoard.innerHTML = `${userScore} / ${computerScore}`
        }
    }
}

const checkScore = ()=>{
    if(userScore === 5 || computerScore === 5){
        rock.disabled = true
        paper.disabled = true
        scissor.disabled = true
        alertBoard.innerHTML = "Please restart the page to play again!"
    }
}

const computerImageSource = (computerDecision)=>{
    if(computerDecision === 'Rock'){
        computerImage.src = 'computerRock.svg'
    }
    else if(computerDecision === 'Paper'){
        computerImage.src = 'computerPaper.svg'
    }
    else{
        computerImage.src = 'computerScissor.svg'
    }
}

const computer = ()=>{
    computerOptions = ['Rock', 'Paper', 'Scissor']
    computerDecision = Math.floor(Math.random() * computerOptions.length)
    const returnValue = computerOptions[computerDecision]
    computerImageSource(returnValue)
    return returnValue
}

rock.addEventListener('click', ()=>{
    beatSign.remove()
    animations()
    const userDecision = 'rock'
    userImage.src = 'userRock.svg'
    const comp = computer()
    computerImageSource(comp)
    gameRes(userDecision, comp)
})
paper.addEventListener('click', ()=>{
    animations()
    const userDecision = 'paper'
    userImage.src = 'userPaper.svg'
    const comp = computer()
    computerImageSource(comp)
    gameRes(userDecision, comp)
})
scissor.addEventListener('click', ()=>{
    animations()
    const userDecision = 'scissor'
    userImage.src = 'userScissor.svg'
    const comp = computer()
    computerImageSource(comp)
    gameRes(userDecision, comp)
})