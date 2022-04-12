import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import Video from 'react-native-video';
import { useDispatch, useSelector } from 'react-redux';
import { IPost } from '../../interfaces-types/videos.interface';
import { changeViewableItem, paused } from '../../redux/slices/postsSlice';
import { RESULTS_PER_PAGE } from '../../constants/requests.constants';

import styles from './videoPost.style';
import { IStore } from '../../interfaces-types/store.interface';

// const video = require('../../../assets/video/figures.mp4');

function VideoPost({
  data,
  index,
  endScroll,
}: {
  data: IPost;
  index: number;
  endScroll: (index: number) => void;
}) {
  const pageNum: number = useSelector((state: IStore) => state.posts.page);
  const dispatch = useDispatch();
  const pausedVideo = () => {
    dispatch(paused());
  };

  return (
    <View style={styles.videoContainer}>
      <TouchableWithoutFeedback onPress={() => pausedVideo()}>
        <Video
          source={{ uri: data.video_files[0].link }}
          resizeMode="cover"
          style={styles.video}
          paused={data.isPaused}
          repeat={true}
          onError={e => console.log(e)}
          poster={data.image}
          onEnd={() => {
            const countOfLoadedPosts: number = RESULTS_PER_PAGE * pageNum;
            if (index < countOfLoadedPosts - 1) {
              endScroll(index + 1);
              dispatch(changeViewableItem(index + 1));
            }
          }}
        />
      </TouchableWithoutFeedback>

      <Text>text</Text>
    </View>
  );
}

export default VideoPost;
