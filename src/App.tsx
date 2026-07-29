import { Container, Stack, Typography } from '@mui/material'
import { Button, Header } from './components'

const App = () => {
  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Stack spacing={3}>
        <Header
          title="Grid Object Placement"
          badgeText="React + Material UI"
          subtitle="Visualize an object on a 5x5 grid based on position and direction."
        />

        <Typography variant="body1" color="text.secondary">
          Reusable component library setup with Storybook and Material UI.
        </Typography>

        <Stack direction="row" spacing={2}>
          <Button label="Primary" intent="primary" />
          <Button label="Secondary" intent="secondary" />
          <Button label="Disabled" disabled />
        </Stack>
      </Stack>
    </Container>
  )
}

export default App