import type { Meta, StoryObj } from '@storybook/react-vite'
import { Header } from '../Header'
import { GridTable } from '../GridTable'
import { LabeledValue } from '../LabeledValue'
import { Stack } from '@mui/material'
import { GridTableDirection } from '../GridTable/GridTable.types'
import HeightIcon from '@mui/icons-material/Height';

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
        const positionX = 0;
        const positionY = 1;
        const direction: GridTableDirection = 'SOUTH';

        const capitalize = (value?: string) => value ? value.charAt(0).toUpperCase() + value.slice(1).toLowerCase() : '';

        return (
            <Stack spacing={3}>
                <Header
                    title="Grid Object Placement"
                    badgeText="Playground"
                    subtitle="Visualize an object on a 5x5 grid based on position and direction."
                />

                <Stack direction="row" spacing={3}>
                    <LabeledValue title="Position X" value={`Column ${positionX}`} icon={<HeightIcon />} />
                    <LabeledValue title="Position Y" value={`Row ${positionY}`} icon={<HeightIcon sx={{
                        transform: 'rotate(90deg)',
                    }} />} />
                    <LabeledValue title="Direction" value={capitalize(direction)} />
                </Stack>


                <GridTable x={positionX} y={positionY} direction={direction} />
            </Stack>
        )
    },
}