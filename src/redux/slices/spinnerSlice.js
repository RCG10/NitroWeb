import { createSlice } from '@reduxjs/toolkit';
import { getSpinnerOptions } from '../actions/spinnerActions';

const initialState = {
    options: [],
    isLoading: false,
    error: false,
    errorMsg: '',
};

const spinnerSlice = createSlice({
    name: 'spinnerOptions',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getSpinnerOptions.pending, (state) => {
                state.isLoading = true;
                state.error = false;
                state.errorMsg = '';
            })
            .addCase(getSpinnerOptions.fulfilled, (state, action) => {
                state.isLoading = false;
                state.options = action.payload?.options;
            })
            .addCase(getSpinnerOptions.rejected, (state, action) => {
                state.isLoading = false;
                state.error = true;
                state.errorMsg = action.payload;
            });
    },
});

export const getOptions = (state) => state.spinnerOptions.options;
export const getOptionsLoading = (state) => state.spinnerOptions.isLoading;
export const getOptionsError = (state) => state.spinnerOptions.error;

export default spinnerSlice.reducer;
