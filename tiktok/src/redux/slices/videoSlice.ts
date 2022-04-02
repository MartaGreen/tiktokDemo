import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATUS } from '../../constants/requests.constants';
import { IVideo } from '../../interfaces-types/videos.interface';

import videos from '../../data/videos.json';

export const getVideos = createAsyncThunk(
  'users/get',
  async (_, { rejectWithValue }) => {
    // server request

    const zeroOrOneNum = Math.floor(Math.random() * 2);
    const serverWorkSimulation = Boolean(zeroOrOneNum);
    if (serverWorkSimulation) {
      return videos.videos;
    } else {
      return rejectWithValue('Server error');
    }
  },
);

const videosSlice = createSlice({
  name: 'video',
  initialState: {
    status: '',
    videos: [] as IVideo[],
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getVideos.pending, state => {
      state.status = REQUEST_STATUS.pending;
    });
    builder.addCase(getVideos.fulfilled, (state, action) => {
      state.status = REQUEST_STATUS.succes;
      state.videos = action.payload;
    });
    builder.addCase(getVideos.rejected, (state, action) => {
      state.status = REQUEST_STATUS.error;
    });
  },
});

export default videosSlice.reducer;
