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
import { REQUEST_STATUS } from '../../constants/requests.constants';

function Main() {
  const [flatListRef, setFlatListRef] = useState<FlatList<IPost | null> | null>(
    null,
  );
  const [postIsUpdated, setPostIsUpdated] = useState(false);

  const dispatch = useDispatch();
  const storeData = useSelector((state: IStore) => state.posts);
  const status: string = storeData.status;
  const videos: IPost[] = storeData.posts;
  const posts: (IPost | null)[] = [...videos, null];
  const pageNum: number = storeData.page;
  const searchedValue: string = storeData.searchedValue;
  const viewableIndex: number = storeData.viewableIndex;

  useEffect(() => {
    if (searchedValue.length > 0) {
      dispatch(getVideos({ pageNum, searchedValue }));
      setPostIsUpdated(true);
    }
  }, [pageNum, searchedValue]);

  useEffect(() => {
    if (postIsUpdated && status === REQUEST_STATUS.succes) {
      dispatch(changeViewableItem(viewableIndex + 1));
      autoScrollToNext(viewableIndex + 1);
      setPostIsUpdated(false);
    }
  }, [postIsUpdated, status]);

  const autoScrollToNext = (index: number) => {
    console.log('auto scroll', index, flatListRef?.props.data);
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
      // console.log('loading new data ...');
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
              return (
                <View style={styles.requestMsg}>
                  <RequestMsg status={status} />
                </View>
              );
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
