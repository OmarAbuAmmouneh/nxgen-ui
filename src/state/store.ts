import {combineReducers, configureStore} from '@reduxjs/toolkit'
import UserReducer from './user';
import AppReducer from './app';

import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {MetaApi} from "data/meta";
import {AuthApi} from "data/auth";
import {JobsApi} from "data/jobs";


const reducers = combineReducers({
        user: UserReducer,
        app: AppReducer,
        [AuthApi.reducerPath]: AuthApi.reducer,
        [MetaApi.reducerPath]: MetaApi.reducer,
        [JobsApi.reducerPath]: JobsApi.reducer,
})
;

const Store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({}).concat([
            AuthApi.middleware,
            MetaApi.middleware,
            JobsApi.middleware,
        ]),
})

export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export default Store;
