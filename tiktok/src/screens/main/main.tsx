import React from 'react';
import { useEffect } from 'react';
import { Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { IStore } from '../../interfaces-types/store.interface';
import { getVideos } from '../../redux/slices/videoSlice';

function Main() {
  const storeData = useSelector((state: IStore) => state.videos);
  console.log(storeData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideos());
  }, []);

  return <Text>{storeData.status}</Text>;
}

export default Main;
