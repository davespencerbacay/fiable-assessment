import { Container, Stack, Typography } from '@mui/material'
import { Button } from './components'

const App = () => {
  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Stack spacing={3}>
        <Typography variant="h4" component="h1" fontWeight={700}>
          Fiable Assessment
        </Typography>

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