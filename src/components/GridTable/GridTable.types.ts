export interface GridTableProps {
  size?: number
  cellSize?: number
  xLabel?: string
  yLabel?: string
  x?: number | undefined
  y?: number | undefined
  direction?: 'NORTH' | 'EAST' | 'SOUTH' | 'WEST' | undefined
}
