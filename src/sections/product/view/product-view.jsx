import Stack from '@mui/material/Stack';

import { BackToTopButton } from 'src/components/animate/back-to-top-button';
import { ScrollProgress, useScrollProgress } from 'src/components/animate/scroll-progress';

import { ProductHero } from '../product-hero';
import { ProductProblem } from '../product-problem';
import { ProductContact } from '../product-contact';
import { ProductSolution } from '../product-solution';
import { ProductUseCases } from '../product-use-cases';
import { ProductCapabilities } from '../product-capabilities';
import { ProductArchitecture } from '../product-architecture';
import { ProductHowItWorks } from '../product-how-it-works';
import { ProductSecurity } from '../product-security';
import { ProductFooter } from '../product-footer';

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

        <ProductHowItWorks />

        <ProductSecurity />

        <ProductUseCases />

        <ProductContact />

        <ProductFooter />
      </Stack>
    </>
  );
}
