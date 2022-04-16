import { REQUEST_URL, RESULTS_PER_PAGE } from '../constants/requests.constants';
import { IVideoRequest } from '../interfaces-types/videos.interface';

async function getVideosRequest(pageNum: number) {
  const url: string = setParams(
    REQUEST_URL,
    ['query', 'ocean'],
    ['per_page', RESULTS_PER_PAGE],
    ['page', pageNum],
  );
  const videosResponse: Response = await fetch(url, {
    headers: {
      Authorization: '563492ad6f917000010000016cff6c08616f4169a0557b9198dfc486',
      'X-RapidAPI-Host': 'PexelsdimasV1.p.rapidapi.com',
      'X-RapidAPI-Key': '65d4fde48cmsh86b307b6e9381ddp159befjsnec687ebbbeb2',
    },
  });

  if (videosResponse.ok) {
    const requestData: IVideoRequest = await videosResponse.json();
    requestData.videos.forEach(video => (video.isPaused = true));
    return requestData;
  } else {
    throw new Error(videosResponse.statusText);
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
