import React, { useState } from 'react';
import { useRef } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import Video from 'react-native-video';
import { useDispatch, useSelector } from 'react-redux';
import { IVideo } from '../../interfaces-types/videos.interface';
import { changeViewableItem, paused } from '../../redux/slices/videoSlice';

import styles from './videoPost.style';

const video = require('../../../assets/video/figures.mp4');
console.log('video', video);

function VideoPost({
  data,
  index,
  endScroll,
}: {
  data: IVideo;
  index: number;
  endScroll: (index: number) => void;
}) {
  const dispatch = useDispatch();
  const pausedVideo = () => {
    dispatch(paused());
  };

  return (
    <View style={styles.videoContainer}>
      <TouchableWithoutFeedback onPress={() => pausedVideo()}>
        <Video
          source={data.url}
          resizeMode="cover"
          style={styles.video}
          paused={data.isPaused}
          repeat={true}
          onError={e => console.log(e)}
          poster="https://baconmockup.com/300/200/"
          onEnd={() => {
            endScroll(index + 1);
            dispatch(changeViewableItem(index + 1));
          }}
        />
      </TouchableWithoutFeedback>

      <Text>text</Text>
    </View>
  );
}

export default VideoPost;
