import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATUS } from '../../constants/requests.constants';
import {
  IPost,
  IVideoInitialState,
  IVideoRequest,
} from '../../interfaces-types/videos.interface';

// import videos from '../../data/videos.json';
import getVideosRequest from '../../requests/videoRequests';

export const getVideos = createAsyncThunk(
  'users/get',
  async (pageNum: number, { rejectWithValue }) => {
    // server request

    // const zeroOrOneNum = Math.floor(Math.random() * 3);
    // const serverWorkSimulation = Boolean(zeroOrOneNum);
    // const serverWorkSimulation: boolean = true;
    // if (serverWorkSimulation) {
    //   const videosData = videos.videos.map(video => {
    //     const updateVideo = Object.assign(video);
    //     updateVideo['isPaused'] = true;
    //     return updateVideo;
    //   });
    //   return videosData;
    // } else {
    //   return rejectWithValue('Server error');
    // }

    // const videos: IVideoRequest = await getVideosRequest();
    const videos: IVideoRequest = await getVideosRequest(pageNum);
    return {
      page: videos.page,
      posts: videos.videos,
    };
  },
);

const postsSlice = createSlice({
  name: 'video',
  initialState: {
    status: '',
    posts: [] as IPost[],
    viewableIndex: 0,
    page: 1,
  },
  reducers: {
    changeViewableItem: (state: IVideoInitialState, action) => {
      const prevIndex: number = state.viewableIndex;
      state.posts[prevIndex].isPaused = true;
      const index: number = action.payload;
      state.posts[index].isPaused = false;
      state.viewableIndex = index;
    },
    paused: state => {
      const index: number = state.viewableIndex;
      const viewableVideoIsPaused = state.posts[index].isPaused;
      state.posts[index].isPaused = !viewableVideoIsPaused;
    },
    updatePage: state => {
      state.page += 1;
    },
  },
  extraReducers: builder => {
    builder.addCase(getVideos.pending, state => {
      state.status = REQUEST_STATUS.pending;
    });
    builder.addCase(getVideos.fulfilled, (state, action) => {
      state.status = REQUEST_STATUS.succes;
      state.posts.push(...action.payload.posts);

      // const pageNum: number = action.payload.page;
      // const currentPageNum: number = state.page;
      // state.page = currentPageNum < pageNum ? pageNum : currentPageNum;
    });
    builder.addCase(getVideos.rejected, state => {
      state.status = REQUEST_STATUS.error;
    });
  },
});

export const { changeViewableItem, paused, updatePage } = postsSlice.actions;
export default postsSlice.reducer;
