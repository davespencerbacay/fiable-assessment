import type { Meta, StoryObj } from '@storybook/react-vite'
import { useMemo, useState } from 'react'
import { Header } from '../Header'
import { GridTable } from '../GridTable'
import { LabeledValue } from '../LabeledValue'
import { Box, Button, Paper, Stack, TextField, Typography } from '@mui/material'
import { GridTableDirection } from '../GridTable/GridTable.types'
import HeightIcon from '@mui/icons-material/Height';
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp'
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown'
import ArrowRight from '@mui/icons-material/ArrowRight'
import ArrowLeft from '@mui/icons-material/ArrowLeft'

const meta = {
    title: 'Overview/Assessment Playground',
    parameters: {
        layout: 'padded',
    },
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

const acceptedDirections = ['NORTH', 'EAST', 'SOUTH', 'WEST'] as const

const parsePositionInput = (value: string) => {
    const parts = value.split(',').map((part) => part.trim())

    if (parts.length !== 3) {
        return null
    }

    const [xPart, yPart, directionPart] = parts
    const x = Number(xPart)
    const y = Number(yPart)
    const direction = directionPart.toUpperCase() as GridTableDirection

    const isValidDirection = acceptedDirections.includes(direction as (typeof acceptedDirections)[number])

    if (!Number.isInteger(x) || x < 0 || x > 4) {
        return null
    }

    if (!Number.isInteger(y) || y < 0 || y > 4) {
        return null
    }

    if (!isValidDirection) {
        return null
    }

    return { x, y, direction }
}

export const Playground: Story = {
    render: () => {
        const [inputValue, setInputValue] = useState('0, 0, NORTH')
        const [appliedValue, setAppliedValue] = useState('0, 0, NORTH')
        const [errorMessage, setErrorMessage] = useState('')

        const parsedValue = useMemo(() => parsePositionInput(appliedValue), [appliedValue])

        const positionX = parsedValue?.x ?? 0
        const positionY = parsedValue?.y ?? 0
        const direction: GridTableDirection = parsedValue?.direction ?? 'NORTH'

        const capitalize = (value?: string) => (value ? value.charAt(0).toUpperCase() + value.slice(1).toLowerCase() : '')

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
            const nextValue = parsePositionInput(inputValue)

            if (!nextValue) {
                setErrorMessage('Use the format: 0, 0, NORTH')
                return
            }

            setErrorMessage('')
            setAppliedValue(inputValue)
        }

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
                                    Playground input
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 800, lineHeight: 1.2 }}>
                                    Enter the position and direction
                                </Typography>

                                <Typography variant="body2" color="text.secondary">
                                    Accepted format: <strong>0, 0, NORTH</strong>
                                </Typography>
                            </Box>

                            <Stack direction="row" spacing={2} sx={{ alignItems: 'flex-start' }}>
                                <TextField
                                    fullWidth
                                    label='Position format'
                                    value={inputValue}
                                    onChange={(event) => setInputValue(event.target.value)}
                                    helperText={errorMessage || 'Only accepted format: "0, 0, NORTH"'}
                                    error={Boolean(errorMessage)}
                                />

                                <Button
                                    variant="contained"
                                    onClick={handleApply}
                                    sx={{
                                        height: 56,
                                        px: 3,
                                        whiteSpace: 'nowrap',
                                        borderRadius: 2,
                                        textTransform: 'none',
                                        fontWeight: 700,
                                    }}
                                >
                                    Apply
                                </Button>
                            </Stack>

                            <Stack
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
                                <LabeledValue title="Direction" value={capitalize(direction)} icon={directionIcon(direction)} />
                            </Stack>
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
                        <GridTable x={positionX} y={positionY} direction={direction} />
                    </Paper>
                </Stack>
            </Box>
        )
    },
}