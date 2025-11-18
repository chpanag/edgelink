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

const CAPABILITIES = [
  {
    icon: 'eva:flash-outline',
    title: 'Universal Legacy Asset Connectivity',
    description:
      'Reads from RS-485/RS-232, pulse outputs, analogue loops and LED/OCR modules.',
    color: 'primary',
  },
  {
    icon: 'eva:wifi-outline',
    title: 'IoT-Standard Protocol Injection',
    description:
      'Outputs harmonised data over MQTT, OPC UA or REST/HTTP — ready for cloud platforms, SCADA or edge analytics.',
    color: 'info',
  },
  {
    icon: 'eva:cube-outline',
    title: 'Modular Cloud-Native Architecture',
    description:
      'All components packaged as OCI containers; critical ones run as unikernels via urunc.',
    color: 'success',
  },
  {
    icon: 'eva:sync-outline',
    title: 'Device Repurposing Pipeline',
    description:
      'Redefine the function of any EdgeLink device through Kubernetes-style FlashJobs. Change roles (charger → inverter → meter) with a single declarative update.',
    color: 'warning',
  },
  {
    icon: 'eva:shield-outline',
    title: 'Attested OTA Updates',
    description:
      'Secure updates verified through DICE-rooted attestation and EAT tokens before firmware or driver updates are applied.',
    color: 'error',
  },
  {
    icon: 'eva:activity-outline',
    title: 'Robust Time-Series Processing',
    description:
      'Canonicalisation, timestamping, debouncing, filtering, buffering for network loss.',
    color: 'secondary',
  },
  {
    icon: 'eva:globe-2-outline',
    title: 'Cloud–Edge Continuum Integration',
    description:
      'Works at the edge, on-prem micro-clouds, or cloud test environments using the same images and configs.',
    color: 'primary',
  },
];

export function ProductCapabilities({ sx, ...other }) {
  const renderTitle = () => (
    <Box
      component={m.div}
      variants={varFade('inUp', { distance: 24 })}
      sx={{ textAlign: 'center', mb: { xs: 5, md: 8 } }}
    >
      <Typography variant="overline" sx={{ color: 'text.secondary', mb: 2, display: 'block' }}>
        What EdgeLink Offers
      </Typography>
      <Typography variant="h2" component="h2">
        Key Capabilities
      </Typography>
    </Box>
  );

  const renderCapabilities = () => (
    <Grid container spacing={3}>
      {CAPABILITIES.map((capability, index) => (
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
                bgcolor: 'background.paper',
                border: `1px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}`,
                transition: theme.transitions.create(['box-shadow', 'transform']),
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: theme.customShadows.z8,
                },
              }),
            ]}
          >
            <Box
              sx={[
                (theme) => ({
                  width: 56,
                  height: 56,
                  display: 'flex',
                  borderRadius: 1.5,
                  alignItems: 'center',
                  justifyContent: 'center',
                  bgcolor: varAlpha(theme.vars.palette[capability.color].mainChannel, 0.08),
                  color: `${capability.color}.main`,
                }),
              ]}
            >
              <Iconify icon={capability.icon} width={28} />
            </Box>
            <Stack spacing={1}>
              <Typography variant="h6">{capability.title}</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {capability.description}
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      ))}
    </Grid>
  );

  return (
    <Box
      id="capabilities"
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
        {renderCapabilities()}
      </Container>
    </Box>
  );
}
