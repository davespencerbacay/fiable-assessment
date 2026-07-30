import type { Meta, StoryObj } from '@storybook/react-vite'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import { LabeledValue } from './LabeledValue'

const meta = {
  title: 'Components/LabeledValue',
  component: LabeledValue,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof LabeledValue>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Due',
    value: 'Today at 12:00 EST',
  },
}

export const WithIcon: Story = {
  args: {
    title: 'Due',
    value: 'Today at 12:00 EST',
    icon: <AccessTimeIcon fontSize="small" />,
  },
}
