import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import { Dimensions, FlatList, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import RequestMsg from '../../components/requestMsg/requestMsg';
import { IStore } from '../../interfaces-types/store.interface';
import { IPost } from '../../interfaces-types/videos.interface';
import {
  getVideos,
  changeViewableItem,
  updatePage,
} from '../../redux/slices/postsSlice';

import styles from './main.style';
import VideoPost from '../../components/videoPost/videoPost';
import SearchField from '../../components/searchField/searchField';

function Main() {
  const [flatListRef, setFlatListRef] = useState<FlatList<IPost | null> | null>(
    null,
  );

  const dispatch = useDispatch();
  const storeData = useSelector((state: IStore) => state.posts);
  const status: string = storeData.status;
  const videos: IPost[] = storeData.posts;
  const posts: (IPost | null)[] = [...videos, null];
  const pageNum: number = storeData.page;
  const searchedValue: string = storeData.searchedValue;

  useEffect(() => {
    if (searchedValue.length > 0) {
      dispatch(getVideos({ pageNum, searchedValue }));
    }
    if (pageNum > 1) {
      dispatch(changeViewableItem(videos.length));
    }
  }, [pageNum, searchedValue]);

  const autoScrollToNext = (index: number) => {
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
    if (videos.length > 1) {
      console.log('loading new data ...');
      dispatch(updatePage());
    }
  };

  return (
    <View>
      <View style={styles.searchField}>
        <SearchField />
      </View>
      <View style={styles.posts}>
        <FlatList
          data={posts}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index }) => {
            if (item === null) {
              return <RequestMsg status={status} />;
            } else {
              return (
                <VideoPost
                  data={item}
                  index={index}
                  endScroll={autoScrollToNext}
                />
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
    </View>
  );
  // }
}

export default Main;
