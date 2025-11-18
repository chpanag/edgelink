import { varAlpha } from 'minimal-shared/utils';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function ProductFooter({ sx, ...other }) {
  return (
    <Box
      component="footer"
      sx={[
        (theme) => ({
          py: 4,
          borderTop: `1px solid ${varAlpha(theme.vars.palette.grey['500Channel'], 0.12)}`,
          bgcolor: 'background.default',
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...other}
    >
      <Container>
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <Box
              component="img"
              src="/assets/images/edgelink/nubificus-logo.svg"
              alt="Nubificus Logo"
              sx={{ height: 24, width: 'auto' }}
            />
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              © {new Date().getFullYear()} EdgeLink by Nubificus. All rights reserved.
            </Typography>
          </Stack>

          <Stack direction="row" spacing={3} alignItems="center">
            <Typography
              component="a"
              href="https://nubificus.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              variant="body2"
              sx={{
                color: 'text.secondary',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
                '&:hover': { color: 'primary.main' },
              }}
            >
              <Iconify icon="eva:globe-outline" width={18} />
              nubificus.co.uk
            </Typography>
            <Typography
              component="a"
              href="https://github.com/nubificus"
              target="_blank"
              rel="noopener noreferrer"
              variant="body2"
              sx={{
                color: 'text.secondary',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
                '&:hover': { color: 'primary.main' },
              }}
            >
              <Iconify icon="eva:github-outline" width={18} />
              GitHub
            </Typography>
            <Typography
              component="a"
              href="mailto:info@nubificus.co.uk"
              variant="body2"
              sx={{
                color: 'text.secondary',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
                '&:hover': { color: 'primary.main' },
              }}
            >
              <Iconify icon="eva:email-outline" width={18} />
              Contact
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
