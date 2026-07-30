import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp'
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown'
import ArrowRight from '@mui/icons-material/ArrowRight'
import ArrowLeft from '@mui/icons-material/ArrowLeft'
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk'
import { Box, Stack, Table, TableBody, TableContainer, TableRow } from '@mui/material'
import { Card } from '../Card'
import {
  DIRECTION_VALUES,
  GRID_SELECTED_CARD_DESCRIPTION,
  GRID_SELECTED_CARD_TITLE,
  GRID_CELL_SIZE,
  GRID_ERROR_MESSAGE,
  GRID_TABLE_SIZE,
  GRID_VALID_CARD_DESCRIPTION,
  GRID_VALID_CARD_TITLE,
  GRID_X_LABEL,
  GRID_Y_AXIS_COLUMN_WIDTH,
  GRID_Y_AXIS_TO_TABLE_GAP,
  GRID_Y_LABEL,
} from '../../constants/constants'
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

export const GridTable = ({
  size = GRID_TABLE_SIZE,
  cellSize = GRID_CELL_SIZE,
  xLabel = GRID_X_LABEL,
  yLabel = GRID_Y_LABEL,
  x,
  y,
  direction,
  error = false,
  errorMessage = GRID_ERROR_MESSAGE,
}: GridTableProps) => {
  const axisValues = Array.from({ length: size }, (_, index) => index)
  const reversedYValues = [...axisValues].reverse()
  const boardSize = size * cellSize
  const yAxisColumnWidth = GRID_Y_AXIS_COLUMN_WIDTH
  const yAxisToGridGap = GRID_Y_AXIS_TO_TABLE_GAP
  const hasPlacement = typeof x === 'number' && typeof y === 'number' && direction !== undefined
  const validAxisRange = axisValues.join(' | ')
  const validPlacementSummary = [
    `Position X: ${validAxisRange}`,
    `Position Y: ${validAxisRange}`,
    `Direction: ${DIRECTION_VALUES.join(' | ')}`,
  ]
  const selectedPlacementSummary = hasPlacement && !error
    ? [
      `Position X: ${x}`,
      `Position Y: ${y}`,
      `Direction: ${direction}`,
    ]
    : []

  return (
    <Stack direction={{ xs: 'column', lg: 'row' }} spacing={3} sx={{ alignItems: 'flex-start' }}>
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

            <TableContainer sx={{ width: boardSize, border: 0, position: 'relative' }}>
              <Table sx={{ borderCollapse: 'collapse' }}>
                <TableBody>
                  {reversedYValues.map((rowValue) => (
                    <TableRow key={`row-${rowValue}`}>
                      {axisValues.map((col) => (
                        <StyledGridCell key={`cell-${rowValue}-${col}`} sx={{ width: cellSize, height: cellSize, p: 0 }}>
                          {hasPlacement && x === col && y === rowValue && direction && !error ? <PlacedIcon direction={direction} /> : null}
                        </StyledGridCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              {error ? (
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    pointerEvents: 'none',
                  }}
                >
                  <Box
                    sx={{
                      px: 2,
                      py: 0.75,
                      borderRadius: 999,
                      backgroundColor: 'error.main',
                      color: 'error.contrastText',
                      fontWeight: 700,
                      letterSpacing: '0.04em',
                      boxShadow: '0 10px 24px rgba(0, 0, 0, 0.22)',
                    }}
                  >
                    {errorMessage}
                  </Box>
                </Box>
              ) : null}
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

      <Box sx={{ minWidth: { xs: '100%', lg: 280 }, width: { xs: '100%', lg: 320 } }}>
        <Card
          title={GRID_VALID_CARD_TITLE}
          description={GRID_VALID_CARD_DESCRIPTION}
          list={validPlacementSummary}
        />
        <Card
          title={GRID_SELECTED_CARD_TITLE}
          description={GRID_SELECTED_CARD_DESCRIPTION}
          list={selectedPlacementSummary}
        />
      </Box>

    </Stack>
  )
}

export default GridTable
