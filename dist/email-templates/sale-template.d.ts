import { BrandConfig } from '../config';
export interface SaleConfig {
    discountPercent: number;
    saleTitle: string;
    promoCode?: string;
    validUntil: string;
    urgencyMessage?: string;
}
export declare const createSaleEmail: (config: BrandConfig, saleConfig: SaleConfig) => string;
