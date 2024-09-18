export interface SearchApplicationsResponse {
    id: number;
    userEmail: string;
    jobTitle: string;
    resume: string;
    status: string;
    createdAt: Date | string;
}

export interface SearchApplicationsRequest {
    userId?: number;
}

export interface UpdateApplicationBody {
    id: number;
    status: string;
}

export interface CreateApplicationBody {
    userId: number;
    jobId: number;
    resume: ''
}