import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchGoods = createAsyncThunk('goods/fetchGoods', async () => {
  const response = await fetch('http://localhost:5000/goods');
  const goods = await response.json();
  return goods;
});

const goodsSlice = createSlice({
  name: 'goods',
  initialState: {
    items: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGoods.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchGoods.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchGoods.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default goodsSlice.reducer;
