import { Box, Container, Stack, Typography } from '@mui/material'
import { Card, Header } from './components'

const App = () => {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Stack spacing={4}>
        <Header
          title="Storybook Setup Guide"
          badgeText="React + Material UI"
          subtitle="How to set up and run Storybook for this project."
        />

        <Typography variant="body1" color="text.secondary">
          Use this guide to install dependencies, start Storybook locally, and build it for deployment.
        </Typography>

        <Stack spacing={2.5}>
          <Card
            title="1. Install dependencies"
            description="Run this command from the project root."
            list={['npm install']}
          />

          <Card
            title="2. Run Storybook locally"
            description="Start Storybook and open it in your browser."
            list={['npm run storybook', 'Open http://localhost:6006']}
          />

          <Card
            title="3. Build Storybook for deployment"
            description="Create the static Storybook output folder."
            list={['npm run build-storybook', 'Output folder: storybook-static']}
          />

          <Card
            title="4. Deployed on Vercel"
            description="Use the Storybook build command and output folder in Vercel."
            list={[
              'Build Command: npm run build-storybook',
              'Output Directory: storybook-static',
              'Redeploy after pushing changes to your repository',
              'Link: fiable-assessment-6i568ats7-evedave1999-2990s-projects.vercel.app'
            ]}
          />
        </Stack>

        <Box sx={{ p: 2.5, borderRadius: 3, bgcolor: 'background.paper', border: '1px solid', borderColor: 'divider' }}>
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
            Quick commands
          </Typography>

          <Stack spacing={0.75}>
            <Typography variant="body2">Local app: <strong>npm run dev</strong></Typography>
            <Typography variant="body2">Local Storybook: <strong>npm run storybook</strong></Typography>
            <Typography variant="body2">Build app: <strong>npm run build</strong></Typography>
            <Typography variant="body2">Build Storybook: <strong>npm run build-storybook</strong></Typography>
          </Stack>
        </Box>
      </Stack>
    </Container>
  )
}

export default App