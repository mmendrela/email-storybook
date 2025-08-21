import { BrandConfig } from '../config';
export declare function createAbandonedCartEmail(config: BrandConfig, params?: {
    customerName?: string;
    discountPercent?: number;
    promoCode?: string;
    cartValue?: string;
    urgencyHours?: number;
}): string;
