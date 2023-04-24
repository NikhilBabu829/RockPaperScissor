const rock = document.querySelector('.rockbtn')
const paper = document.querySelector('.paperbtn')
const scissor = document.querySelector('.scissorbtn')
const flash = document.querySelector('.flashMSG')
const scoreBoard = document.querySelector('.scoreBoard')
const alertBoard = document.querySelector('.alertBoard')
const userImage = document.querySelector('.userImage')
const computerImage = document.querySelector('.computerImage')
userScore = 0
computerScore = 0

scoreBoard.innerHTML = `${userScore} / ${computerScore}`

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

// const computerImageSource = (computerDecision)=>{
//     if(computerDecision === 'Rock'){
//         computerImage.src = 'computerRock.svg'
//     }
//     else if(computerDecision === 'Paper'){
//         computerImage.src = 'computerPaper.svg'
//     }
//     else{
//         computerImage.src = 'computerScissor.svg'
//     }
// }

rock.addEventListener('click', ()=>{
    computerOptions = ['Rock', 'Paper', 'Scissor']
    computerDecision = Math.floor(Math.random() * computerOptions.length)
    const userDecision = 'rock'
    userImage.src = 'userRock.svg'
    const computer = computerOptions[computerDecision]
    if(computer === 'Rock'){
        computerImage.src = 'computerRock.svg'
        }
    else if(computer === 'Paper'){
        computerImage.src = 'computerPaper.svg'
    }
    else{
        computerImage.src = 'computerScissor.svg'
    }
    gameRes(userDecision, computer)
})
paper.addEventListener('click', ()=>{
    computerOptions = ['Rock', 'Paper', 'Scissor']
    computerDecision = Math.floor(Math.random() * computerOptions.length)
    const userDecision = 'paper'
    userImage.src = 'userPaper.svg'
    const computer = computerOptions[computerDecision]
    if(computer === 'Rock'){
        computerImage.src = 'computerRock.svg'
        }
    else if(computer === 'Paper'){
        computerImage.src = 'computerPaper.svg'
    }
    else{
        computerImage.src = 'computerScissor.svg'
    }
    gameRes(userDecision, computer)
})
scissor.addEventListener('click', ()=>{
    computerOptions = ['Rock', 'Paper', 'Scissor']
    computerDecision = Math.floor(Math.random() * computerOptions.length)
    const userDecision = 'scissor'
    userImage.src = 'userScissor.svg'
    const computer = computerOptions[computerDecision]
    if(computer === 'Rock'){
        computerImage.src = 'computerRock.svg'
        }
    else if(computer === 'Paper'){
        computerImage.src = 'computerPaper.svg'
    }
    else{
        computerImage.src = 'computerScissor.svg'
    }
    gameRes(userDecision, computer)
})