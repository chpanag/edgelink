import Stack from '@mui/material/Stack';

import { BackToTopButton } from 'src/components/animate/back-to-top-button';
import { ScrollProgress, useScrollProgress } from 'src/components/animate/scroll-progress';

import { ProductHero } from '../product-hero';
import { ProductFooter } from '../product-footer';
import { ProductVaccel } from '../product-vaccel';
import { ProductContact } from '../product-contact';
import { ProductProblem } from '../product-problem';
import { ProductSecurity } from '../product-security';
import { ProductSolution } from '../product-solution';
import { ProductUseCases } from '../product-use-cases';
import { ProductHowItWorks } from '../product-how-it-works';
import { ProductArchitecture } from '../product-architecture';
import { ProductCapabilities } from '../product-capabilities';

// ----------------------------------------------------------------------

export function ProductView() {
  const pageProgress = useScrollProgress();

  return (
    <>
      <ScrollProgress
        variant="linear"
        progress={pageProgress.scrollYProgress}
        sx={[(theme) => ({ position: 'fixed', zIndex: theme.zIndex.appBar + 1 })]}
      />

      <BackToTopButton />

      <ProductHero />

      <Stack sx={{ position: 'relative', bgcolor: 'background.default' }}>
        <ProductProblem />

        <ProductSolution />

        <ProductCapabilities />

        <ProductArchitecture />

        <ProductVaccel />

        <ProductHowItWorks />

        <ProductSecurity />

        <ProductUseCases />

        <ProductContact />

        <ProductFooter />
      </Stack>
    </>
  );
}
