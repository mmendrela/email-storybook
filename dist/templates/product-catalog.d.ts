import { BrandConfig } from '../config';
export interface ProductCatalogConfig {
    customerName?: string;
    season?: string;
    promoCode?: string;
    discountPercent?: number;
}
export declare function createProductCatalogEmail(config: BrandConfig, params?: ProductCatalogConfig): string;
