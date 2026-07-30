import type { Meta, StoryObj } from '@storybook/react-vite'
import { Stack } from '@mui/material'
import { Header } from '../Header'

const meta = {
    title: 'Overview/Assessment Playground',
    parameters: {
        layout: 'padded',
    },
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Playground: Story = {
    render: () => (
        <Stack spacing={3}>
            <Header
                title="Grid Object Placement"
                badgeText="Playground"
                subtitle="Visualize an object on a 5x5 grid based on position and direction."
            />
        </Stack>
    ),
}