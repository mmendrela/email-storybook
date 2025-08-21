export interface BaseComponentProps {
  children?: string | any[] | any;
}

export interface StyleProps {
  backgroundColor?: string;
  border?: string;
  borderRadius?: string;
  color?: string;
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: string;
  height?: string;
  lineHeight?: string;
  margin?: string;
  padding?: string;
  textAlign?: 'left' | 'center' | 'right' | 'justify';
  width?: string;
}

export interface ButtonProps extends BaseComponentProps, StyleProps {
  href?: string;
  target?: '_blank' | '_self';
}

export interface ContainerProps extends BaseComponentProps, StyleProps {
  maxWidth?: string;
}

export interface TextProps extends BaseComponentProps, StyleProps {
  fontStyle?: string;
}

export interface ImageProps extends StyleProps {
  src: string;
  alt?: string;
  title?: string;
}

export interface SectionProps extends BaseComponentProps, StyleProps {
  fullWidth?: boolean;
  backgroundUrl?: string;
}

export interface ColumnProps extends BaseComponentProps, StyleProps {
  width?: string;
}

export interface HrProps extends StyleProps {
  borderColor?: string;
}

export interface HeadingProps extends BaseComponentProps, StyleProps {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export interface HtmlProps extends BaseComponentProps {
  lang?: string;
}

export interface BodyProps extends BaseComponentProps, StyleProps {}

export interface HeadProps extends BaseComponentProps {}

export interface TitleProps extends BaseComponentProps {}

export interface PreviewProps extends BaseComponentProps {}

// React-email additional components
export interface FontProps extends BaseComponentProps {
  fontFamily: string;
  fallbackFontFamily?: string[];
  webFont?: {
    url: string;
    format: string;
  };
  fontWeight?: string;
  fontStyle?: string;
}

export interface LinkProps extends BaseComponentProps, StyleProps {
  href: string;
  target?: '_blank' | '_self';
}

export interface MarkdownProps extends BaseComponentProps, StyleProps {
  markdownCustomStyles?: Record<string, any>;
  markdownContainerStyles?: Record<string, any>;
}

export interface RowProps extends BaseComponentProps, StyleProps {}

// Advanced E-commerce Components (from react.email)
export interface OneProductProps extends StyleProps {
  product: {
    name: string;
    description?: string;
    price: string;
    originalPrice?: string;
    image: string;
    href: string;
  };
  buttonText?: string;
  showDescription?: boolean;
}

export interface ProductGridProps extends BaseComponentProps, StyleProps {
  title?: string;
  products: Array<{
    name: string;
    price: string;
    image: string;
    href: string;
    description?: string;
  }>;
  columns?: 2 | 3 | 4;
  showPrices?: boolean;
}

export interface CartSummaryProps extends BaseComponentProps, StyleProps {
  title?: string;
  items: Array<{
    name: string;
    image: string;
    quantity: number;
    price: string;
  }>;
  subtotal: string;
  shipping?: string;
  tax?: string;
  total: string;
  checkoutUrl: string;
  checkoutText?: string;
}

// Gallery Components (from react.email)
export interface ImageGalleryProps extends BaseComponentProps, StyleProps {
  images: Array<{
    src: string;
    alt: string;
    href?: string;
  }>;
  layout: 'grid-2x2' | 'horizontal' | 'vertical' | 'three-columns';
  rounded?: boolean;
}

// Pricing Components (from react.email)
export interface PricingTableProps extends BaseComponentProps, StyleProps {
  plans: Array<{
    name: string;
    price: string;
    period?: string;
    features: string[];
    buttonText: string;
    buttonUrl: string;
    emphasized?: boolean;
    badge?: string;
  }>;
  layout?: 'two-tier' | 'simple';
}

export interface SimplePricingProps extends BaseComponentProps, StyleProps {
  title: string;
  price: string;
  period?: string;
  features: string[];
  buttonText: string;
  buttonUrl: string;
  trialText?: string;
  badge?: string;
}

// Additional E-commerce Components
export interface ThreeCardsRowProps extends BaseComponentProps, StyleProps {
  title?: string;
  products: Array<{
    name: string;
    price: string;
    image: string;
    href: string;
    description?: string;
    originalPrice?: string;
  }>;
  buttonText?: string;
}

export interface OneProductLeftProps extends BaseComponentProps, StyleProps {
  product: {
    name: string;
    description?: string;
    price: string;
    originalPrice?: string;
    image: string;
    href: string;
  };
  buttonText?: string;
  showDescription?: boolean;
  imageWidth?: string;
}

export interface FourCardsRowProps extends BaseComponentProps, StyleProps {
  title?: string;
  products: Array<{
    name: string;
    price: string;
    image: string;
    href: string;
    description?: string;
    originalPrice?: string;
  }>;
  buttonText?: string;
  compactMode?: boolean;
}

export interface AlternatingProductRowProps extends BaseComponentProps, StyleProps {
  title?: string;
  products: Array<{
    name: string;
    price: string;
    image: string;
    href: string;
    description?: string;
    originalPrice?: string;
  }>;
  buttonText?: string;
  imageWidth?: string;
  showDescription?: boolean;
}