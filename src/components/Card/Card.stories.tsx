import type { Meta, StoryObj } from '@storybook/react-vite'
import { Card } from './Card'

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const WithAll: Story = {
  args: {
    title: 'Input Format',
    description: '"x,y DIRECTION"',
    list: ['x and y: integers between 0 and 4', 'DIRECTION: NORTH, EAST, SOUTH, WEST'],
  },
}

export const TitleOnly: Story = {
  args: {
    title: 'Card Title',
  },
}

export const WithDescription: Story = {
  args: {
    title: 'Card Title',
    description: 'This is a card description with some additional context.',
  },
}

export const WithList: Story = {
  args: {
    title: 'Requirements',
    list: ['Requirement 1', 'Requirement 2', 'Requirement 3'],
  },
}
