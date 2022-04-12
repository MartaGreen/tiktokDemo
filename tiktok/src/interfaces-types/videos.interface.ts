// export interface IVideo {
//   id: string;
//   url: { uri: string };
//   isPaused: boolean;
// }

export interface IVideoInitialState {
  status: string;
  posts: IPost[];
  viewableIndex: number;
  page: number;
}

export interface IVideoRequest {
  page: number;
  per_page: number;
  videos: IPost[];
  total_results: number;
  next_page: string;
  url: string; //api url, total results
}

export interface IPost {
  id: number;
  width: number;
  height: number;
  duration: number;
  full_res: null;
  tags: any[];
  url: string; // url to video post
  image: string; // url main picture
  avg_color: string | null;
  user: IUser;
  video_files: IVideoFile[];
  video_pictures: IVideoPicture[];

  isPaused?: boolean;
}

export interface IUser {
  id: number;
  name: string;
  url: string;
}

export interface IVideoFile {
  id: number;
  quality: string;
  file_type: string;
  width: number | null;
  height: number | null;
  link: string; // video url in mp4
}

export interface IVideoPicture {
  id: number;
  nr: number;
  picture: string; // picture url
}
