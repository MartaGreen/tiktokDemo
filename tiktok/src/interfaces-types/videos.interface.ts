export interface IVideo {
  id: string;
  url: { uri: string };
}

export interface IVideoInitialState {
  status: string;
  videos: IVideo[];
}
