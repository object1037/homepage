// const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
// await sleep(1000)

import { setLuckyColor } from './client/luckyColor'
import { setTransition } from './client/setTransition'

setLuckyColor()
setTransition(1000)
