import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  videoContainer: {
    flex: 1,
    width: '100%',
    height: Dimensions.get('window').height,

    backgroundColor: 'black',
  },
  video: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default styles;
