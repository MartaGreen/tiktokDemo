import React from 'react';
import { Text } from 'react-native';
import { REQUEST_STATUS } from '../../constants/requests.constants';

function RequestMsg({ status }: { status: string }) {
  if (status === REQUEST_STATUS.pending || !status) {
    return <Text>Getting data ...</Text>;
  } else if (status === REQUEST_STATUS.error) {
    return <Text>Oops, something went wrong!</Text>;
  } else {
    return <Text></Text>;
  }
}

export default RequestMsg;
