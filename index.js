const title = document.querySelector('.title')
const block = document.querySelector('.block')
const rules = document.querySelector('.rules')
const btn = document.querySelector('.btn')
const gameOver = document.querySelector('.gameover')
let score = document.querySelector('.score')
let record = document.querySelector('.record')
const theme = document.querySelector('.theme')
const exit = document.querySelector('.exit')
window.onload = showItems()

function showItems() {
  if (title.classList != 'none') {
    setTimeout(() => {
      title.classList.add('none')
      rules.classList.remove('none')
    }, 1000)
  }
}
function game() {
  let random = Math.random() * (7000 - 2000)
  let greenRandom = Math.random() * (1000 - 200 + 1)
  setTimeout(() => {
    block.classList.add('block-green')
    block.classList.remove('block')
    setTimeout(() => {
      block.classList.remove('block-green')
      block.classList.add('block')
      game()
    }, greenRandom)
  }, random)
}
btn.addEventListener('click', () => {
  btn.classList.add('none')
  rules.classList.add('none')
  block.classList.remove('none')
  score.classList.remove('none')
  exit.classList.remove('none')
  setTimeout(() => {
    game()
  }, 2000)
})

block.addEventListener('click', () => {
  if (block.classList != 'block-green') {
    block.classList.add('none')
    gameOver.classList.remove('none')
    score.classList.add('none')
    exit.classList.add('none')
    setTimeout(() => {
      gameOver.classList.add('none')
      rules.classList.remove('none')
      btn.classList.remove('none')
    }, 4000)
  }
})

block.addEventListener('click', () => {
  if (block.classList == 'block-green') {
    game()
    score.innerHTML = parseInt(score.innerHTML) + 1
    record.innerHTML = parseInt(score.innerHTML)
  }
})

theme.addEventListener('click', () => {
  if (document.body.classList != 'whitebody') {
    document.body.classList.add('whitebody')
  } else {
    document.body.classList.remove('whitebody')
  }
})

exit.addEventListener('click', () => {
  block.classList.add('none')
  score.classList.add('none')
  btn.classList.remove('none')
  rules.classList.remove('none')
  exit.classList.add('none')
})
