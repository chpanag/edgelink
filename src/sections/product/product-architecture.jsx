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

const HARDWARE = [
  'Raspberry Pi (full gateway)',
  'ESP32 (close-to-signal MCU front-end)',
  'External ADC modules',
  'Optional optical LED sensors',
  'RS-485/RS-232 transceivers',
  'Secure storage for cryptographic keys',
];

const SOFTWARE = [
  'Linux OS (Pi variant)',
  'Lightweight RTOS (ESP32 variant)',
  'Container runtime with urunc configured as OCI runtime',
  'Canonicalisation & time-series layer',
  'Protocol engine (MQTT/OPC UA/REST)',
  'OTA updater + attestation client',
  'Discovery agent (Akri-style)',
  'FlashJob controller/agent logic',
];

const SECURITY = [
  {
    title: 'urunc',
    description: 'Unikernel workloads for drivers',
  },
  {
    title: 'DICE root-of-trust',
    description: 'Per-device identity',
  },
  {
    title: 'EAT signed tokens',
    description: 'Secure firmware updates',
  },
  {
    title: 'TLS everywhere',
    description: 'End-to-end encryption',
  },
  {
    title: 'Firmware rollback support',
    description: 'Safe update recovery',
  },
];

export function ProductArchitecture({ sx, ...other }) {
  const renderTitle = () => (
    <Box
      component={m.div}
      variants={varFade('inUp', { distance: 24 })}
      sx={{ textAlign: 'center', mb: { xs: 5, md: 8 } }}
    >
      <Typography variant="overline" sx={{ color: 'text.secondary', mb: 2, display: 'block' }}>
        Under the Hood
      </Typography>
      <Typography variant="h2" component="h2">
        Technical Architecture
      </Typography>
    </Box>
  );

  const renderHardware = () => (
    <Grid
      component={m.div}
      variants={varFade('inLeft', { distance: 24 })}
      size={{ xs: 12, md: 6 }}
    >
      <Stack
        spacing={2}
        sx={[
          (theme) => ({
            p: 4,
            height: 1,
            borderRadius: 2,
            bgcolor: varAlpha(theme.vars.palette.primary.mainChannel, 0.04),
            border: `1px solid ${varAlpha(theme.vars.palette.primary.mainChannel, 0.12)}`,
          }),
        ]}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
          <Box
            sx={[
              (theme) => ({
                width: 48,
                height: 48,
                display: 'flex',
                borderRadius: 1.5,
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: varAlpha(theme.vars.palette.primary.mainChannel, 0.16),
                color: 'primary.main',
              }),
            ]}
          >
            <Iconify icon="eva:hard-drive-outline" width={24} />
          </Box>
          <Typography variant="h4">Hardware</Typography>
        </Box>
        <Stack spacing={1.5}>
          {HARDWARE.map((item, index) => (
            <Stack key={index} direction="row" spacing={1.5} alignItems="flex-start">
              <Iconify
                icon="eva:checkmark-circle-2-fill"
                width={20}
                sx={{ mt: 0.25, color: 'primary.main', flexShrink: 0 }}
              />
              <Typography variant="body2">{item}</Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Grid>
  );

  const renderSoftware = () => (
    <Grid
      component={m.div}
      variants={varFade('inRight', { distance: 24 })}
      size={{ xs: 12, md: 6 }}
    >
      <Stack
        spacing={2}
        sx={[
          (theme) => ({
            p: 4,
            height: 1,
            borderRadius: 2,
            bgcolor: varAlpha(theme.vars.palette.info.mainChannel, 0.04),
            border: `1px solid ${varAlpha(theme.vars.palette.info.mainChannel, 0.12)}`,
          }),
        ]}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
          <Box
            sx={[
              (theme) => ({
                width: 48,
                height: 48,
                display: 'flex',
                borderRadius: 1.5,
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: varAlpha(theme.vars.palette.info.mainChannel, 0.16),
                color: 'info.main',
              }),
            ]}
          >
            <Iconify icon="eva:code-outline" width={24} />
          </Box>
          <Typography variant="h4">Software Stack</Typography>
        </Box>
        <Stack spacing={1.5}>
          {SOFTWARE.map((item, index) => (
            <Stack key={index} direction="row" spacing={1.5} alignItems="flex-start">
              <Iconify
                icon="eva:checkmark-circle-2-fill"
                width={20}
                sx={{ mt: 0.25, color: 'info.main', flexShrink: 0 }}
              />
              <Typography variant="body2">{item}</Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Grid>
  );

  const renderSecurity = () => (
    <Box
      component={m.div}
      variants={varFade('inUp', { distance: 24 })}
      sx={[
        (theme) => ({
          mt: 4,
          p: 4,
          borderRadius: 2,
          bgcolor: varAlpha(theme.vars.palette.error.mainChannel, 0.04),
          border: `1px solid ${varAlpha(theme.vars.palette.error.mainChannel, 0.12)}`,
        }),
      ]}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
        <Box
          sx={[
            (theme) => ({
              width: 48,
              height: 48,
              display: 'flex',
              borderRadius: 1.5,
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: varAlpha(theme.vars.palette.error.mainChannel, 0.16),
              color: 'error.main',
            }),
          ]}
        >
          <Iconify icon="eva:shield-outline" width={24} />
        </Box>
        <Typography variant="h4">Virtualization & Security</Typography>
      </Box>
      <Grid container spacing={2}>
        {SECURITY.map((item, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
            <Stack spacing={0.5}>
              <Stack direction="row" spacing={1} alignItems="center">
                <Iconify icon="eva:shield-checkmark-fill" width={18} color="error.main" />
                <Typography variant="subtitle2">{item.title}</Typography>
              </Stack>
              <Typography variant="body2" sx={{ color: 'text.secondary', pl: 3.25 }}>
                {item.description}
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  return (
    <Box
      id="architecture"
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
        <Grid container spacing={3}>
          {renderHardware()}
          {renderSoftware()}
        </Grid>
        {renderSecurity()}
      </Container>
    </Box>
  );
}
