import type { Meta, StoryObj } from '@storybook/react-vite'
import { useMemo, useState } from 'react'
import { Alert } from '../Alert'
import { Header } from '../Header'
import { GridTable } from '../GridTable'
import { LabeledValue } from '../LabeledValue'
import { Box, Paper, Stack, TextField, Typography } from '@mui/material'
import { GridTableDirection } from '../GridTable/GridTable.types'
import HeightIcon from '@mui/icons-material/Height';
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp'
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown'
import ArrowRight from '@mui/icons-material/ArrowRight'
import ArrowLeft from '@mui/icons-material/ArrowLeft'
import { Button } from '../Button'
import {
    DEFAULT_PLAYGROUND_INPUT,
    DIRECTION_OPTIONS_TEXT,
    GRID_ERROR_MESSAGE,
    GRID_TABLE_SIZE,
    PLAYGROUND_BUTTON_LABEL,
    PLAYGROUND_ACCEPTED_FORMAT_TEXT,
    PLAYGROUND_INPUT_LABEL,
    PLAYGROUND_SECTION_LABEL,
    PLAYGROUND_SECTION_TITLE,
    PLAYGROUND_VALIDATION_TITLE,
} from '../../constants/constants'
import {
    capitalizeText,
    getParsedDirectionOrDefault,
    parsePositionInput,
    validatePositionInput,
} from '../../utils/playgroundUtils'

const meta = {
    title: 'Overview/Assessment Playground',
    parameters: {
        layout: 'padded',
    },
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
    render: () => {
        const [inputValue, setInputValue] = useState(DEFAULT_PLAYGROUND_INPUT)
        const [appliedValue, setAppliedValue] = useState(DEFAULT_PLAYGROUND_INPUT)
        const [validationErrors, setValidationErrors] = useState<string[]>([])

        const parsedValue = useMemo(() => parsePositionInput(appliedValue), [appliedValue])

        const positionX = parsedValue?.x ?? 0
        const positionY = parsedValue?.y ?? 0
        const direction: GridTableDirection = getParsedDirectionOrDefault(parsedValue?.direction)

        const directionIcon = (direction: GridTableDirection) => {
            switch (direction) {
                case 'NORTH':
                    return <KeyboardArrowUp fontSize="small" />
                case 'SOUTH':
                    return <KeyboardArrowDown fontSize="small" />
                case 'EAST':
                    return <ArrowRight fontSize="small" />
                case 'WEST':
                    return <ArrowLeft fontSize="small" />
                default:
                    return null
            }
        }

        const handleApply = () => {
            const nextErrors = validatePositionInput(inputValue)

            if (nextErrors.length > 0) {
                setValidationErrors(nextErrors)
                return
            }

            setValidationErrors([])
            setAppliedValue(inputValue)
        }

        const gridTableSize = GRID_TABLE_SIZE

        return (
            <Box sx={{ maxWidth: 1240, mx: 'auto', py: 2 }}>
                <Stack spacing={3.5}>
                    <Header
                        title="Grid Object Placement"
                        badgeText="Playground"
                        subtitle="Visualize an object on a 5x5 grid based on position and direction."
                    />

                    <Paper
                        elevation={0}
                        sx={{
                            p: { xs: 2.5, md: 3.5 },
                            borderRadius: 4,
                            border: '1px solid',
                            borderColor: 'divider',
                            boxShadow: '0 16px 40px rgba(15, 23, 42, 0.08)',
                        }}
                    >
                        <Stack spacing={2.25}>
                            <Box>
                                <Typography variant="overline" sx={{ color: 'text.secondary', letterSpacing: 1.6 }}>
                                    {PLAYGROUND_SECTION_LABEL}
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 800, lineHeight: 1.2 }}>
                                    {PLAYGROUND_SECTION_TITLE}
                                </Typography>

                                <Typography variant="body2" color="textSecondary">
                                    {PLAYGROUND_ACCEPTED_FORMAT_TEXT} {gridTableSize - 1}. Direction must be one of: {DIRECTION_OPTIONS_TEXT}.
                                </Typography>
                            </Box>

                            <Stack direction="row" spacing={2} sx={{ alignItems: 'flex-start' }}>
                                <TextField
                                    fullWidth
                                    label={PLAYGROUND_INPUT_LABEL}
                                    value={inputValue}
                                    onChange={(event) => setInputValue(event.target.value)}
                                    onKeyDown={(event) => {
                                        if (event.key === 'Enter') {
                                            event.preventDefault()
                                            handleApply()
                                        }
                                    }}
                                />

                                <Button
                                    onClick={handleApply}
                                    sx={{
                                        height: 56,
                                        px: 3,
                                        whiteSpace: 'nowrap',
                                        borderRadius: 2,
                                        textTransform: 'none',
                                        fontWeight: 700,
                                    }}
                                    label={PLAYGROUND_BUTTON_LABEL} />
                            </Stack>

                            {validationErrors.length > 0 ? (
                                <Alert severity="error" title={PLAYGROUND_VALIDATION_TITLE}>
                                    <Stack component="ul" spacing={0.5} sx={{ margin: 0, paddingLeft: 2 }}>
                                        {validationErrors.map((error) => (
                                            <li key={error}>
                                                <Typography variant="body2">{error}</Typography>
                                            </li>
                                        ))}
                                    </Stack>
                                </Alert>
                            ) : null}

                            {validationErrors.length === 0 ? <Stack
                                direction="row"
                                spacing={2}
                                sx={{
                                    flexWrap: 'wrap',
                                }}
                            >
                                <LabeledValue title="Position X" value={`Column ${positionX}`} icon={<HeightIcon />} />
                                <LabeledValue
                                    title="Position Y"
                                    value={`Row ${positionY}`}
                                    icon={<HeightIcon sx={{ transform: 'rotate(90deg)' }} />}
                                />
                                <LabeledValue title="Direction" value={capitalizeText(direction)} icon={directionIcon(direction)} />
                            </Stack> : null}
                        </Stack>
                    </Paper>

                    <Paper
                        elevation={0}
                        sx={{
                            p: { xs: 2.5, md: 3.5 },
                            borderRadius: 4,
                            border: '1px solid',
                            borderColor: 'divider',
                            backgroundColor: 'background.paper',
                            boxShadow: '0 16px 40px rgba(15, 23, 42, 0.08)',
                            alignItems: 'center',
                            display: 'flex',
                            justifyContent: 'center',
                        }}
                    >
                        <GridTable
                            x={positionX}
                            y={positionY}
                            direction={direction}
                            size={gridTableSize}
                            error={validationErrors.length > 0}
                            errorMessage={GRID_ERROR_MESSAGE}
                        />
                    </Paper>
                </Stack>
            </Box>
        )
    },
}