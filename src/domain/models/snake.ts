import { Cell } from './cell'

export class Snake {
  private snakeFragments: Cell[] = []
  private head: Cell

  public constructor(initPosition: Cell) {
    this.head = initPosition
    this.snakeFragments.push(this.head)
    this.head.setCellType('snake')
  }

  public grow(): void {
    this.snakeFragments.push(this.head)
  }

  public move(nextCell: Cell): void {
    const tail = this.snakeFragments.pop()
    tail?.setCellType('empty')

    this.head = nextCell
    this.head.setCellType('snake')
    this.snakeFragments.unshift(this.head)
  }

  public checkCrash(nextCell: Cell): boolean {
    this.snakeFragments.forEach(cell => {
      if (cell === nextCell) {
        return true
      }
    })

    return false
  }

  public getSnakeFragments(): Cell[] {
    return this.snakeFragments
  }

  public setSnakeFragments(snakeFragments: Cell[]): void {
    this.snakeFragments = snakeFragments
  }

  public getHead(): Cell {
    return this.head
  }

  public setHead(head: Cell): void {
    this.head = head
  }
}
