import React, { useState } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import Video from 'react-native-video';
import { useDispatch, useSelector } from 'react-redux';
import { IStore } from '../../interfaces-types/store.interface';
import { IVideo } from '../../interfaces-types/videos.interface';
import { paused } from '../../redux/slices/videoSlice';

import styles from './videoPost.style';

function VideoPost({ data }: { data: IVideo }) {
  const dispatch = useDispatch();
  const pausedVideo = () => {
    dispatch(paused());
  };

  return (
    <View style={styles.videoContainer}>
      <TouchableWithoutFeedback onPress={() => pausedVideo()}>
        <Video
          source={data.url}
          resizeMode={'cover'}
          style={styles.video}
          paused={data.isPaused}
          repeat={true}
          onError={e => console.log(e)}
        />
      </TouchableWithoutFeedback>
    </View>
  );
}

export default VideoPost;
