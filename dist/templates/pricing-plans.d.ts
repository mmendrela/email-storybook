import { BrandConfig } from '../config';
export interface PricingPlansConfig {
    customerName?: string;
    programName?: string;
    launchDiscount?: number;
    earlyBirdCode?: string;
    validUntil?: string;
    specialOffer?: boolean;
}
export declare function createPricingPlansEmail(config: BrandConfig, params?: PricingPlansConfig): string;
