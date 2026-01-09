export interface PartnershipRequest {
    name: string;
    email: string;
    phone: string;
    company?: string;
    partnershipType: string;
    message?: string;
}

export interface PartnershipResponse {
    success: boolean;
    message: string;
    id?: number;
}