import { BrandConfig } from '../config';
export declare function createVipMembershipEmail(config: BrandConfig, params?: {
    customerName?: string;
    specialOffer?: boolean;
    discountPercent?: number;
    validUntil?: string;
}): string;
