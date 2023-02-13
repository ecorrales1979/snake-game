export type CellType = 'empty' | 'food' | 'snake'

export class Cell {
  private column: number
  private row: number
  private cellType: CellType

  constructor(column: number, row: number) {
    this.column = column
    this.row = row
    this.cellType = 'empty'
  }

  public getCellType(): CellType {
    return this.cellType
  }

  public setCellType(cellType: CellType): void {
    this.cellType = cellType
  }

  public getColumn(): number {
    return this.column
  }

  public getRow(): number {
    return this.row
  }
}
