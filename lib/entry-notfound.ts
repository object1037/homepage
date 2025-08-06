import { randomPosition } from './client/randomPosition'
import { setTransition } from './client/setTransition'

const moveElement = document.querySelector('svg')
const container = document.getElementById('transition')
const heading = document.querySelector('h1')

setTransition(1000)
setTimeout(() => randomPosition(container, moveElement, heading), 3050)
