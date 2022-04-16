import React from 'react';
import { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { updateRequest } from '../../redux/slices/postsSlice';

import styles from './searchField.style';

function SearchField() {
  const [searchedText, setSearchedText] = useState('');
  const dispatch = useDispatch();

  const updatePosts = (searchedValue: string) => {
    if (searchedValue.length > 2) {
      dispatch(updateRequest(searchedValue));
    }
  };

  return (
    <View style={styles.searchField}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search ..."
        onChangeText={text => setSearchedText(text)}
      />
      <Button title={'Search'} onPress={() => updatePosts(searchedText)} />
    </View>
  );
}

export default SearchField;
