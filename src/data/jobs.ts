import {createApi} from "@reduxjs/toolkit/query/react";
import customFetchBase from "./middleware";
import { CreateJobBody, SearchJobsRequest, SearchJobsResponse, UpdateJobBody } from "src/types/jobs";
import { CreateApplicationBody, SearchApplicationsRequest, SearchApplicationsResponse, UpdateApplicationBody } from "src/types/applications";

export const JobsApi = createApi({
    baseQuery: customFetchBase,
    reducerPath: "jobs",
    tagTypes: ["jobs", "applications"],
    endpoints: (builder) => ({
        searchJobs: builder.query<Array<SearchJobsResponse>, SearchJobsRequest>({
            providesTags: ["jobs"],
            query: (params) => ({
                url: 'jobs',
                method: 'GET',
                params: params,
            })
        }),
        createJob: builder.mutation<void, CreateJobBody>({
            invalidatesTags: ["jobs"],
            query: (body) => ({
                url: 'jobs',
                method: 'POST',
                body: body,
            })
        }),
        updateJob: builder.mutation<void, UpdateJobBody>({
            invalidatesTags: ["jobs"],
            query: (body) => ({
                url: `jobs/${body.id}`,
                method: 'PATCH',
                body: body,
            })
        }),
        deleteJob: builder.mutation<void, number>({
            invalidatesTags: ["jobs", "applications"],
            query: (id) => ({
                url: `jobs/${id}`,
                method: 'DELETE',
                body: {},
            })
        }),
        searchApplications: builder.query<Array<SearchApplicationsResponse>, SearchApplicationsRequest | undefined>({
            providesTags: ["applications"],
            query: (params) => ({
                url: 'applications',
                method: 'GET',
                params: params,
            })
        }),
        updateApplicationStatus: builder.mutation<void, UpdateApplicationBody>({
            invalidatesTags: ["applications"],
            query: (body) => ({
                url: `applications/${body.id}/status`,
                method: 'PUT',
                body: body,
            })
        }),
        createApplication: builder.mutation<void, CreateApplicationBody>({
            invalidatesTags: ["jobs", "applications"],
            query: (body) => ({
                url: 'applications',
                method: 'POST',
                body: body,
            })
        }),
    })
});

export const
    {
        useCreateApplicationMutation,
        useUpdateApplicationStatusMutation,
        useSearchApplicationsQuery,
        useDeleteJobMutation,
        useUpdateJobMutation,
        useCreateJobMutation,
        useSearchJobsQuery,
    } = JobsApi;
