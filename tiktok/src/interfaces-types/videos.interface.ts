export interface IVideo {
  id: string;
  url: { uri: string };
  isPaused: boolean;
}

export interface IVideoInitialState {
  status: string;
  videos: IVideo[];
  viewableIndex: number;
}
