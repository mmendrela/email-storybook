import { BrandConfig } from '../config';
export interface SingleProductConfig {
    customerName?: string;
    productType?: string;
    urgencyMessage?: string;
    stockCount?: number;
    reviewCount?: number;
    rating?: number;
}
export declare function createSingleProductEmail(config: BrandConfig, params?: SingleProductConfig): string;
