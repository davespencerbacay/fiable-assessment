export type GridTableDirection = 'NORTH' | 'EAST' | 'SOUTH' | 'WEST' | undefined
export interface GridTableProps {
  size?: number
  cellSize?: number
  xLabel?: string
  yLabel?: string
  x?: number | undefined
  y?: number | undefined
  direction?: GridTableDirection
  error?: boolean
  errorMessage?: string
}
