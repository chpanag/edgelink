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

const USE_CASES = [
  {
    icon: 'eva:flash-outline',
    title: 'Retrofitting legacy equipment',
    description: 'Extract energy, current, voltage, state, error codes.',
    color: 'primary',
  },
  {
    icon: 'eva:sun-outline',
    title: 'Integrating solar inverters without IP',
    description: 'Expose production data and status to cloud systems.',
    color: 'warning',
  },
  {
    icon: 'eva:activity-outline',
    title: 'Upgrading legacy smart meters',
    description: 'Convert pulse or LED outputs into structured IoT metrics.',
    color: 'info',
  },
  {
    icon: 'eva:trending-up-outline',
    title: 'Edge ML inference on the edge',
    description: 'Hardware-accelerated inference using vAccel.',
    color: 'success',
  },
  {
    icon: 'eva:cube-outline',
    title: 'Industrial asset monitoring',
    description: 'Serial-based sensors, legacy PLCs, environmental probes.',
    color: 'error',
  },
  {
    icon: 'eva:settings-2-outline',
    title: 'Legacy HVAC systems',
    description: 'Connect building automation equipment to modern IoT platforms.',
    color: 'secondary',
  }
];

export function ProductUseCases({ sx, ...other }) {
  const renderTitle = () => (
    <Box
      component={m.div}
      variants={varFade('inUp', { distance: 24 })}
      sx={{ textAlign: 'center', mb: { xs: 5, md: 8 } }}
    >
      <Typography variant="overline" sx={{ color: 'text.secondary', mb: 2, display: 'block' }}>
        Real-World Applications
      </Typography>
      <Typography variant="h2" component="h2">
        Use Cases
      </Typography>
    </Box>
  );

  const renderUseCases = () => (
    <Grid container spacing={3} sx={{ mb: 10 }}>
      {USE_CASES.map((useCase, index) => (
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
                  bgcolor: varAlpha(theme.vars.palette[useCase.color].mainChannel, 0.08),
                  color: `${useCase.color}.main`,
                }),
              ]}
            >
              <Iconify icon={useCase.icon} width={28} />
            </Box>
            <Stack spacing={1}>
              <Typography variant="h6">{useCase.title}</Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {useCase.description}
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      ))}
    </Grid>
  );

  return (
    <Box
      id="use-cases"
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
        {renderUseCases()}
      </Container>
    </Box>
  );
}
