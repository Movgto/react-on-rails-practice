import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  greeting: '',
};

export const fetchGreetings = createAsyncThunk('greeting/fetchGreetings', async () => {
  try {
    const res = await axios.get('/greetings', {
      headers: {
        'Accept': 'application/json',
      },
    });
    console.log(res)
    return res.data;
  } catch (err) {
    return err.message
  }
})

const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchGreetings.fulfilled, (state, { payload }) => {
      let randomIndex = Math.floor(payload.length * Math.random());
      state.greeting = payload[randomIndex].text;
    })
    .addCase(fetchGreetings.rejected, (state, { payload }) => {
      state.greeting = 'Fetch data failed';
    })
  }
});

export default greetingSlice.reducer;