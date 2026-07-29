import type { Meta, StoryObj } from '@storybook/react-vite'
import { Header } from './Header'

const meta = {
    title: 'Components/Header',
    component: Header,
    tags: ['autodocs'],
    parameters: {
        layout: 'padded',
    },
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        title: 'Header',
        badgeText: 'React + Material UI',
        subtitle: 'This is a header.',
    },
}

export const WithoutBadge: Story = {
    args: {
        title: 'Header',
        subtitle: 'This is a header.',
    },
}