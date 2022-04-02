import React, { useState } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import Video from 'react-native-video';
import { IVideo } from '../../interfaces-types/videos.interface';

import styles from './videoPost.style';

function VideoPost({ data }: { data: IVideo }) {
  const [isPaused, setIsPaused] = useState(true);

  return (
    <View style={styles.videoContainer}>
      <TouchableWithoutFeedback onPress={() => setIsPaused(state => !state)}>
        <Video
          source={data.url}
          resizeMode={'cover'}
          style={styles.video}
          paused={isPaused}
          repeat={true}
          onError={e => console.log(e)}
        />
      </TouchableWithoutFeedback>
    </View>
  );
}

export default VideoPost;
