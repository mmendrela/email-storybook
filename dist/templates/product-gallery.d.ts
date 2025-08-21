import { BrandConfig } from '../config';
export interface ProductGalleryConfig {
    customerName?: string;
    galleryTitle?: string;
    seasonTheme?: string;
    showPricing?: boolean;
    ctaText?: string;
}
export declare function createProductGalleryEmail(config: BrandConfig, params?: ProductGalleryConfig): string;
