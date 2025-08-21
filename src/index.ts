// Components
export { Html } from './components/Html';
export { Head } from './components/Head';
export { Body } from './components/Body';
export { Title } from './components/Title';
export { Preview } from './components/Preview';
export { Container } from './components/Container';
export { Section } from './components/Section';
export { Column } from './components/Column';
export { Text } from './components/Text';
export { Button } from './components/Button';
export { Image } from './components/Image';
export { Hr } from './components/Hr';
export { Heading } from './components/Heading';

// React-email additional components
export { Font } from './components/Font';
export { Link } from './components/Link';
export { Markdown } from './components/Markdown';
export { Row } from './components/Row';

// E-commerce components
export { OneProduct } from './components/OneProduct';
export { ProductGrid } from './components/ProductGrid';
export { CartSummary } from './components/CartSummary';
export { ImageGallery } from './components/ImageGallery';
export { PricingTable } from './components/PricingTable';
export { ThreeCardsRow } from './components/ThreeCardsRow';
export { OneProductLeft } from './components/OneProductLeft';
export { FourCardsRow } from './components/FourCardsRow';
export { AlternatingProductRow } from './components/AlternatingProductRow';

// Types
export type {
  BaseComponentProps,
  StyleProps,
  ButtonProps,
  ContainerProps,
  TextProps,
  ImageProps,
  SectionProps,
  ColumnProps,
  HrProps,
  HeadingProps,
  HtmlProps,
  BodyProps,
  HeadProps,
  TitleProps,
  PreviewProps,
  // React-email additional types
  FontProps,
  LinkProps,
  MarkdownProps,
  RowProps,
  // E-commerce types
  OneProductProps,
  ProductGridProps,
  CartSummaryProps,
  ImageGalleryProps,
  PricingTableProps,
  ThreeCardsRowProps,
  OneProductLeftProps,
  FourCardsRowProps,
  AlternatingProductRowProps
} from './types';

// Utilities
export { formatAttributes, kebabCase, formatStyleProps, renderChildren } from './utils';

// Configuration
export type { BrandConfig } from './config';
export { soitalianConfig } from './config';

// New Email Templates using MJML components
export { createProductCatalogEmail, type ProductCatalogConfig } from './templates/product-catalog';
export { createBestsellersEmail, type BestsellersConfig } from './templates/bestsellers-showcase';
export { createGridLayoutEmail, type GridLayoutConfig } from './templates/grid-layout';
export { createSingleProductEmail, type SingleProductConfig } from './templates/single-product';
export { createProductGalleryEmail, type ProductGalleryConfig } from './templates/product-gallery';
export { createAbandonedCartEmail, type AbandonedCartConfig } from './templates/abandoned-cart';
export { createPhotoGalleryEmail, type PhotoGalleryConfig } from './templates/photo-gallery';
export { createPricingPlansEmail, type PricingPlansConfig } from './templates/pricing-plans';