import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';
import { REQUEST_STATUS } from '../../constants/requests.constants';
import {
  IVideo,
  IVideoInitialState,
} from '../../interfaces-types/videos.interface';

import videos from '../../data/videos.json';

export const getVideos = createAsyncThunk(
  'users/get',
  async (_, { rejectWithValue }) => {
    // server request

    // const zeroOrOneNum = Math.floor(Math.random() * 3);
    // const serverWorkSimulation = Boolean(zeroOrOneNum);
    const serverWorkSimulation: boolean = true;
    if (serverWorkSimulation) {
      const videosData = videos.videos.map(video => {
        const updateVideo = Object.assign(video);
        updateVideo['isPaused'] = true;
        return updateVideo;
      });
      return videosData;
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
    viewableIndex: 0,
  },
  reducers: {
    changeViewableItem: (state: IVideoInitialState, action) => {
      const prevIndex: number = state.viewableIndex;
      state.videos[prevIndex].isPaused = true;
      const index: number = action.payload;
      state.videos[index].isPaused = false;
      state.viewableIndex = index;

      console.log(current(state.videos));
    },
    paused: state => {
      const index: number = state.viewableIndex;
      const viewableVideoIsPaused = state.videos[index].isPaused;
      state.videos[index].isPaused = !viewableVideoIsPaused;
    },
  },
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

export const { changeViewableItem, paused } = videosSlice.actions;
export default videosSlice.reducer;
