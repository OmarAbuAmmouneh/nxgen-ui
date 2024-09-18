export interface SearchJobsResponse {
    id: number;
    title: string;
    description: string;
    location: string;
}


export interface SearchJobsRequest {
    isUser?: boolean;
    userId?: number;
}

export interface CreateJobBody {
    title: string;
    description: string;
    location: string;
}

export interface UpdateJobBody extends CreateJobBody {
    id: number;
}

export interface DeleteJobRequest {
    id: number;
}

export interface UserModel {
    id: number;
    email: string;
    role: string;
}