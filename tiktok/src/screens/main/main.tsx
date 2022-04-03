import React, { useRef } from 'react';
import { useEffect } from 'react';
import { Dimensions, FlatList, Text, View, ViewToken } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { REQUEST_STATUS } from '../../constants/requests.constants';
import { IStore } from '../../interfaces-types/store.interface';
import { IVideo } from '../../interfaces-types/videos.interface';
import { getVideos, changeViewableItem } from '../../redux/slices/videoSlice';

import VideoPost from '../../components/videoPost/videoPost';

function Main() {
  const storeData = useSelector((state: IStore) => state.videos);
  const status: string = storeData.status;
  const videos: IVideo[] = storeData.videos;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideos());
  }, []);

  const onViewableItemsChanged = useRef(({ changed }: any) => {
    const isViewable: boolean = changed[0].isViewable;
    if (isViewable) {
      const viewableIndex: number = changed[0].index;
      dispatch(changeViewableItem(viewableIndex));
    }
  });

  if (status === REQUEST_STATUS.pending) {
    return <Text>Getting data ...</Text>;
  } else if (status === REQUEST_STATUS.error) {
    return <Text>Oops, something went wrong!</Text>;
  } else {
    return (
      <View>
        <FlatList
          data={videos}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <VideoPost data={item} />}
          snapToInterval={Dimensions.get('window').height}
          snapToAlignment={'start'}
          decelerationRate={'fast'}
          viewabilityConfig={{ viewAreaCoveragePercentThreshold: 99 }}
          onViewableItemsChanged={onViewableItemsChanged.current}
        />
      </View>
    );
  }
}

export default Main;
