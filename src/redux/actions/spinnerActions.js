import { createAsyncThunk } from '@reduxjs/toolkit';

export const getSpinnerOptions = createAsyncThunk(
  'spinner/getSpinnerOptions',
  async (_, thunkApi) => {
    try {
      const url = 'https://terra-staging.letsterra.com/mvp5/getSpinwheelOptions?username=enigmaobby_1718347466';
      const res = await fetch(url, {
        method: 'GET',
      });
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const response = await res.json();
      return response;
    } catch (err) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);
