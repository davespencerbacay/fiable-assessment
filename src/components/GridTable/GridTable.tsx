import { Box, Stack, Table, TableBody, TableContainer, TableRow } from '@mui/material'
import { AxisValue, AxisXLabel, AxisYLabel, GridTableContainer, StyledGridCell } from './GridTable.styles'
import type { GridTableProps } from './GridTable.types'

export const GridTable = ({ size = 5, cellSize = 90, xLabel = 'x', yLabel = 'y' }: GridTableProps) => {
  const axisValues = Array.from({ length: size }, (_, index) => index)
  const reversedYValues = [...axisValues].reverse()
  const boardSize = size * cellSize
  const yAxisColumnWidth = 24
  const yAxisToGridGap = 12

  return (
    <Stack direction="row" sx={{ alignItems: 'center' }}>
      <AxisYLabel variant="h6">{yLabel}</AxisYLabel>

      <GridTableContainer>
        <Stack direction="row" spacing={1.5} sx={{ alignItems: 'stretch' }}>
          <Box
            sx={{
              width: yAxisColumnWidth,
              height: boardSize,
              display: 'grid',
              gridTemplateRows: `repeat(${size}, ${cellSize}px)`,
              placeItems: 'center',
            }}
          >
            {reversedYValues.map((value) => (
              <AxisValue key={`y-${value}`}>{value}</AxisValue>
            ))}
          </Box>

          <TableContainer sx={{ width: boardSize, border: 0 }}>
            <Table sx={{ borderCollapse: 'collapse' }}>
              <TableBody>
                {axisValues.map((row) => (
                  <TableRow key={`row-${row}`}>
                    {axisValues.map((col) => (
                      <StyledGridCell
                        key={`cell-${row}-${col}`}
                        sx={{ width: cellSize, height: cellSize }}
                      />
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Stack>

        <Stack sx={{ width: boardSize, marginLeft: `${yAxisColumnWidth + yAxisToGridGap}px`, marginTop: 1 }}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: `repeat(${size}, ${cellSize}px)`,
              justifyItems: 'center',
            }}
          >
            {axisValues.map((value) => (
              <AxisValue key={`x-${value}`}>{value}</AxisValue>
            ))}
          </Box>
          <AxisXLabel variant="h6">{xLabel}</AxisXLabel>
        </Stack>
      </GridTableContainer>
    </Stack>
  )
}

export default GridTable
