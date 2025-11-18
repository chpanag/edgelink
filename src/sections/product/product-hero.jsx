import { m } from 'framer-motion';
import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';
import { varFade, MotionContainer } from 'src/components/animate';

// ----------------------------------------------------------------------

const motionProps = {
  variants: varFade('inUp', { distance: 24 }),
};

export function ProductHero({ sx, ...other }) {

  const renderHeading = () => (
    <m.div {...motionProps}>
      <Box
        component="h1"
        sx={[
          (theme) => ({
            my: 0,
            mx: 'auto',
            maxWidth: 880,
            typography: 'h2',
            textAlign: 'center',
            fontFamily: theme.typography.fontSecondaryFamily,
            [theme.breakpoints.up('lg')]: {
              fontSize: theme.typography.pxToRem(64),
              lineHeight: '80px',
            },
          }),
        ]}
      >
        Bridge Legacy Energy Assets to the{' '}
        <Box
          component="span"
          sx={[
            (theme) => ({
              ...theme.mixins.textGradient(
                `90deg, ${theme.vars.palette.primary.main} 0%, ${theme.vars.palette.info.main} 100%`
              ),
            }),
          ]}
        >
          Cloud-Edge Continuum
        </Box>
      </Box>
    </m.div>
  );

  const renderSubheading = () => (
    <m.div {...motionProps}>
      <Typography
        variant="h5"
        sx={[
          (theme) => ({
            mx: 'auto',
            maxWidth: 720,
            textAlign: 'center',
            color: 'primary.contrastText',
            fontWeight: 400,
            opacity: 0.9,
            [theme.breakpoints.up('lg')]: { fontSize: 24, lineHeight: '36px' },
          }),
        ]}
      >
        Modernise Legacy Infrastructure. Securely. Cloud-Natively.
      </Typography>
    </m.div>
  );

  const renderDescription = () => (
    <m.div {...motionProps}>
      <Typography
        variant="body1"
        sx={{
          mx: 'auto',
          maxWidth: 800,
          textAlign: 'center',
          color: 'primary.contrastText',
        }}
      >
        <strong>EdgeLink</strong> is a smart edge gateway that connects legacy chargers, inverters
        and meters to cloud-native systems. It extracts signals from non-IP and partially digital
        devices and exposes them using modern IoT protocols such as <strong>MQTT</strong>,{' '}
        <strong>OPC UA</strong> and <strong>REST/HTTP</strong>.
      </Typography>
    </m.div>
  );

  const renderFeatures = () => (
    <m.div {...motionProps}>
      <Stack
        spacing={2}
        sx={{
          mx: 'auto',
          maxWidth: 720,
          color: 'primary.contrastText',
          typography: 'body2',
        }}
      >
        <Stack direction="row" spacing={1} alignItems="center" justifyContent="center">
          <Iconify icon="eva:checkmark-circle-2-fill" sx={{ color: 'common.white' }} />
          <Typography variant="body2" sx={{ color: 'primary.contrastText' }}>
            Upgrade without replacing hardware
          </Typography>
        </Stack>
        <Stack direction="row" spacing={1} alignItems="center" justifyContent="center">
          <Iconify icon="eva:checkmark-circle-2-fill" sx={{ color: 'common.white' }} />
          <Typography variant="body2" sx={{ color: 'primary.contrastText' }}>
            Deploy anywhere: Raspberry Pi, ESP32 or similar SBC/MCU platforms
          </Typography>
        </Stack>
        <Stack direction="row" spacing={1} alignItems="center" justifyContent="center">
          <Iconify icon="eva:checkmark-circle-2-fill" sx={{ color: 'common.white' }} />
          <Typography variant="body2" sx={{ color: 'primary.contrastText' }}>
            Secure OTA updates with attestation
          </Typography>
        </Stack>
        <Stack direction="row" spacing={1} alignItems="center" justifyContent="center">
          <Iconify icon="eva:checkmark-circle-2-fill" sx={{ color: 'common.white' }} />
          <Typography variant="body2" sx={{ color: 'primary.contrastText' }}>
            Cloud-edge orchestration ready
          </Typography>
        </Stack>
      </Stack>
    </m.div>
  );

  const renderButtons = () => (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: { xs: 1.5, sm: 2 },
      }}
    >
      {/*<m.div {...motionProps}>*/}
      {/*  <Button*/}
      {/*    color="primary"*/}
      {/*    size="large"*/}
      {/*    variant="contained"*/}
      {/*    href="mailto:info@nubificus.co.uk"*/}
      {/*    startIcon={<Iconify width={24} icon="eva:email-fill" />}*/}
      {/*    sx={{ height: 52 }}*/}
      {/*  >*/}
      {/*    Contact Us*/}
      {/*  </Button>*/}
      {/*</m.div>*/}

      {/*<m.div {...motionProps}>*/}
      {/*  <Button*/}
      {/*    color="inherit"*/}
      {/*    size="large"*/}
      {/*    variant="outlined"*/}
      {/*    href="https://github.com/nubificus"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*    startIcon={<Iconify width={24} icon="eva:github-fill" />}*/}
      {/*    sx={{ height: 52, borderColor: 'currentColor' }}*/}
      {/*  >*/}
      {/*    View on GitHub*/}
      {/*  </Button>*/}
      {/*</m.div>*/}
    </Box>
  );

  return (
    <Box
      component="section"
      sx={[
        (theme) => ({
          position: 'relative',
          py: { xs: 8, md: 12 },
          bgcolor: '#14247b',
          overflow: 'hidden',
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            width: { xs: '100%', md: '50%' },
            backgroundImage: 'url(/assets/images/edgelink/cloud-storage-remote-web-server-hosting-information-warehouse-file-access-connection/hero.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.3,
            zIndex: 0,
          },
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container
        component={MotionContainer}
        sx={{
          py: 3,
          gap: 5,
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <Stack spacing={3} sx={{ textAlign: 'center', color: 'primary.contrastText' }}>
          {renderHeading()}
          {renderSubheading()}
        </Stack>

        {renderDescription()}
        {renderFeatures()}
        {renderButtons()}
      </Container>
    </Box>
  );
}
