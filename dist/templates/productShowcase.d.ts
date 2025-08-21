import { BrandConfig } from '../config';
export declare function createProductShowcaseEmail(config: BrandConfig, params?: {
    featuredProduct?: string;
    collectionTitle?: string;
    galleryLayout?: 'grid-2x2' | 'horizontal' | 'vertical' | 'three-columns';
}): string;
