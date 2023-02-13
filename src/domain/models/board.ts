import { Cell } from './cell'

export class Board {
  private columnCount: number
  private rowCount: number
  private cells: Cell[][]

  public constructor(rowCount: number, columnCount: number) {
    this.rowCount = rowCount
    this.columnCount = columnCount

    this.cells = new Array([this.rowCount][this.columnCount])
    for (let row = 0; row < this.rowCount; row++) {
      for (let column = 0; column < this.columnCount; column++) {
        this.cells[column][row] = new Cell(column, row)
      }
    }
  }

  public getCells(): Cell[][] {
    return this.cells
  }

  public setCells(cells: Cell[][]): void {
    this.cells = cells
  }

  public generateFood(): void {
    let row
    let column
    while (true) {
      row = Math.round(Math.random() * this.rowCount)
      column = Math.round(Math.random() * this.columnCount)

      if (this.cells[row][column].getCellType() !== 'snake') break
    }
    this.cells[row][column].setCellType('food')
  }
}
