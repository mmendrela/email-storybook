import { BrandConfig } from '../config';
export declare function createSeasonalNewsletterEmail(config: BrandConfig, params?: {
    season?: string;
    seasonEmoji?: string;
    mainMessage?: string;
    featuredProducts?: number;
    includeSubscriptionOffer?: boolean;
    galleryStyle?: 'grid-2x2' | 'horizontal' | 'three-columns';
    newsletterMonth?: string;
}): string;
