import { ProductView } from 'src/sections/product/view';

// ----------------------------------------------------------------------

const metadata = {
  title: 'EdgeLink - Bridge Legacy Assets to the Cloud-Edge Continuum',
  description:
    'EdgeLink is a smart edge gateway that connects legacy chargers, inverters and meters to cloud-native systems. Upgrade without replacing hardware.',
};

export default function Page() {
  return (
    <>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />

      <ProductView />
    </>
  );
}
