import { m } from 'framer-motion';
import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

const HOW_IT_WORKS = [
  {
    step: '1',
    title: 'Attach',
    description: 'To legacy equipment via RS-485/232, pulse, analogue inputs.',
    icon: 'eva:link-2-outline',
  },
  {
    step: '2',
    title: 'Decode',
    description: 'Using modular drivers (container or unikernel).',
    icon: 'eva:code-download-outline',
  },
  {
    step: '3',
    title: 'Accelerate',
    description: 'ML inference & processing via vAccel on GPU/TPU/FPGA.',
    icon: 'eva:trending-up-outline',
  },
  {
    step: '4',
    title: 'Canonicalise',
    description: 'Metrics into a structured data model.',
    icon: 'eva:file-text-outline',
  },
  {
    step: '5',
    title: 'Publish',
    description: 'To MQTT/OPC UA/REST.',
    icon: 'eva:cloud-upload-outline',
  },
  {
    step: '6',
    title: 'Manage',
    description: 'Devices centrally with OTA + attestation.',
    icon: 'eva:settings-outline',
  },
  {
    step: '7',
    title: 'Repurpose',
    description: 'Devices by scheduling secure FlashJobs.',
    icon: 'eva:refresh-outline',
  },
];

export function ProductHowItWorks({ sx, ...other }) {
  const renderTitle = () => (
    <Box
      component={m.div}
      variants={varFade('inUp', { distance: 24 })}
      sx={{ textAlign: 'center', mb: 6 }}
    >
      <Typography variant="h3" component="h3" sx={{ mb: 2 }}>
        How EdgeLink Works
      </Typography>
      <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 600, mx: 'auto' }}>
        A simple, secure workflow from legacy hardware to cloud-native systems
      </Typography>
    </Box>
  );

  const renderSteps = () => (
    <Grid container spacing={3}>
      {HOW_IT_WORKS.map((step, index) => (
        <Grid
          component={m.div}
          variants={varFade('inUp', { distance: 24 })}
          key={index}
          size={{ xs: 12, sm: 6, md: 4 }}
        >
          <Stack
            spacing={2}
            sx={[
              (theme) => ({
                p: 3,
                height: 1,
                borderRadius: 2,
                textAlign: 'center',
                bgcolor: varAlpha(theme.vars.palette.primary.mainChannel, 0.04),
                border: `2px solid ${varAlpha(theme.vars.palette.primary.mainChannel, 0.12)}`,
              }),
            ]}
          >
            <Box
              sx={[
                (theme) => ({
                  width: 48,
                  height: 48,
                  mx: 'auto',
                  display: 'flex',
                  borderRadius: '50%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  bgcolor: 'primary.main',
                  color: 'primary.contrastText',
                  fontWeight: 'bold',
                  fontSize: 20,
                }),
              ]}
            >
              {step.step}
            </Box>
            <Iconify icon={step.icon} width={32} sx={{ mx: 'auto', color: 'primary.main' }} />
            <Stack spacing={0.5}>
              <Typography variant="h6">{step.title}</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {step.description}
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      ))}
    </Grid>
  );

  return (
    <Box
      id="how-it-works"
      component="section"
      sx={[
        (theme) => ({
          py: { xs: 8, md: 12 },
          bgcolor: varAlpha(theme.vars.palette.grey['500Channel'], 0.04),
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container component={MotionViewport}>
        {renderTitle()}
        {renderSteps()}
      </Container>
    </Box>
  );
}
