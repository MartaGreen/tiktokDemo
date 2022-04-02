import { configureStore } from '@reduxjs/toolkit';

import videosRedcuer from './slices/videoSlice';

const store = configureStore({
  reducer: {
    videos: videosRedcuer,
  },
});

export default store;
