import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import { Dimensions, FlatList, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { REQUEST_STATUS } from '../../constants/requests.constants';
import { IStore } from '../../interfaces-types/store.interface';
import { IPost } from '../../interfaces-types/videos.interface';
import { getVideos, changeViewableItem } from '../../redux/slices/postsSlice';

import VideoPost from '../../components/videoPost/videoPost';

function Main() {
  const dispatch = useDispatch();
  const storeData = useSelector((state: IStore) => state.posts);
  const status: string = storeData.status;
  const videos: IPost[] = storeData.posts;

  const [flatListRef, setFlatListRef] = useState<FlatList<IPost> | null>(null);

  useEffect(() => {
    dispatch(getVideos());
  }, []);

  const scrollToNext = (index: number) => {
    flatListRef?.scrollToIndex({ index });
  };

  const onViewableItemsChanged = useRef(({ changed }: any) => {
    const isViewable: boolean = changed[0].isViewable;
    if (isViewable) {
      const viewableIndex: number = changed[0].index;
      dispatch(changeViewableItem(viewableIndex));
    }
  });

  if (status === REQUEST_STATUS.pending || !status) {
    return <Text>Getting data ...</Text>;
  } else if (status === REQUEST_STATUS.error) {
    return <Text>Oops, something went wrong!</Text>;
  } else {
    return (
      <View>
        <FlatList
          data={videos}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <VideoPost data={item} index={index} endScroll={scrollToNext} />
          )}
          snapToInterval={Dimensions.get('window').height}
          snapToAlignment={'start'}
          decelerationRate={'fast'}
          viewabilityConfig={{ viewAreaCoveragePercentThreshold: 99 }}
          onViewableItemsChanged={onViewableItemsChanged.current}
          ref={ref => setFlatListRef(ref)}
          onScrollToIndexFailed={err => console.log(err)}
        />
      </View>
    );
  }
}

export default Main;
