import { BrandConfig } from '../config';
export interface GridLayoutConfig {
    customerName?: string;
    collectionName?: string;
    promoCode?: string;
    validUntil?: string;
}
export declare function createGridLayoutEmail(config: BrandConfig, params?: GridLayoutConfig): string;
