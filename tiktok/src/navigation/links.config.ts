import { LinkingOptions } from '@react-navigation/native';
import { IRootParamlist } from '../interfaces-types/links.type';

const linksConfig: LinkingOptions<IRootParamlist> = {
  prefixes: ['/'],
  config: {
    screens: {
      Root: 'root',
    },
  },
};

export default linksConfig;
