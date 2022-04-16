import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import { Dimensions, FlatList, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import RequestMsg from '../../components/requestMsg/requestMsg';
import { IStore } from '../../interfaces-types/store.interface';
import { IPost } from '../../interfaces-types/videos.interface';
import postsSlice, {
  getVideos,
  changeViewableItem,
  updatePage,
} from '../../redux/slices/postsSlice';

import VideoPost from '../../components/videoPost/videoPost';

function Main() {
  const dispatch = useDispatch();
  const storeData = useSelector((state: IStore) => state.posts);
  const status: string = storeData.status;
  const videos: IPost[] = storeData.posts;
  const pageNum: number = storeData.page;
  const posts: (IPost | null)[] = [...videos, null];

  const [flatListRef, setFlatListRef] = useState<FlatList<IPost | null> | null>(
    null,
  );

  useEffect(() => {
    dispatch(getVideos(pageNum));
  }, [pageNum]);

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

  const loadNewPosts = () => {
    console.log('loading new data ...');
    dispatch(updatePage());
  };

  return (
    <View>
      <FlatList
        data={posts}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => {
          if (item === null) {
            return <RequestMsg status={status} />;
          } else {
            return (
              <VideoPost data={item} index={index} endScroll={scrollToNext} />
            );
          }
        }}
        snapToInterval={Dimensions.get('window').height}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        viewabilityConfig={{ viewAreaCoveragePercentThreshold: 99 }}
        onViewableItemsChanged={onViewableItemsChanged.current}
        ref={ref => setFlatListRef(ref)}
        onScrollToIndexFailed={err => console.log(err)}
        onEndReached={() => loadNewPosts()}
        onEndReachedThreshold={0}
      />
    </View>
  );
  // }
}

export default Main;
