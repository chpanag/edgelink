import { m } from 'framer-motion';
import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/global-config';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

export function ProductContact({ sx, ...other }) {
  const renderAbout = () => (
    <Grid
      component={m.div}
      variants={varFade('inLeft', { distance: 24 })}
      size={{ xs: 12, lg: 6 }}
    >
      <Box
        sx={[
          (theme) => ({
            p: 3,
            height: 1,
            borderRadius: 2,
            bgcolor: varAlpha(theme.vars.palette.primary.mainChannel, 0.08),
            border: `2px solid ${varAlpha(theme.vars.palette.primary.mainChannel, 0.16)}`,
          }),
        ]}
      >
        <Stack spacing={1.5}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mb: 0.5,
            }}
          >
            <Box
              component="img"
              src={`${CONFIG.assetsDir}/assets/images/edgelink/nubificus-logo.png`}
              alt="Nubificus Logo"
              sx={{
                width: '100%',
                maxWidth: 120,
                height: 'auto',
              }}
            />
          </Box>
          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
              lineHeight: 1.5,
              textAlign: 'justify',
            }}
          >
            Nubificus specialises in cloud-native technologies for the <strong>edge and far edge</strong>,
            with deep expertise in unikernels, virtualization, and high-performance compute continuum
            systems. We design minimal-footprint, secure, and composable runtime environments tailored
            for edge workloads.
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: 'text.secondary',
              lineHeight: 1.5,
              textAlign: 'justify',
            }}
          >
            EdgeLink continues this mission by transforming legacy energy assets into interoperable,
            cloud-native participants in modern IoT ecosystems.
          </Typography>
        </Stack>
      </Box>
    </Grid>
  );

  const renderCTA = () => (
    <Grid
      component={m.div}
      variants={varFade('inRight', { distance: 24 })}
      size={{ xs: 12, lg: 6 }}
    >
      <Box
        sx={[
          (theme) => ({
            p: 3,
            height: 1,
            borderRadius: 2,
            textAlign: 'center',
            bgcolor: varAlpha(theme.vars.palette.primary.mainChannel, 0.08),
            border: `2px solid ${varAlpha(theme.vars.palette.primary.mainChannel, 0.16)}`,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }),
        ]}
      >
      <Typography variant="h5" sx={{ mb: 1.5 }}>
        Get EdgeLink
      </Typography>
      <Typography
        variant="body2"
        sx={{
          mb: 1.5,
          fontWeight: 500,
          mx: 'auto',
          color: 'text.secondary',
        }}
      >
        Want to upgrade legacy chargers, meters or inverters — without replacing them?
      </Typography>
      <Typography
        variant="body2"
        sx={{
          mb: 2,
          mx: 'auto',
          color: 'text.primary',
        }}
      >
        Contact us for access to EdgeLink development kits, integration support and pilot
        deployments.
      </Typography>

      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={2}
        sx={{ justifyContent: 'center', mb: 2 }}
      >
        <Button
          variant="contained"
          color="primary"
          href="mailto:info@nubificus.co.uk"
          startIcon={<Iconify icon="eva:email-fill" />}
        >
          Email Us
        </Button>
      </Stack>

      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={2}
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          pt: 1.5,
          borderTop: (theme) => `1px dashed ${varAlpha(theme.vars.palette.grey['500Channel'], 0.2)}`,
        }}
      >
        <Stack direction="row" spacing={1} alignItems="center">
          <Iconify icon="eva:email-outline" width={20} />
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            info@nubificus.co.uk
          </Typography>
        </Stack>
        <Stack direction="row" spacing={1} alignItems="center">
          <Iconify icon="eva:globe-outline" width={20} />
          <Typography
            component="a"
            href="https://nubificus.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            variant="body2"
            sx={{
              color: 'text.secondary',
              textDecoration: 'none',
              '&:hover': { color: 'primary.main' },
            }}
          >
            nubificus.co.uk
          </Typography>
        </Stack>
        <Stack direction="row" spacing={1} alignItems="center">
          <Iconify icon="eva:github-outline" width={20} />
          <Typography
            component="a"
            href="https://github.com/nubificus"
            target="_blank"
            rel="noopener noreferrer"
            variant="body2"
            sx={{
              color: 'text.secondary',
              textDecoration: 'none',
              '&:hover': { color: 'primary.main' },
            }}
          >
            github.com/nubificus
          </Typography>
        </Stack>
      </Stack>
      </Box>
    </Grid>
  );

  return (
    <Box
      id="contact"
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
        <Grid container spacing={4}>
          {renderAbout()}
          {renderCTA()}
        </Grid>
      </Container>
    </Box>
  );
}
