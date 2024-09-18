import {createApi} from "@reduxjs/toolkit/query/react";
import customFetchBase from "./middleware";
import { LookupModel } from "src/types/commonType";

export const MetaApi = createApi({
    baseQuery: customFetchBase,
    reducerPath: "meta",
    endpoints: (builder) => ({
        searchCities: builder.query<LookupModel, {locale: string, countryCode: string}>({
            query: (params) => ({
                url: `meta/cities`,
                method: 'GET',
                params: params,
            })
        }),
        searchCompanyTypes: builder.query<LookupModel, {locale: string}>({
            query: (params) => ({
                url: `meta/CompanyTypes`,
                method: 'GET',
                params: params
            })
        }),
        searchIndustries: builder.query<LookupModel, {locale: string}>({
            query: (params) => ({
                url: `meta/Industries`,
                method: 'GET',
                params: params
            })
        }),
        searchSalaryBankTransferMethods: builder.query<LookupModel[], {locale: string}>({
            query: (params) => ({
                url: `meta/SalaryBankTransferMethods`,
                method: 'GET',
                params: params
            })
        }),
        searchObligationTypes: builder.query<LookupModel[], {locale: string}>({
            query: (params) => ({
                url: `meta/ObligationTypes`,
                method: 'GET',
                params: params
            })
        }),
        searchObligationFinancialTypes: builder.query<LookupModel[],  {locale: string}>({
            query: (params) => ({
                url: `meta/ObligationFinancingTypes`,
                method: 'GET',
                params: params
            })
        }),
        searchMetaLenders: builder.query<LookupModel[], {locale: string}>({
            query: (params) => ({
                url: `meta/metaLenders`,
                method: 'GET',
                params: params
            })
        }),
        searchPurposes: builder.query<LookupModel[], {locale: string}>({
            query: (params) => ({
                url: `meta/purposes`,
                method: 'GET',
                params: params
            })
        }),
        searchFinancingTypes: builder.query<LookupModel[], {locale: string}>({
            query: (params) => ({
                url: `meta/FinancingTypes`,
                method: 'GET',
                params: params
            })
        }),
        searchSecretResults: builder.query<LookupModel[], {locale: string}>({
            query: (params) => {
                return ({
                    url: `meta/secretResults`,
                    method: 'GET',
                    params: params
                })
            }
        }),
        searchCompanyStatuses: builder.query<LookupModel[], {locale: string}>({
            query: (params) => {
                return ({
                    url: `meta/CompanyStatuses`,
                    method: 'GET',
                    params: params
                })
            }
        }),

    })
});

export const
    {
        useSearchSecretResultsQuery,
        useSearchFinancingTypesQuery,
        useSearchPurposesQuery,
        useSearchMetaLendersQuery,
        useSearchObligationTypesQuery,
        useSearchObligationFinancialTypesQuery,
        useSearchSalaryBankTransferMethodsQuery,
        useSearchIndustriesQuery,
        useSearchCompanyTypesQuery,
        useSearchCitiesQuery,
        useSearchCompanyStatusesQuery
    } = MetaApi;
