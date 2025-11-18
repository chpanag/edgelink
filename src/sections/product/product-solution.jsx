import { m } from 'framer-motion';
import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

const SOLUTION_FEATURES = [
  {
    icon: 'eva:layers-fill',
    title: 'Multi-interface hardware',
    description: 'Serial, pulse, analogue and optical signals',
  },
  {
    icon: 'eva:code-outline',
    title: 'Modular drivers',
    description: 'Decoding vendor-specific protocols',
  },
  {
    icon: 'eva:trending-up-outline',
    title: 'Hardware acceleration',
    description: 'GPU/TPU/FPGA via vAccel framework',
  },
  {
    icon: 'eva:file-text-outline',
    title: 'Normalized data',
    description: 'Standardised data representation',
  },
  {
    icon: 'eva:cloud-upload-outline',
    title: 'Cloud-native delivery',
    description: 'MQTT, OPC UA or REST',
  },
  {
    icon: 'eva:shield-outline',
    title: 'Workload isolation',
    description: 'Using unikernels',
  },
  {
    icon: 'eva:refresh-outline',
    title: 'K8s-native orchestration',
    description: 'Devices as K8s resources',
  },
  {
    icon: 'eva:lock-outline',
    title: 'Full attestation',
    description: 'Based on DICE and EAT',
  },
];

export function ProductSolution({ sx, ...other }) {
  const renderTitle = () => (
    <Box
      component={m.div}
      variants={varFade('inUp', { distance: 24 })}
      sx={{ textAlign: 'center', mb: { xs: 5, md: 8 } }}
    >
      <Typography variant="overline" sx={{ color: 'primary.main', mb: 2, display: 'block' }}>
        The EdgeLink Solution
      </Typography>
      <Typography variant="h2" component="h2" sx={{ mb: 3 }}>
        Turn Legacy Assets into Modern IoT Devices
      </Typography>
      <Typography
        variant="body1"
        sx={{
          maxWidth: 800,
          mx: 'auto',
          color: 'text.secondary',
        }}
      >
        <strong>EdgeLink</strong> attaches to existing equipment and{' '}
        <strong>
          turns any legacy asset into a modern IoT-compatible device
        </strong>
        .
      </Typography>
    </Box>
  );

  const renderFeatures = () => (
    <Box
      sx={{
        display: 'grid',
        gap: 3,
        gridTemplateColumns: {
          xs: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(4, 1fr)',
        },
      }}
    >
      {SOLUTION_FEATURES.map((feature, index) => (
        <Box
          component={m.div}
          key={index}
          variants={varFade('inUp', { distance: 24 })}
          sx={[
            (theme) => ({
              p: 3,
              borderRadius: 2,
              textAlign: 'center',
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
                width: 64,
                height: 64,
                mx: 'auto',
                mb: 2,
                display: 'flex',
                borderRadius: 2,
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: varAlpha(theme.vars.palette.primary.mainChannel, 0.08),
                color: 'primary.main',
              }),
            ]}
          >
            <Iconify icon={feature.icon} width={32} />
          </Box>
          <Typography variant="h6" sx={{ mb: 1 }}>
            {feature.title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {feature.description}
          </Typography>
        </Box>
      ))}
    </Box>
  );

  const renderConclusion = () => (
    <Box
      component={m.div}
      variants={varFade('inUp', { distance: 24 })}
      sx={[
        (theme) => ({
          mt: 8,
          p: 4,
          borderRadius: 2,
          textAlign: 'center',
          bgcolor: varAlpha(theme.vars.palette.primary.mainChannel, 0.08),
        }),
      ]}
    >
      <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
        Legacy devices instantly become part of the compute continuum
      </Typography>
      <Typography variant="body1" sx={{ color: 'text.secondary' }}>
        Secure, remotely manageable, hardware-accelerated, and interoperable
      </Typography>
    </Box>
  );

  return (
    <Box
      id="solution"
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
        {renderFeatures()}
        {renderConclusion()}
      </Container>
    </Box>
  );
}
