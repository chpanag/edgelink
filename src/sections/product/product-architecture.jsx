import { m } from 'framer-motion';
import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/global-config';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

const HARDWARE = [
  'Raspberry Pi (full gateway)',
  'ESP32 (close-to-signal MCU front-end)',
  'External ADC modules',
  'RS-485/RS-232 transceivers',
  'Secure storage for cryptographic keys',
];

const SOFTWARE = [
  'Linux OS (Pi variant)',
  'Lightweight RTOS (ESP32 variant)',
  <>
    Container runtime with{' '}
    <Link
      href="https://urunc.io"
      target="_blank"
      rel="noopener noreferrer"
      sx={{ color: 'inherit', fontWeight: 600 }}
    >
      urunc
    </Link>{' '}
    configured as OCI runtime
  </>,
  'Protocol engine (MQTT/OPC UA/REST)',
  'OTA updater + attestation client',
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

  const renderArchitectureImage = () => (
    <Box
      component={m.div}
      variants={varFade('inUp', { distance: 24 })}
      sx={{
        mt: 4,
        textAlign: 'center',
      }}
    >
      <Box
        component="img"
        src={`${CONFIG.assetsDir}/assets/images/edgelink/akri-update-reflash.png`}
        alt="Device Repurposing with Akri and FlashJobs"
        sx={{
          width: '100%',
          maxWidth: 900,
          height: 'auto',
          mx: 'auto',
          borderRadius: 2,
          boxShadow: (theme) => theme.customShadows.z8,
        }}
      />
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
        {renderArchitectureImage()}
      </Container>
    </Box>
  );
}
