/*
* This program Solves the tower of hanoi.
*
* @author  Ahmad El-khawaldeh
* @version 1.0
* @since   2021-12-08
*/

class MrCoxallStack {
  private stack: number[] = []

  push (pushValue: number) {
      this.stack.push(pushValue)
  }

  showStack () {
    for (let i = this.stack.length - 1; i >= 0; i--) {
      console.log(this.stack[i])
    }
  }
}

const aStack = new MrCoxallStack()

console.log('First stack:')
aStack.showStack()

console.log('Add 50:')
aStack.push(50)
aStack.showStack()

console.log('Add 170:')
aStack.push(170)
aStack.showStack()

console.log('\nDone.')
