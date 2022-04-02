import { LinkingOptions } from '@react-navigation/native';
import { IRootParamlist } from '../interfaces/links.interface';

const linksConfig: LinkingOptions<IRootParamlist> = {
  prefixes: ['/'],
  config: {
    screens: {
      Root: 'root',
    },
  },
};

export default linksConfig;
