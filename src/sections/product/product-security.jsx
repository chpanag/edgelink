import { m } from 'framer-motion';
import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

const SECURITY_FEATURES = [
  {
    title: 'DICE Root-of-Trust',
    description: 'Hardware-backed per-device identity',
  },
  {
    title: 'EAT Signed Tokens',
    description: 'Cryptographic firmware verification',
  },
  {
    title: 'Attested OTA Updates',
    description: 'Secure remote firmware updates',
  },
  {
    title: 'Unikernel Isolation',
    description: (
      <>
        Minimal attack surface via{' '}
        <Link
          href="https://urunc.io"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: 'inherit', fontWeight: 600 }}
        >
          urunc
        </Link>
      </>
    ),
  },
  {
    title: 'End-to-End TLS',
    description: 'Encrypted edge-to-cloud communication',
  },
  {
    title: 'Rollback Protection',
    description: 'Safe update recovery',
  },
];

export function ProductSecurity({ sx, ...other }) {
  const renderTitle = () => (
    <Box
      component={m.div}
      variants={varFade('inUp', { distance: 24 })}
      sx={{ textAlign: 'center', mb: { xs: 5, md: 8 } }}
    >
      <Typography variant="overline" sx={{ color: 'text.secondary', mb: 2, display: 'block' }}>
        Enterprise-Grade Protection
      </Typography>
      <Typography variant="h2" component="h2">
        Security & Attestation
      </Typography>
    </Box>
  );

  const renderImage = () => (
    <Grid
      component={m.div}
      variants={varFade('inLeft', { distance: 24 })}
      size={{ xs: 12, md: 6 }}
    >
      <Box
        sx={{
          height: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          component="img"
          src="/assets/images/edgelink/iot-device-workflow.png"
          alt="Secure IoT Device Workflow"
          sx={{
            width: '100%',
            height: 'auto',
            borderRadius: 2,
            boxShadow: (theme) => theme.customShadows.z8,
          }}
        />
      </Box>
    </Grid>
  );

  const renderFeatures = () => (
    <Grid
      component={m.div}
      variants={varFade('inRight', { distance: 24 })}
      size={{ xs: 12, md: 6 }}
    >
      <Box
        sx={[
          (theme) => ({
            p: 4,
            height: 1,
            borderRadius: 2,
            bgcolor: 'background.paper',
            border: `1px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}`,
            display: 'flex',
            alignItems: 'center',
          }),
        ]}
      >
        <Stack spacing={2.5} sx={{ width: 1 }}>
          {SECURITY_FEATURES.map((feature, index) => (
            <Stack key={index} direction="row" spacing={2} alignItems="flex-start">
              <Iconify
                icon="eva:shield-checkmark-fill"
                width={24}
                sx={{ mt: 0.25, color: 'error.main', flexShrink: 0 }}
              />
              <Stack spacing={0.25}>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {feature.description}
                </Typography>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Box>
    </Grid>
  );

  return (
    <Box
      id="security"
      component="section"
      sx={[
        {
          py: { xs: 8, md: 12 },
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container component={MotionViewport}>
        {renderTitle()}
        <Grid container spacing={4} alignItems="center">
          {renderImage()}
          {renderFeatures()}
        </Grid>
      </Container>
    </Box>
  );
}
