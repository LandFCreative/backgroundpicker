document.getElementById('purple').onclick = partyPurple
document.getElementById('green').onclick = partyGreen
document.getElementById('blue').onclick = partyBlue
document.getElementById('pink').onclick = partyPink
document.getElementById('black').onclick = partyBlack
document.getElementById('yellow').onclick = partyYellow

function partyPurple() {
  document.querySelector('body').style.backgroundColor = 'rgba(241,63,247,1)'
  document.querySelector('body').style.color = 'white'
}

function partyGreen() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,253,81,1)'
  document.querySelector('body').style.color = 'white'
}

function partyBlue() {
  document.querySelector('body').style.backgroundColor = 'rgba(0,254,255)'
  document.querySelector('body').style.color = 'white'
}

function partyPink() {
document.querySelector('body').style.backgroundColor = "pink"
document.querySelector('body').style.color = "white"
}

function partyBlack() {
  document.querySelector('body').style.backgroundColor = "black"
  document.querySelector('body').style.color = "white"
}



function partyYellow() {
  document.querySelector('body').style.backgroundColor = "yellow"
  document.querySelector('body').style.color = "white"
}