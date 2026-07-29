import type { Meta, StoryObj } from '@storybook/react-vite'
import { Alert } from './Alert'

const meta = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

export const Success: Story = {
  args: {
    severity: 'success',
    title: 'Success',
    message: 'This is a success Alert with an encouraging title.',
  },
}

export const Error: Story = {
  args: {
    severity: 'error',
    title: 'Error',
    message: 'This is an error Alert with an urgent title.',
  },
}

export const Warning: Story = {
  args: {
    severity: 'warning',
    title: 'Warning',
    message: 'This is a warning Alert with a cautionary title.',
  },
}

export const Info: Story = {
  args: {
    severity: 'info',
    title: 'Info',
    message: 'This is an info Alert with a neutral title.',
  },
}