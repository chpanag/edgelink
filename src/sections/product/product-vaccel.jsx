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

const VACCEL_FEATURES = [
  {
    icon: 'eva:layers-fill',
    title: 'Modular Plugin Architecture',
    description: 'Support for multiple acceleration frameworks through simple plugin mechanisms.',
  },
  {
    icon: 'eva:trending-up-outline',
    title: 'Minimal Performance Overhead',
    description: 'As low as 5% overhead for ML image inference compared to native execution.',
  },
  {
    icon: 'eva:shield-outline',
    title: 'Hardware-Level Security',
    description: 'Prevents data leakage between consecutive runs on shared accelerators.',
  },
  {
    icon: 'eva:sync-outline',
    title: 'Flexible Execution',
    description: 'Maps workloads to appropriate hardware functions automatically.',
  },
];

const SUPPORTED_OPERATIONS = [
  'TensorFlow & TensorFlow Lite',
  'PyTorch tensor operations',
  'TVM compilation',
  'BLAS (linear algebra)',
  'Image processing',
  'FPGA operations',
];

export function ProductVaccel({ sx, ...other }) {
  const renderTitle = () => (
    <Box
      component={m.div}
      variants={varFade('inUp', { distance: 24 })}
      sx={{ textAlign: 'center', mb: { xs: 5, md: 8 } }}
    >
      <Typography variant="overline" sx={{ color: 'text.secondary', mb: 2, display: 'block' }}>
        Hardware Acceleration Framework
      </Typography>
      <Typography variant="h2" component="h2" sx={{ mb: 3 }}>
        vAccel: Serverless Hardware Acceleration
      </Typography>
      <Typography
        variant="body1"
        sx={{
          maxWidth: 900,
          mx: 'auto',
          color: 'text.secondary',
        }}
      >
        EdgeLink leverages{' '}
        <Link
          href="https://vaccel.org"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: 'primary.main', fontWeight: 600 }}
        >
          vAccel
        </Link>
        , a lightweight framework that exposes hardware acceleration functionality to workloads in
        virtualized or isolated environments. Integrate GPU, TPU, and FPGA accelerators into your
        edge deployments without vendor lock-in.
      </Typography>
    </Box>
  );

  const renderImage = () => (
    <Box
      component={m.div}
      variants={varFade('inUp', { distance: 24 })}
      sx={{
        mt: 4,
        mb: 6,
        textAlign: 'center',
      }}
    >
      <Box
        component="img"
        src={`${CONFIG.assetsDir}/assets/images/edgelink/vaccel-stack-light.svg`}
        alt="vAccel Stack Architecture"
        sx={{
          width: '100%',
          maxWidth: 600,
          height: 'auto',
          mx: 'auto',
        }}
      />
    </Box>
  );

  const renderKeyFeatures = () => (
    <Grid
      component={m.div}
      variants={varFade('inLeft', { distance: 24 })}
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
          }),
        ]}
      >
        <Typography variant="h4" sx={{ mb: 3 }}>
          Key Features
        </Typography>
        <Stack spacing={2.5}>
          {VACCEL_FEATURES.map((feature, index) => (
            <Stack key={index} direction="row" spacing={2} alignItems="flex-start">
              <Box
                sx={[
                  (theme) => ({
                    width: 40,
                    height: 40,
                    display: 'flex',
                    flexShrink: 0,
                    borderRadius: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: varAlpha(theme.vars.palette.primary.mainChannel, 0.08),
                    color: 'primary.main',
                  }),
                ]}
              >
                <Iconify icon={feature.icon} width={20} />
              </Box>
              <Stack spacing={0.5}>
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

  const renderSupportedOperations = () => (
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
          }),
        ]}
      >
        <Typography variant="h4" sx={{ mb: 3 }}>
          Supported Operations
        </Typography>
        <Stack spacing={2}>
          {SUPPORTED_OPERATIONS.map((operation, index) => (
            <Stack key={index} direction="row" spacing={1.5} alignItems="center">
              <Iconify
                icon="eva:checkmark-circle-2-fill"
                width={20}
                sx={{ color: 'success.main', flexShrink: 0 }}
              />
              <Typography variant="body2">{operation}</Typography>
            </Stack>
          ))}
        </Stack>
      </Box>
    </Grid>
  );

  const renderPrinciples = () => (
    <Box
      component={m.div}
      variants={varFade('inUp', { distance: 24 })}
      sx={[
        (theme) => ({
          mt: 4,
          p: 4,
          borderRadius: 2,
          textAlign: 'center',
          bgcolor: varAlpha(theme.vars.palette.info.mainChannel, 0.08),
          border: `1px solid ${varAlpha(theme.vars.palette.info.mainChannel, 0.12)}`,
        }),
      ]}
    >
      <Typography variant="body1" sx={{ color: 'text.secondary' }}>
        vAccel prioritizes <strong>simplicity</strong>, <strong>flexibility</strong>,{' '}
        <strong>security</strong>, <strong>performance</strong>, and{' '}
        <strong>resource efficiency</strong> — enabling true device sharing in short-lived
        serverless functions without vendor lock-in.
      </Typography>
    </Box>
  );

  return (
    <Box
      id="vaccel"
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
        {renderImage()}
        <Grid container spacing={3}>
          {renderKeyFeatures()}
          {renderSupportedOperations()}
        </Grid>
        {renderPrinciples()}
      </Container>
    </Box>
  );
}
