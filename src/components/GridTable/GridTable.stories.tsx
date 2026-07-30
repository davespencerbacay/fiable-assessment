import type { Meta, StoryObj } from '@storybook/react-vite'
import { GridTable } from './GridTable'

const meta = {
  title: 'Components/GridTable',
  component: GridTable,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof GridTable>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const Compact: Story = {
  args: {
    cellSize: 60,
  },
}

export const WithPlacement: Story = {
  args: {
    x: 1,
    y: 1,
    direction: 'NORTH',
  },
}

export const Invalid: Story = {
  args: {
    x: 1,
    y: 1,
    direction: 'NORTH',
    error: true,
    errorMessage: 'INVALID',
  },
}
