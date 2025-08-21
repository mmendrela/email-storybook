import { BrandConfig } from '../config';
export interface PhotoGalleryConfig {
    customerName?: string;
    galleryTheme?: string;
    eventName?: string;
    photographerName?: string;
    socialHashtag?: string;
}
export declare function createPhotoGalleryEmail(config: BrandConfig, params?: PhotoGalleryConfig): string;
