import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { REQUEST_STATUS } from '../../constants/requests.constants';

import animation from '../../../assets/animation/98586-loading-oneplace.json';
import LottieView from 'lottie-react-native';

function RequestMsg({ status }: { status: string }) {
  if (status === REQUEST_STATUS.pending) {
    return <LottieView source={animation} style={styles.animation} autoPlay />;
  } else if (status === REQUEST_STATUS.error) {
    return <Text>Oops, something went wrong!</Text>;
  } else {
    return <Text></Text>;
  }
}

const styles = StyleSheet.create({
  animation: {
    width: 100,
    height: 200,
  },
});

export default RequestMsg;
