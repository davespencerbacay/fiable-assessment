import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp'
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown'
import ArrowRight from '@mui/icons-material/ArrowRight'
import ArrowLeft from '@mui/icons-material/ArrowLeft'
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk'
import { Box, Stack, Table, TableBody, TableContainer, TableRow } from '@mui/material'
import { AxisValue, AxisXLabel, AxisYLabel, GridTableContainer, StyledGridCell } from './GridTable.styles'
import type { GridTableProps } from './GridTable.types'

const directionConfig = {
  NORTH: { arrowPosition: 'top', layoutDirection: 'column' },
  SOUTH: { arrowPosition: 'bottom', layoutDirection: 'column' },
  EAST: { arrowPosition: 'right', layoutDirection: 'row' },
  WEST: { arrowPosition: 'left', layoutDirection: 'row' },
} as const

const PlacedIcon = ({ direction }: { direction: NonNullable<GridTableProps['direction']> }) => {
  const config = directionConfig[direction]

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: config.layoutDirection,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 0.25,
      }}
    >
      {config.arrowPosition === 'top' ? (
        <KeyboardArrowUp fontSize="small" color="primary" />
      ) : null}

      {config.arrowPosition === 'left' ? (
        <ArrowLeft fontSize="small" color="primary" />
      ) : null}

      <DirectionsWalkIcon color="primary" sx={{ fontSize: 36 }} />

      {config.arrowPosition === 'right' ? (
        <ArrowRight fontSize="small" color="primary" />
      ) : null}

      {config.arrowPosition === 'bottom' ? (
        <KeyboardArrowDown fontSize="small" color="primary" />
      ) : null}
    </Box>
  )
}

export const GridTable = ({ size = 5, cellSize = 90, xLabel = 'POSITION X', yLabel = 'POSITION Y', x, y, direction }: GridTableProps) => {
  const axisValues = Array.from({ length: size }, (_, index) => index)
  const reversedYValues = [...axisValues].reverse()
  const boardSize = size * cellSize
  const yAxisColumnWidth = 24
  const yAxisToGridGap = 12
  const hasPlacement = typeof x === 'number' && typeof y === 'number' && direction !== undefined

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
                {reversedYValues.map((rowValue) => (
                  <TableRow key={`row-${rowValue}`}>
                    {axisValues.map((col) => (
                      <StyledGridCell key={`cell-${rowValue}-${col}`} sx={{ width: cellSize, height: cellSize, p: 0 }}>
                        {hasPlacement && x === col && y === rowValue && direction ? <PlacedIcon direction={direction} /> : null}
                      </StyledGridCell>
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
