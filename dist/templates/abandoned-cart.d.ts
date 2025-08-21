import { BrandConfig } from '../config';
export interface AbandonedCartConfig {
    customerName?: string;
    cartId?: string;
    discountPercent?: number;
    discountCode?: string;
    urgencyHours?: number;
    freeShippingThreshold?: number;
}
export declare function createAbandonedCartEmail(config: BrandConfig, params?: AbandonedCartConfig): string;
