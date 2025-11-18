import { m } from 'framer-motion';
import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

export function ProductContact({ sx, ...other }) {
  const renderAbout = () => (
    <Box
      component={m.div}
      variants={varFade('inUp', { distance: 24 })}
      sx={[
        (theme) => ({
          mb: 8,
          p: 5,
          borderRadius: 2,
          textAlign: 'center',
          bgcolor: varAlpha(theme.vars.palette.grey['500Channel'], 0.04),
          border: `1px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.08)}`,
        }),
      ]}
    >
      <Typography variant="h3" sx={{ mb: 3 }}>
        About Nubificus
      </Typography>
      <Typography
        variant="body1"
        sx={{
          maxWidth: 800,
          mx: 'auto',
          color: 'text.secondary',
          lineHeight: 1.8,
        }}
      >
        Nubificus specialises in cloud-native technologies for the <strong>edge and far edge</strong>,
        with deep expertise in unikernels, virtualization, and high-performance compute continuum
        systems. We design minimal-footprint, secure, and composable runtime environments tailored
        for edge workloads.
        <br />
        <br />
        EdgeLink continues this mission by transforming legacy energy assets into interoperable,
        cloud-native participants in modern IoT ecosystems.
      </Typography>
    </Box>
  );

  const renderCTA = () => (
    <Box
      component={m.div}
      variants={varFade('inUp', { distance: 24 })}
      sx={[
        (theme) => ({
          p: 6,
          borderRadius: 2,
          textAlign: 'center',
          bgcolor: varAlpha(theme.vars.palette.primary.mainChannel, 0.08),
          border: `2px solid ${varAlpha(theme.vars.palette.primary.mainChannel, 0.16)}`,
        }),
      ]}
    >
      <Typography variant="h3" sx={{ mb: 2 }}>
        Get EdgeLink
      </Typography>
      <Typography
        variant="h6"
        sx={{
          mb: 4,
          fontWeight: 400,
          maxWidth: 700,
          mx: 'auto',
          color: 'text.secondary',
        }}
      >
        Want to upgrade legacy chargers, meters or inverters — without replacing them?
      </Typography>
      <Typography
        variant="body1"
        sx={{
          mb: 4,
          maxWidth: 650,
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
        sx={{ justifyContent: 'center', mb: 4 }}
      >
        <Button
          size="large"
          variant="contained"
          color="primary"
          href="mailto:info@nubificus.co.uk"
          startIcon={<Iconify icon="eva:email-fill" />}
          sx={{ minWidth: 200 }}
        >
          Email Us
        </Button>
        <Button
          size="large"
          variant="outlined"
          color="primary"
          href="https://nubificus.co.uk"
          target="_blank"
          rel="noopener noreferrer"
          startIcon={<Iconify icon="eva:external-link-outline" />}
          sx={{ minWidth: 200 }}
        >
          Visit Website
        </Button>
      </Stack>

      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={3}
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          pt: 3,
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
        {renderAbout()}
        {renderCTA()}
      </Container>
    </Box>
  );
}
