import {
  REQUEST_URL,
  RESULTS_PER_PAGE,
  RAPID_API_KEYS,
  PEXEL_API_KEYS,
} from '../constants/requests.constants';
import { IVideoRequest } from '../interfaces-types/videos.interface';

async function getVideosRequest(pageNum: number, searchValue: string) {
  try {
    const url: string = setParams(
      REQUEST_URL,
      ['query', searchValue],
      ['per_page', RESULTS_PER_PAGE],
      ['page', pageNum],
    );
    const videosResponse: Response = await fetch(url, {
      headers: {
        Authorization: PEXEL_API_KEYS['2'],
        'X-RapidAPI-Host': 'PexelsdimasV1.p.rapidapi.com',
        'X-RapidAPI-Key': RAPID_API_KEYS['1'],
      },
    });

    if (videosResponse.ok) {
      const requestData: IVideoRequest = await videosResponse.json();
      requestData.videos.forEach(video => (video.isPaused = true));
      return requestData;
    } else {
      throw new Error(videosResponse.statusText);
    }
  } catch (err) {
    console.log(err);
    return null;
  }
}

const setParams = (url: string, ...params: (string | number)[][]) => {
  url += '?';
  params.forEach(param => {
    url += `${param[0]}=${param[1]}&`;
  });
  url = url.slice(0, url.length - 1);

  return url;
};

export default getVideosRequest;
