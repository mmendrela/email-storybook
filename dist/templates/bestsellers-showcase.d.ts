import { BrandConfig } from '../config';
export interface BestsellersConfig {
    customerName?: string;
    urgencyText?: string;
    promoCode?: string;
    validUntil?: string;
}
export declare function createBestsellersEmail(config: BrandConfig, params?: BestsellersConfig): string;
