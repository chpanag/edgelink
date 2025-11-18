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

const LEGACY_ISSUES = [
  {
    icon: 'eva:flash-outline',
    title: 'RS-485 / RS-232',
    description: 'Serial data interfaces',
  },
  {
    icon: 'eva:pulse-outline',
    title: 'kWh Pulses',
    description: 'Energy meter outputs',
  },
  {
    icon: 'eva:trending-up-outline',
    title: 'Analogue Signals',
    description: 'Current/voltage loops',
  },
  {
    icon: 'eva:bulb-outline',
    title: 'LED Patterns',
    description: 'Visual blinking indicators',
  },
  {
    icon: 'eva:lock-outline',
    title: 'Proprietary Protocols',
    description: 'Vendor-specific or undocumented',
  },
];

const MISSING_FEATURES = [
  {
    icon: 'eva:cloud-outline',
    label: 'Cloud-based optimisation',
  },
  {
    icon: 'eva:car-outline',
    label: 'V2G and flexibility markets',
  },
  {
    icon: 'eva:copy-outline',
    label: 'Digital twins',
  },
  {
    icon: 'eva:activity-outline',
    label: 'Predictive maintenance',
  },
  {
    icon: 'eva:globe-2-outline',
    label: 'Unified data spaces',
  },
];

export function ProductProblem({ sx, ...other }) {
  const renderTitle = () => (
    <Box
      component={m.div}
      variants={varFade('inUp', { distance: 24 })}
      sx={{ textAlign: 'center', mb: { xs: 5, md: 8 } }}
    >
      <Typography
        variant="overline"
        sx={{
          color: 'error.main',
          mb: 2,
          display: 'block',
          fontWeight: 600,
          letterSpacing: 1,
        }}
      >
        The Challenge
      </Typography>
      <Typography variant="h2" component="h2" sx={{ mb: 3 }}>
        The Problem
      </Typography>
      <Typography
        variant="h5"
        sx={{
          maxWidth: 800,
          mx: 'auto',
          color: 'text.secondary',
          fontWeight: 400,
        }}
      >
        Billions in legacy energy infrastructure trapped in the analog era
      </Typography>
    </Box>
  );

  const renderDescription = () => (
    <Box
      component={m.div}
      variants={varFade('inUp', { distance: 24 })}
      sx={[
        (theme) => ({
          mb: 6,
          p: 4,
          borderRadius: 3,
          textAlign: 'center',
          bgcolor: varAlpha(theme.vars.palette.warning.mainChannel, 0.08),
          border: `1px solid ${varAlpha(theme.vars.palette.warning.mainChannel, 0.2)}`,
        }),
      ]}
    >
      <Typography
        variant="h6"
        sx={{
          maxWidth: 700,
          mx: 'auto',
          color: 'text.primary',
          lineHeight: 1.8,
        }}
      >
        Charging stations, solar inverters, and energy meters installed over the last{' '}
        <Box component="span" sx={{ color: 'warning.main', fontWeight: 700 }}>
          10–20 years
        </Box>{' '}
        still lack IP-based connectivity, outputting data through outdated interfaces:
      </Typography>
    </Box>
  );

  const renderLegacyOutputs = () => (
    <Box sx={{ mb: 8 }}>
      <Typography
        variant="h4"
        sx={{ textAlign: 'center', mb: 4, fontWeight: 600 }}
      >
        Legacy Output Methods
      </Typography>
      <Grid container spacing={3}>
        {LEGACY_ISSUES.map((issue, index) => (
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
                  border: `2px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}`,
                  transition: theme.transitions.create(['transform', 'box-shadow', 'border-color']),
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: theme.customShadows.z8,
                    borderColor: varAlpha(theme.vars.palette.warning.mainChannel, 0.4),
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
                    borderRadius: 2,
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: varAlpha(theme.vars.palette.warning.mainChannel, 0.12),
                    color: 'warning.main',
                  }),
                ]}
              >
                <Iconify icon={issue.icon} width={28} />
              </Box>
              <Box>
                <Typography variant="h6" sx={{ mb: 0.5 }}>
                  {issue.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {issue.description}
                </Typography>
              </Box>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  const renderMissingFeatures = () => (
    <Box
      component={m.div}
      variants={varFade('inUp', { distance: 24 })}
      sx={[
        (theme) => ({
          p: 5,
          borderRadius: 3,
          bgcolor: varAlpha(theme.vars.palette.error.mainChannel, 0.04),
          border: `2px dashed ${varAlpha(theme.vars.palette.error.mainChannel, 0.2)}`,
        }),
      ]}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: 'center',
          mb: 1,
          fontWeight: 600,
        }}
      >
        Critical Capabilities Missing
      </Typography>
      <Typography
        variant="body1"
        sx={{
          textAlign: 'center',
          mb: 4,
          color: 'text.secondary',
        }}
      >
        These devices cannot participate in modern energy systems:
      </Typography>
      <Grid container spacing={2} sx={{ maxWidth: 900, mx: 'auto' }}>
        {MISSING_FEATURES.map((feature, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6 }}>
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              sx={[
                (theme) => ({
                  p: 2,
                  borderRadius: 1.5,
                  bgcolor: varAlpha(theme.vars.palette.error.mainChannel, 0.08),
                }),
              ]}
            >
              <Iconify icon={feature.icon} width={24} sx={{ color: 'error.main', flexShrink: 0 }} />
              <Typography variant="body2" sx={{ fontWeight: 500 }}>
                {feature.label}
              </Typography>
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Box>
  );

  const renderConclusion = () => (
    <Box
      component={m.div}
      variants={varFade('inUp', { distance: 24 })}
      sx={[
        (theme) => ({
          mt: 8,
          p: 5,
          borderRadius: 3,
          textAlign: 'center',
          bgcolor: varAlpha(theme.vars.palette.grey['500Channel'], 0.04),
          border: `2px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}`,
        }),
      ]}
    >
      <Box
        sx={[
          (theme) => ({
            width: 64,
            height: 64,
            mx: 'auto',
            mb: 3,
            display: 'flex',
            borderRadius: '50%',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: varAlpha(theme.vars.palette.error.mainChannel, 0.12),
          }),
        ]}
      >
        <Iconify icon="eva:alert-triangle-outline" width={32} color="error.main" />
      </Box>
      <Typography
        variant="h4"
        sx={{
          mb: 2,
          fontWeight: 700,
          color: 'text.primary',
        }}
      >
        The Cost of Replacement
      </Typography>
      <Typography
        variant="h6"
        sx={{
          maxWidth: 700,
          mx: 'auto',
          fontWeight: 400,
          color: 'text.secondary',
          lineHeight: 1.8,
        }}
      >
        Replacing this infrastructure is{' '}
        <Box component="span" sx={{ color: 'error.main', fontWeight: 600 }}>
          expensive
        </Box>
        ,{' '}
        <Box component="span" sx={{ color: 'error.main', fontWeight: 600 }}>
          disruptive
        </Box>
        , and{' '}
        <Box component="span" sx={{ color: 'error.main', fontWeight: 600 }}>
          environmentally wasteful
        </Box>
        .
      </Typography>
    </Box>
  );

  return (
    <Box
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
        {renderDescription()}
        {renderLegacyOutputs()}
        {renderMissingFeatures()}
        {renderConclusion()}
      </Container>
    </Box>
  );
}
