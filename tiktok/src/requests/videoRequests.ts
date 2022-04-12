import { REQUEST_URL } from '../constants/requests.constants';
import { IVideoRequest } from '../interfaces-types/videos.interface';

async function getVideosRequest() {
  const url: string = setParams(
    REQUEST_URL,
    ['query', 'ocean'],
    ['per_page', 15],
    ['page', 1],
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

  // return {
  //   page: 1,
  //   per_page: 15,
  //   videos: [
  //     {
  //       id: 1570919,
  //       width: 1920,
  //       height: 1080,
  //       duration: 24,
  //       full_res: null,
  //       tags: [],
  //       url: 'https://www.pexels.com/video/view-of-the-horizon-1570919/',
  //       image:
  //         'https://images.pexels.com/videos/1570919/free-video-1570919.jpg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200',
  //       avg_color: null,
  //       user: {
  //         id: 148897,
  //         name: 'Joseph  Redfield',
  //         url: 'https://www.pexels.com/@inforexplore',
  //       },
  //       video_files: [
  //         {
  //           id: 62855,
  //           quality: 'hd',
  //           file_type: 'video/mp4',
  //           width: 1920,
  //           height: 1080,
  //           link: 'https://player.vimeo.com/external/299108946.hd.mp4?s=b9a7cc9e6dbb18367250a9c8ddef4e5fe800bb99&profile_id=175&oauth2_token_id=57447761',
  //         },
  //         {
  //           id: 62856,
  //           quality: 'sd',
  //           file_type: 'video/mp4',
  //           width: 960,
  //           height: 540,
  //           link: 'https://player.vimeo.com/external/299108946.sd.mp4?s=aaf063c80e9825e1e20f13b27058a47cbd64c86a&profile_id=165&oauth2_token_id=57447761',
  //         },
  //         {
  //           id: 62857,
  //           quality: 'sd',
  //           file_type: 'video/mp4',
  //           width: 640,
  //           height: 360,
  //           link: 'https://player.vimeo.com/external/299108946.sd.mp4?s=aaf063c80e9825e1e20f13b27058a47cbd64c86a&profile_id=164&oauth2_token_id=57447761',
  //         },
  //         {
  //           id: 62858,
  //           quality: 'hd',
  //           file_type: 'video/mp4',
  //           width: 1280,
  //           height: 720,
  //           link: 'https://player.vimeo.com/external/299108946.hd.mp4?s=b9a7cc9e6dbb18367250a9c8ddef4e5fe800bb99&profile_id=174&oauth2_token_id=57447761',
  //         },
  //         {
  //           id: 62859,
  //           quality: 'hls',
  //           file_type: 'video/mp4',
  //           width: null,
  //           height: null,
  //           link: 'https://player.vimeo.com/external/299108946.m3u8?s=f43dbf63ef678f0ae351b81dded8c401a573c041&oauth2_token_id=57447761',
  //         },
  //       ],
  //       video_pictures: [
  //         {
  //           id: 146332,
  //           nr: 0,
  //           picture:
  //             'https://images.pexels.com/videos/1570919/pictures/preview-0.jpg',
  //         },
  //         {
  //           id: 146333,
  //           nr: 1,
  //           picture:
  //             'https://images.pexels.com/videos/1570919/pictures/preview-1.jpg',
  //         },
  //         {
  //           id: 146334,
  //           nr: 2,
  //           picture:
  //             'https://images.pexels.com/videos/1570919/pictures/preview-2.jpg',
  //         },
  //         {
  //           id: 146335,
  //           nr: 3,
  //           picture:
  //             'https://images.pexels.com/videos/1570919/pictures/preview-3.jpg',
  //         },
  //         {
  //           id: 146336,
  //           nr: 4,
  //           picture:
  //             'https://images.pexels.com/videos/1570919/pictures/preview-4.jpg',
  //         },
  //         {
  //           id: 146337,
  //           nr: 5,
  //           picture:
  //             'https://images.pexels.com/videos/1570919/pictures/preview-5.jpg',
  //         },
  //         {
  //           id: 146338,
  //           nr: 6,
  //           picture:
  //             'https://images.pexels.com/videos/1570919/pictures/preview-6.jpg',
  //         },
  //         {
  //           id: 146339,
  //           nr: 7,
  //           picture:
  //             'https://images.pexels.com/videos/1570919/pictures/preview-7.jpg',
  //         },
  //         {
  //           id: 146340,
  //           nr: 8,
  //           picture:
  //             'https://images.pexels.com/videos/1570919/pictures/preview-8.jpg',
  //         },
  //         {
  //           id: 146341,
  //           nr: 9,
  //           picture:
  //             'https://images.pexels.com/videos/1570919/pictures/preview-9.jpg',
  //         },
  //         {
  //           id: 146342,
  //           nr: 10,
  //           picture:
  //             'https://images.pexels.com/videos/1570919/pictures/preview-10.jpg',
  //         },
  //         {
  //           id: 146343,
  //           nr: 11,
  //           picture:
  //             'https://images.pexels.com/videos/1570919/pictures/preview-11.jpg',
  //         },
  //         {
  //           id: 146344,
  //           nr: 12,
  //           picture:
  //             'https://images.pexels.com/videos/1570919/pictures/preview-12.jpg',
  //         },
  //         {
  //           id: 146345,
  //           nr: 13,
  //           picture:
  //             'https://images.pexels.com/videos/1570919/pictures/preview-13.jpg',
  //         },
  //         {
  //           id: 146346,
  //           nr: 14,
  //           picture:
  //             'https://images.pexels.com/videos/1570919/pictures/preview-14.jpg',
  //         },
  //       ],
  //     },
  //     {
  //       id: 2335977,
  //       width: 3840,
  //       height: 2160,
  //       duration: 10,
  //       full_res: null,
  //       tags: [],
  //       url: 'https://www.pexels.com/video/soft-waves-lapping-on-sandy-shores-2335977/',
  //       image:
  //         'https://images.pexels.com/videos/2335977/free-video-2335977.jpg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200',
  //       avg_color: null,
  //       user: {
  //         id: 574687,
  //         name: 'Ruvim Miksanskiy',
  //         url: 'https://www.pexels.com/@digitech',
  //       },
  //       video_files: [
  //         {
  //           id: 107742,
  //           quality: 'sd',
  //           file_type: 'video/mp4',
  //           width: 960,
  //           height: 540,
  //           link: 'https://player.vimeo.com/external/337066883.sd.mp4?s=03a057a42ea293468f495ed4cc239c1c3f70a4fc&profile_id=165&oauth2_token_id=57447761',
  //         },
  //         {
  //           id: 107743,
  //           quality: 'sd',
  //           file_type: 'video/mp4',
  //           width: 426,
  //           height: 240,
  //           link: 'https://player.vimeo.com/external/337066883.sd.mp4?s=03a057a42ea293468f495ed4cc239c1c3f70a4fc&profile_id=139&oauth2_token_id=57447761',
  //         },
  //         {
  //           id: 107744,
  //           quality: 'hd',
  //           file_type: 'video/mp4',
  //           width: 1280,
  //           height: 720,
  //           link: 'https://player.vimeo.com/external/337066883.hd.mp4?s=fe17201190d1d3370a6cd81a57406a3f90691445&profile_id=174&oauth2_token_id=57447761',
  //         },
  //         {
  //           id: 107745,
  //           quality: 'hd',
  //           file_type: 'video/mp4',
  //           width: 2560,
  //           height: 1440,
  //           link: 'https://player.vimeo.com/external/337066883.hd.mp4?s=fe17201190d1d3370a6cd81a57406a3f90691445&profile_id=170&oauth2_token_id=57447761',
  //         },
  //         {
  //           id: 107746,
  //           quality: 'sd',
  //           file_type: 'video/mp4',
  //           width: 640,
  //           height: 360,
  //           link: 'https://player.vimeo.com/external/337066883.sd.mp4?s=03a057a42ea293468f495ed4cc239c1c3f70a4fc&profile_id=164&oauth2_token_id=57447761',
  //         },
  //         {
  //           id: 107747,
  //           quality: 'hd',
  //           file_type: 'video/mp4',
  //           width: 3840,
  //           height: 2160,
  //           link: 'https://player.vimeo.com/external/337066883.hd.mp4?s=fe17201190d1d3370a6cd81a57406a3f90691445&profile_id=172&oauth2_token_id=57447761',
  //         },
  //         {
  //           id: 107748,
  //           quality: 'hd',
  //           file_type: 'video/mp4',
  //           width: 1920,
  //           height: 1080,
  //           link: 'https://player.vimeo.com/external/337066883.hd.mp4?s=fe17201190d1d3370a6cd81a57406a3f90691445&profile_id=175&oauth2_token_id=57447761',
  //         },
  //         {
  //           id: 107749,
  //           quality: 'hls',
  //           file_type: 'video/mp4',
  //           width: null,
  //           height: null,
  //           link: 'https://player.vimeo.com/external/337066883.m3u8?s=5800031e2bc5d798ea56d4da063beab2932b3cc5&oauth2_token_id=57447761',
  //         },
  //       ],
  //       video_pictures: [
  //         {
  //           id: 268803,
  //           nr: 0,
  //           picture:
  //             'https://images.pexels.com/videos/2335977/pictures/preview-0.jpg',
  //         },
  //         {
  //           id: 268804,
  //           nr: 1,
  //           picture:
  //             'https://images.pexels.com/videos/2335977/pictures/preview-1.jpg',
  //         },
  //         {
  //           id: 268805,
  //           nr: 2,
  //           picture:
  //             'https://images.pexels.com/videos/2335977/pictures/preview-2.jpg',
  //         },
  //         {
  //           id: 268806,
  //           nr: 3,
  //           picture:
  //             'https://images.pexels.com/videos/2335977/pictures/preview-3.jpg',
  //         },
  //         {
  //           id: 268807,
  //           nr: 4,
  //           picture:
  //             'https://images.pexels.com/videos/2335977/pictures/preview-4.jpg',
  //         },
  //         {
  //           id: 268808,
  //           nr: 5,
  //           picture:
  //             'https://images.pexels.com/videos/2335977/pictures/preview-5.jpg',
  //         },
  //         {
  //           id: 268809,
  //           nr: 6,
  //           picture:
  //             'https://images.pexels.com/videos/2335977/pictures/preview-6.jpg',
  //         },
  //         {
  //           id: 268810,
  //           nr: 7,
  //           picture:
  //             'https://images.pexels.com/videos/2335977/pictures/preview-7.jpg',
  //         },
  //         {
  //           id: 268811,
  //           nr: 8,
  //           picture:
  //             'https://images.pexels.com/videos/2335977/pictures/preview-8.jpg',
  //         },
  //         {
  //           id: 268812,
  //           nr: 9,
  //           picture:
  //             'https://images.pexels.com/videos/2335977/pictures/preview-9.jpg',
  //         },
  //         {
  //           id: 268813,
  //           nr: 10,
  //           picture:
  //             'https://images.pexels.com/videos/2335977/pictures/preview-10.jpg',
  //         },
  //         {
  //           id: 268814,
  //           nr: 11,
  //           picture:
  //             'https://images.pexels.com/videos/2335977/pictures/preview-11.jpg',
  //         },
  //         {
  //           id: 268815,
  //           nr: 12,
  //           picture:
  //             'https://images.pexels.com/videos/2335977/pictures/preview-12.jpg',
  //         },
  //         {
  //           id: 268816,
  //           nr: 13,
  //           picture:
  //             'https://images.pexels.com/videos/2335977/pictures/preview-13.jpg',
  //         },
  //         {
  //           id: 268817,
  //           nr: 14,
  //           picture:
  //             'https://images.pexels.com/videos/2335977/pictures/preview-14.jpg',
  //         },
  //       ],
  //     },
  //     {
  //       id: 1526909,
  //       width: 1920,
  //       height: 1080,
  //       duration: 10,
  //       full_res: null,
  //       tags: [],
  //       url: 'https://www.pexels.com/video/seal-on-the-beach-1526909/',
  //       image:
  //         'https://images.pexels.com/videos/1526909/free-video-1526909.jpg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200',
  //       avg_color: null,
  //       user: {
  //         id: 574687,
  //         name: 'Ruvim Miksanskiy',
  //         url: 'https://www.pexels.com/@digitech',
  //       },
  //       video_files: [
  //         {
  //           id: 61368,
  //           quality: 'hd',
  //           file_type: 'video/mp4',
  //           width: 1920,
  //           height: 1080,
  //           link: 'https://player.vimeo.com/external/296210754.hd.mp4?s=08c03c14c04f15d65901f25b542eb2305090a3d7&profile_id=175&oauth2_token_id=57447761',
  //         },
  //         {
  //           id: 61369,
  //           quality: 'sd',
  //           file_type: 'video/mp4',
  //           width: 960,
  //           height: 540,
  //           link: 'https://player.vimeo.com/external/296210754.sd.mp4?s=9db41d71fa61a2cc19757f656fc5c5c5ef9f69ec&profile_id=165&oauth2_token_id=57447761',
  //         },
  //         {
  //           id: 61370,
  //           quality: 'hd',
  //           file_type: 'video/mp4',
  //           width: 1280,
  //           height: 720,
  //           link: 'https://player.vimeo.com/external/296210754.hd.mp4?s=08c03c14c04f15d65901f25b542eb2305090a3d7&profile_id=174&oauth2_token_id=57447761',
  //         },
  //         {
  //           id: 61371,
  //           quality: 'sd',
  //           file_type: 'video/mp4',
  //           width: 640,
  //           height: 360,
  //           link: 'https://player.vimeo.com/external/296210754.sd.mp4?s=9db41d71fa61a2cc19757f656fc5c5c5ef9f69ec&profile_id=164&oauth2_token_id=57447761',
  //         },
  //         {
  //           id: 61372,
  //           quality: 'hls',
  //           file_type: 'video/mp4',
  //           width: null,
  //           height: null,
  //           link: 'https://player.vimeo.com/external/296210754.m3u8?s=e28800dd24f0ec70ada7d09201dc0fa728bd468b&oauth2_token_id=57447761',
  //         },
  //       ],
  //       video_pictures: [
  //         {
  //           id: 141547,
  //           nr: 0,
  //           picture:
  //             'https://images.pexels.com/videos/1526909/pictures/preview-0.jpg',
  //         },
  //         {
  //           id: 141548,
  //           nr: 1,
  //           picture:
  //             'https://images.pexels.com/videos/1526909/pictures/preview-1.jpg',
  //         },
  //         {
  //           id: 141549,
  //           nr: 2,
  //           picture:
  //             'https://images.pexels.com/videos/1526909/pictures/preview-2.jpg',
  //         },
  //         {
  //           id: 141550,
  //           nr: 3,
  //           picture:
  //             'https://images.pexels.com/videos/1526909/pictures/preview-3.jpg',
  //         },
  //         {
  //           id: 141551,
  //           nr: 4,
  //           picture:
  //             'https://images.pexels.com/videos/1526909/pictures/preview-4.jpg',
  //         },
  //         {
  //           id: 141552,
  //           nr: 5,
  //           picture:
  //             'https://images.pexels.com/videos/1526909/pictures/preview-5.jpg',
  //         },
  //         {
  //           id: 141553,
  //           nr: 6,
  //           picture:
  //             'https://images.pexels.com/videos/1526909/pictures/preview-6.jpg',
  //         },
  //         {
  //           id: 141554,
  //           nr: 7,
  //           picture:
  //             'https://images.pexels.com/videos/1526909/pictures/preview-7.jpg',
  //         },
  //         {
  //           id: 141555,
  //           nr: 8,
  //           picture:
  //             'https://images.pexels.com/videos/1526909/pictures/preview-8.jpg',
  //         },
  //         {
  //           id: 141556,
  //           nr: 9,
  //           picture:
  //             'https://images.pexels.com/videos/1526909/pictures/preview-9.jpg',
  //         },
  //         {
  //           id: 141557,
  //           nr: 10,
  //           picture:
  //             'https://images.pexels.com/videos/1526909/pictures/preview-10.jpg',
  //         },
  //         {
  //           id: 141558,
  //           nr: 11,
  //           picture:
  //             'https://images.pexels.com/videos/1526909/pictures/preview-11.jpg',
  //         },
  //         {
  //           id: 141559,
  //           nr: 12,
  //           picture:
  //             'https://images.pexels.com/videos/1526909/pictures/preview-12.jpg',
  //         },
  //         {
  //           id: 141560,
  //           nr: 13,
  //           picture:
  //             'https://images.pexels.com/videos/1526909/pictures/preview-13.jpg',
  //         },
  //         {
  //           id: 141561,
  //           nr: 14,
  //           picture:
  //             'https://images.pexels.com/videos/1526909/pictures/preview-14.jpg',
  //         },
  //       ],
  //     },
  //     {
  //       id: 1893746,
  //       width: 3840,
  //       height: 2160,
  //       duration: 39,
  //       full_res: null,
  //       tags: [],
  //       url: 'https://www.pexels.com/video/sea-waves-rushing-to-the-shore-1893746/',
  //       image:
  //         'https://images.pexels.com/videos/1893746/free-video-1893746.jpg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200',
  //       avg_color: null,
  //       user: {
  //         id: 100512,
  //         name: 'Alexandr Podvalny',
  //         url: 'https://www.pexels.com/@freestockpro',
  //       },
  //       video_files: [
  //         {
  //           id: 79125,
  //           quality: 'hd',
  //           file_type: 'video/mp4',
  //           width: 3840,
  //           height: 2160,
  //           link: 'https://player.vimeo.com/external/316515991.hd.mp4?s=bad7fee87e68c25e3da33d73799b8e23d8c932ac&profile_id=172&oauth2_token_id=57447761',
  //         },
  //         {
  //           id: 79126,
  //           quality: 'sd',
  //           file_type: 'video/mp4',
  //           width: 960,
  //           height: 540,
  //           link: 'https://player.vimeo.com/external/316515991.sd.mp4?s=babe7448872e4957f60a5d5062ed2df13f13d593&profile_id=165&oauth2_token_id=57447761',
  //         },
  //         {
  //           id: 79127,
  //           quality: 'hd',
  //           file_type: 'video/mp4',
  //           width: 1920,
  //           height: 1080,
  //           link: 'https://player.vimeo.com/external/316515991.hd.mp4?s=bad7fee87e68c25e3da33d73799b8e23d8c932ac&profile_id=175&oauth2_token_id=57447761',
  //         },
  //         {
  //           id: 79128,
  //           quality: 'hd',
  //           file_type: 'video/mp4',
  //           width: 2560,
  //           height: 1440,
  //           link: 'https://player.vimeo.com/external/316515991.hd.mp4?s=bad7fee87e68c25e3da33d73799b8e23d8c932ac&profile_id=170&oauth2_token_id=57447761',
  //         },
  //         {
  //           id: 79129,
  //           quality: 'hd',
  //           file_type: 'video/mp4',
  //           width: 1280,
  //           height: 720,
  //           link: 'https://player.vimeo.com/external/316515991.hd.mp4?s=bad7fee87e68c25e3da33d73799b8e23d8c932ac&profile_id=174&oauth2_token_id=57447761',
  //         },
  //         {
  //           id: 79130,
  //           quality: 'sd',
  //           file_type: 'video/mp4',
  //           width: 640,
  //           height: 360,
  //           link: 'https://player.vimeo.com/external/316515991.sd.mp4?s=babe7448872e4957f60a5d5062ed2df13f13d593&profile_id=164&oauth2_token_id=57447761',
  //         },
  //         {
  //           id: 79131,
  //           quality: 'hls',
  //           file_type: 'video/mp4',
  //           width: null,
  //           height: null,
  //           link: 'https://player.vimeo.com/external/316515991.m3u8?s=54fa6b28ee6630fcfe97ba505dbdecbaf7c665a2&oauth2_token_id=57447761',
  //         },
  //       ],
  //       video_pictures: [
  //         {
  //           id: 192030,
  //           nr: 0,
  //           picture:
  //             'https://images.pexels.com/videos/1893746/pictures/preview-0.jpg',
  //         },
  //         {
  //           id: 192031,
  //           nr: 1,
  //           picture:
  //             'https://images.pexels.com/videos/1893746/pictures/preview-1.jpg',
  //         },
  //         {
  //           id: 192032,
  //           nr: 2,
  //           picture:
  //             'https://images.pexels.com/videos/1893746/pictures/preview-2.jpg',
  //         },
  //         {
  //           id: 192033,
  //           nr: 3,
  //           picture:
  //             'https://images.pexels.com/videos/1893746/pictures/preview-3.jpg',
  //         },
  //         {
  //           id: 192034,
  //           nr: 4,
  //           picture:
  //             'https://images.pexels.com/videos/1893746/pictures/preview-4.jpg',
  //         },
  //         {
  //           id: 192035,
  //           nr: 5,
  //           picture:
  //             'https://images.pexels.com/videos/1893746/pictures/preview-5.jpg',
  //         },
  //         {
  //           id: 192036,
  //           nr: 6,
  //           picture:
  //             'https://images.pexels.com/videos/1893746/pictures/preview-6.jpg',
  //         },
  //         {
  //           id: 192037,
  //           nr: 7,
  //           picture:
  //             'https://images.pexels.com/videos/1893746/pictures/preview-7.jpg',
  //         },
  //         {
  //           id: 192038,
  //           nr: 8,
  //           picture:
  //             'https://images.pexels.com/videos/1893746/pictures/preview-8.jpg',
  //         },
  //         {
  //           id: 192039,
  //           nr: 9,
  //           picture:
  //             'https://images.pexels.com/videos/1893746/pictures/preview-9.jpg',
  //         },
  //         {
  //           id: 192040,
  //           nr: 10,
  //           picture:
  //             'https://images.pexels.com/videos/1893746/pictures/preview-10.jpg',
  //         },
  //         {
  //           id: 192041,
  //           nr: 11,
  //           picture:
  //             'https://images.pexels.com/videos/1893746/pictures/preview-11.jpg',
  //         },
  //         {
  //           id: 192042,
  //           nr: 12,
  //           picture:
  //             'https://images.pexels.com/videos/1893746/pictures/preview-12.jpg',
  //         },
  //         {
  //           id: 192043,
  //           nr: 13,
  //           picture:
  //             'https://images.pexels.com/videos/1893746/pictures/preview-13.jpg',
  //         },
  //         {
  //           id: 192044,
  //           nr: 14,
  //           picture:
  //             'https://images.pexels.com/videos/1893746/pictures/preview-14.jpg',
  //         },
  //       ],
  //     },
  //     {
  //       id: 3571264,
  //       width: 3840,
  //       height: 2160,
  //       duration: 33,
  //       full_res: null,
  //       tags: [],
  //       url: 'https://www.pexels.com/video/drone-view-of-big-waves-rushing-to-the-shore-3571264/',
  //       image:
  //         'https://images.pexels.com/videos/3571264/free-video-3571264.jpg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200',
  //       avg_color: null,
  //       user: {
  //         id: 1498112,
  //         name: 'Enrique Hoyos',
  //         url: 'https://www.pexels.com/@enriquehoyos',
  //       },
  //       video_files: [
  //         {
  //           id: 368793,
  //           quality: 'sd',
  //           file_type: 'video/mp4',
  //           width: 960,
  //           height: 540,
  //           link: 'https://player.vimeo.com/external/384761655.sd.mp4?s=383ab4dbc773cd0d5ece3af208d8f963368f67e4&profile_id=165&oauth2_token_id=57447761',
  //         },
  //         {
  //           id: 368794,
  //           quality: 'sd',
  //           file_type: 'video/mp4',
  //           width: 426,
  //           height: 240,
  //           link: 'https://player.vimeo.com/external/384761655.sd.mp4?s=383ab4dbc773cd0d5ece3af208d8f963368f67e4&profile_id=139&oauth2_token_id=57447761',
  //         },
  //         {
  //           id: 368795,
  //           quality: 'hd',
  //           file_type: 'video/mp4',
  //           width: 2560,
  //           height: 1440,
  //           link: 'https://player.vimeo.com/external/384761655.hd.mp4?s=5eecd63d94629aa928726912a5601a7577a3ca8a&profile_id=170&oauth2_token_id=57447761',
  //         },
  //         {
  //           id: 368796,
  //           quality: 'hd',
  //           file_type: 'video/mp4',
  //           width: 1280,
  //           height: 720,
  //           link: 'https://player.vimeo.com/external/384761655.hd.mp4?s=5eecd63d94629aa928726912a5601a7577a3ca8a&profile_id=174&oauth2_token_id=57447761',
  //         },
  //         {
  //           id: 368797,
  //           quality: 'sd',
  //           file_type: 'video/mp4',
  //           width: 640,
  //           height: 360,
  //           link: 'https://player.vimeo.com/external/384761655.sd.mp4?s=383ab4dbc773cd0d5ece3af208d8f963368f67e4&profile_id=164&oauth2_token_id=57447761',
  //         },
  //         {
  //           id: 368798,
  //           quality: 'hd',
  //           file_type: 'video/mp4',
  //           width: 3840,
  //           height: 2160,
  //           link: 'https://player.vimeo.com/external/384761655.hd.mp4?s=5eecd63d94629aa928726912a5601a7577a3ca8a&profile_id=172&oauth2_token_id=57447761',
  //         },
  //         {
  //           id: 368799,
  //           quality: 'hd',
  //           file_type: 'video/mp4',
  //           width: 1920,
  //           height: 1080,
  //           link: 'https://player.vimeo.com/external/384761655.hd.mp4?s=5eecd63d94629aa928726912a5601a7577a3ca8a&profile_id=175&oauth2_token_id=57447761',
  //         },
  //         {
  //           id: 368800,
  //           quality: 'hls',
  //           file_type: 'video/mp4',
  //           width: null,
  //           height: null,
  //           link: 'https://player.vimeo.com/external/384761655.m3u8?s=98f0c4fc2fd9973ff5372c4f300117c8f9bb5953&oauth2_token_id=57447761',
  //         },
  //       ],
  //       video_pictures: [
  //         {
  //           id: 815098,
  //           nr: 0,
  //           picture:
  //             'https://images.pexels.com/videos/3571264/pictures/preview-0.jpg',
  //         },
  //         {
  //           id: 815099,
  //           nr: 1,
  //           picture:
  //             'https://images.pexels.com/videos/3571264/pictures/preview-1.jpg',
  //         },
  //         {
  //           id: 815100,
  //           nr: 2,
  //           picture:
  //             'https://images.pexels.com/videos/3571264/pictures/preview-2.jpg',
  //         },
  //         {
  //           id: 815101,
  //           nr: 3,
  //           picture:
  //             'https://images.pexels.com/videos/3571264/pictures/preview-3.jpg',
  //         },
  //         {
  //           id: 815102,
  //           nr: 4,
  //           picture:
  //             'https://images.pexels.com/videos/3571264/pictures/preview-4.jpg',
  //         },
  //         {
  //           id: 815103,
  //           nr: 5,
  //           picture:
  //             'https://images.pexels.com/videos/3571264/pictures/preview-5.jpg',
  //         },
  //         {
  //           id: 815104,
  //           nr: 6,
  //           picture:
  //             'https://images.pexels.com/videos/3571264/pictures/preview-6.jpg',
  //         },
  //         {
  //           id: 815105,
  //           nr: 7,
  //           picture:
  //             'https://images.pexels.com/videos/3571264/pictures/preview-7.jpg',
  //         },
  //         {
  //           id: 815106,
  //           nr: 8,
  //           picture:
  //             'https://images.pexels.com/videos/3571264/pictures/preview-8.jpg',
  //         },
  //         {
  //           id: 815107,
  //           nr: 9,
  //           picture:
  //             'https://images.pexels.com/videos/3571264/pictures/preview-9.jpg',
  //         },
  //         {
  //           id: 815108,
  //           nr: 10,
  //           picture:
  //             'https://images.pexels.com/videos/3571264/pictures/preview-10.jpg',
  //         },
  //         {
  //           id: 815109,
  //           nr: 11,
  //           picture:
  //             'https://images.pexels.com/videos/3571264/pictures/preview-11.jpg',
  //         },
  //         {
  //           id: 815110,
  //           nr: 12,
  //           picture:
  //             'https://images.pexels.com/videos/3571264/pictures/preview-12.jpg',
  //         },
  //         {
  //           id: 815111,
  //           nr: 13,
  //           picture:
  //             'https://images.pexels.com/videos/3571264/pictures/preview-13.jpg',
  //         },
  //         {
  //           id: 815112,
  //           nr: 14,
  //           picture:
  //             'https://images.pexels.com/videos/3571264/pictures/preview-14.jpg',
  //         },
  //       ],
  //     },
  //     {
  //       id: 1093664,
  //       width: 1920,
  //       height: 1080,
  //       duration: 9,
  //       full_res: null,
  //       tags: [],
  //       url: 'https://www.pexels.com/video/man-holding-a-surfboard-1093664/',
  //       image:
  //         'https://images.pexels.com/videos/1093664/free-video-1093664.jpg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200',
  //       avg_color: null,
  //       user: {
  //         id: 417939,
  //         name: 'Peter Fowler',
  //         url: 'https://www.pexels.com/@peter-fowler-417939',
  //       },
  //       video_files: [
  //         {
  //           id: 37116,
  //           quality: 'hd',
  //           file_type: 'video/mp4',
  //           width: 1280,
  //           height: 720,
  //           link: 'https://player.vimeo.com/external/269972367.hd.mp4?s=dcbd0e4c1ff85344759a185fcffef897184e5ee1&profile_id=174&oauth2_token_id=57447761',
  //         },
  //         {
  //           id: 37117,
  //           quality: 'sd',
  //           file_type: 'video/mp4',
  //           width: 640,
  //           height: 360,
  //           link: 'https://player.vimeo.com/external/269972367.sd.mp4?s=fa11ed426cbb0ce7fbbef1625f2ecf38d775995c&profile_id=164&oauth2_token_id=57447761',
  //         },
  //         {
  //           id: 37118,
  //           quality: 'sd',
  //           file_type: 'video/mp4',
  //           width: 960,
  //           height: 540,
  //           link: 'https://player.vimeo.com/external/269972367.sd.mp4?s=fa11ed426cbb0ce7fbbef1625f2ecf38d775995c&profile_id=165&oauth2_token_id=57447761',
  //         },
  //         {
  //           id: 37119,
  //           quality: 'hd',
  //           file_type: 'video/mp4',
  //           width: 1920,
  //           height: 1080,
  //           link: 'https://player.vimeo.com/external/269972367.hd.mp4?s=dcbd0e4c1ff85344759a185fcffef897184e5ee1&profile_id=175&oauth2_token_id=57447761',
  //         },
  //         {
  //           id: 37120,
  //           quality: 'hls',
  //           file_type: 'video/mp4',
  //           width: null,
  //           height: null,
  //           link: 'https://player.vimeo.com/external/269972367.m3u8?s=c5c4a6729e4dbf18bb9c28f429512b18670c6d50&oauth2_token_id=57447761',
  //         },
  //       ],
  //       video_pictures: [
  //         {
  //           id: 79726,
  //           nr: 0,
  //           picture:
  //             'https://images.pexels.com/videos/1093664/pictures/preview-0.jpg',
  //         },
  //         {
  //           id: 79727,
  //           nr: 1,
  //           picture:
  //             'https://images.pexels.com/videos/1093664/pictures/preview-1.jpg',
  //         },
  //         {
  //           id: 79728,
  //           nr: 2,
  //           picture:
  //             'https://images.pexels.com/videos/1093664/pictures/preview-2.jpg',
  //         },
  //         {
  //           id: 79729,
  //           nr: 3,
  //           picture:
  //             'https://images.pexels.com/videos/1093664/pictures/preview-3.jpg',
  //         },
  //         {
  //           id: 79730,
  //           nr: 4,
  //           picture:
  //             'https://images.pexels.com/videos/1093664/pictures/preview-4.jpg',
  //         },
  //         {
  //           id: 79731,
  //           nr: 5,
  //           picture:
  //             'https://images.pexels.com/videos/1093664/pictures/preview-5.jpg',
  //         },
  //         {
  //           id: 79732,
  //           nr: 6,
  //           picture:
  //             'https://images.pexels.com/videos/1093664/pictures/preview-6.jpg',
  //         },
  //         {
  //           id: 79733,
  //           nr: 7,
  //           picture:
  //             'https://images.pexels.com/videos/1093664/pictures/preview-7.jpg',
  //         },
  //         {
  //           id: 79734,
  //           nr: 8,
  //           picture:
  //             'https://images.pexels.com/videos/1093664/pictures/preview-8.jpg',
  //         },
  //         {
  //           id: 79735,
  //           nr: 9,
  //           picture:
  //             'https://images.pexels.com/videos/1093664/pictures/preview-9.jpg',
  //         },
  //         {
  //           id: 79736,
  //           nr: 10,
  //           picture:
  //             'https://images.pexels.com/videos/1093664/pictures/preview-10.jpg',
  //         },
  //         {
  //           id: 79737,
  //           nr: 11,
  //           picture:
  //             'https://images.pexels.com/videos/1093664/pictures/preview-11.jpg',
  //         },
  //         {
  //           id: 79738,
  //           nr: 12,
  //           picture:
  //             'https://images.pexels.com/videos/1093664/pictures/preview-12.jpg',
  //         },
  //         {
  //           id: 79739,
  //           nr: 13,
  //           picture:
  //             'https://images.pexels.com/videos/1093664/pictures/preview-13.jpg',
  //         },
  //         {
  //           id: 79740,
  //           nr: 14,
  //           picture:
  //             'https://images.pexels.com/videos/1093664/pictures/preview-14.jpg',
  //         },
  //       ],
  //     },
  //     {
  //       id: 2257010,
  //       width: 3840,
  //       height: 2160,
  //       duration: 15,
  //       full_res: null,
  //       tags: [],
  //       url: 'https://www.pexels.com/video/a-sailing-fishing-boat-2257010/',
  //       image:
  //         'https://images.pexels.com/videos/2257010/free-video-2257010.jpg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200',
  //       avg_color: null,
  //       user: {
  //         id: 1179532,
  //         name: 'Kelly L',
  //         url: 'https://www.pexels.com/@kelly-l-1179532',
  //       },
  //       video_files: [
  //         {
  //           id: 100075,
  //           quality: 'hd',
  //           file_type: 'video/mp4',
  //           width: 1280,
  //           height: 720,
  //           link: 'https://player.vimeo.com/external/333575697.hd.mp4?s=b73f4f342a92f8101d983c32eb5502966416076d&profile_id=174&oauth2_token_id=57447761',
  //         },
  //         {
  //           id: 100076,
  //           quality: 'sd',
  //           file_type: 'video/mp4',
  //           width: 960,
  //           height: 540,
  //           link: 'https://player.vimeo.com/external/333575697.sd.mp4?s=081ead0e9e9e4f3dc1109007e7261d36155ab6e6&profile_id=165&oauth2_token_id=57447761',
  //         },
  //         {
  //           id: 100077,
  //           quality: 'sd',
  //           file_type: 'video/mp4',
  //           width: 426,
  //           height: 240,
  //           link: 'https://player.vimeo.com/external/333575697.sd.mp4?s=081ead0e9e9e4f3dc1109007e7261d36155ab6e6&profile_id=139&oauth2_token_id=57447761',
  //         },
  //         {
  //           id: 100078,
  //           quality: 'hd',
  //           file_type: 'video/mp4',
  //           width: 2560,
  //           height: 1440,
  //           link: 'https://player.vimeo.com/external/333575697.hd.mp4?s=b73f4f342a92f8101d983c32eb5502966416076d&profile_id=170&oauth2_token_id=57447761',
  //         },
  //         {
  //           id: 100079,
  //           quality: 'sd',
  //           file_type: 'video/mp4',
  //           width: 640,
  //           height: 360,
  //           link: 'https://player.vimeo.com/external/333575697.sd.mp4?s=081ead0e9e9e4f3dc1109007e7261d36155ab6e6&profile_id=164&oauth2_token_id=57447761',
  //         },
  //         {
  //           id: 100080,
  //           quality: 'hd',
  //           file_type: 'video/mp4',
  //           width: 3840,
  //           height: 2160,
  //           link: 'https://player.vimeo.com/external/333575697.hd.mp4?s=b73f4f342a92f8101d983c32eb5502966416076d&profile_id=172&oauth2_token_id=57447761',
  //         },
  //         {
  //           id: 100081,
  //           quality: 'hd',
  //           file_type: 'video/mp4',
  //           width: 1920,
  //           height: 1080,
  //           link: 'https://player.vimeo.com/external/333575697.hd.mp4?s=b73f4f342a92f8101d983c32eb5502966416076d&profile_id=175&oauth2_token_id=57447761',
  //         },
  //         {
  //           id: 100082,
  //           quality: 'hls',
  //           file_type: 'video/mp4',
  //           width: null,
  //           height: null,
  //           link: 'https://player.vimeo.com/external/333575697.m3u8?s=c44d7037bac090000d5c924bb885ad166c8aaad8&oauth2_token_id=57447761',
  //         },
  //       ],
  //       video_pictures: [
  //         {
  //           id: 250718,
  //           nr: 0,
  //           picture:
  //             'https://images.pexels.com/videos/2257010/pictures/preview-0.jpg',
  //         },
  //         {
  //           id: 250720,
  //           nr: 1,
  //           picture:
  //             'https://images.pexels.com/videos/2257010/pictures/preview-1.jpg',
  //         },
  //         {
  //           id: 250722,
  //           nr: 2,
  //           picture:
  //             'https://images.pexels.com/videos/2257010/pictures/preview-2.jpg',
  //         },
  //         {
  //           id: 250724,
  //           nr: 3,
  //           picture:
  //             'https://images.pexels.com/videos/2257010/pictures/preview-3.jpg',
  //         },
  //         {
  //           id: 250726,
  //           nr: 4,
  //           picture:
  //             'https://images.pexels.com/videos/2257010/pictures/preview-4.jpg',
  //         },
  //         {
  //           id: 250728,
  //           nr: 5,
  //           picture:
  //             'https://images.pexels.com/videos/2257010/pictures/preview-5.jpg',
  //         },
  //         {
  //           id: 250730,
  //           nr: 6,
  //           picture:
  //             'https://images.pexels.com/videos/2257010/pictures/preview-6.jpg',
  //         },
  //         {
  //           id: 250733,
  //           nr: 7,
  //           picture:
  //             'https://images.pexels.com/videos/2257010/pictures/preview-7.jpg',
  //         },
  //         {
  //           id: 250734,
  //           nr: 8,
  //           picture:
  //             'https://images.pexels.com/videos/2257010/pictures/preview-8.jpg',
  //         },
  //         {
  //           id: 250736,
  //           nr: 9,
  //           picture:
  //             'https://images.pexels.com/videos/2257010/pictures/preview-9.jpg',
  //         },
  //         {
  //           id: 250738,
  //           nr: 10,
  //           picture:
  //             'https://images.pexels.com/videos/2257010/pictures/preview-10.jpg',
  //         },
  //         {
  //           id: 250739,
  //           nr: 11,
  //           picture:
  //             'https://images.pexels.com/videos/2257010/pictures/preview-11.jpg',
  //         },
  //         {
  //           id: 250742,
  //           nr: 12,
  //           picture:
  //             'https://images.pexels.com/videos/2257010/pictures/preview-12.jpg',
  //         },
  //         {
  //           id: 250744,
  //           nr: 13,
  //           picture:
  //             'https://images.pexels.com/videos/2257010/pictures/preview-13.jpg',
  //         },
  //         {
  //           id: 250746,
  //           nr: 14,
  //           picture:
  //             'https://images.pexels.com/videos/2257010/pictures/preview-14.jpg',
  //         },
  //       ],
  //     },
  //     {
  //       id: 3326847,
  //       width: 1920,
  //       height: 1080,
  //       duration: 8,
  //       full_res: null,
  //       tags: [],
  //       url: 'https://www.pexels.com/video/view-of-the-table-mountain-of-cape-town-from-a-beach-shore-3326847/',
  //       image:
  //         'https://images.pexels.com/videos/3326847/free-video-3326847.jpg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200',
  //       avg_color: null,
  //       user: {
  //         id: 1522664,
  //         name: 'Taryn Elliott',
  //         url: 'https://www.pexels.com/@taryn-elliott',
  //       },
  //       video_files: [
  //         {
  //           id: 306641,
  //           quality: 'sd',
  //           file_type: 'video/mp4',
  //           width: 426,
  //           height: 240,
  //           link: 'https://player.vimeo.com/external/377068266.sd.mp4?s=a84892f128cc3dfb23266e7cbb9aea31f5c1be37&profile_id=139&oauth2_token_id=57447761',
  //         },
  //         {
  //           id: 306642,
  //           quality: 'sd',
  //           file_type: 'video/mp4',
  //           width: 640,
  //           height: 360,
  //           link: 'https://player.vimeo.com/external/377068266.sd.mp4?s=a84892f128cc3dfb23266e7cbb9aea31f5c1be37&profile_id=164&oauth2_token_id=57447761',
  //         },
  //         {
  //           id: 306643,
  //           quality: 'hd',
  //           file_type: 'video/mp4',
  //           width: 1280,
  //           height: 720,
  //           link: 'https://player.vimeo.com/external/377068266.hd.mp4?s=b4c006377ad8c81e0184c0fd77871f81ac5802f0&profile_id=174&oauth2_token_id=57447761',
  //         },
  //         {
  //           id: 306644,
  //           quality: 'sd',
  //           file_type: 'video/mp4',
  //           width: 960,
  //           height: 540,
  //           link: 'https://player.vimeo.com/external/377068266.sd.mp4?s=a84892f128cc3dfb23266e7cbb9aea31f5c1be37&profile_id=165&oauth2_token_id=57447761',
  //         },
  //         {
  //           id: 306645,
  //           quality: 'hd',
  //           file_type: 'video/mp4',
  //           width: 1920,
  //           height: 1080,
  //           link: 'https://player.vimeo.com/external/377068266.hd.mp4?s=b4c006377ad8c81e0184c0fd77871f81ac5802f0&profile_id=175&oauth2_token_id=57447761',
  //         },
  //         {
  //           id: 306646,
  //           quality: 'hls',
  //           file_type: 'video/mp4',
  //           width: null,
  //           height: null,
  //           link: 'https://player.vimeo.com/external/377068266.m3u8?s=56a2a61c665a4c7af88c8a092f55affd803fa83c&oauth2_token_id=57447761',
  //         },
  //       ],
  //       video_pictures: [
  //         {
  //           id: 698110,
  //           nr: 0,
  //           picture:
  //             'https://images.pexels.com/videos/3326847/pictures/preview-0.jpg',
  //         },
  //         {
  //           id: 698111,
  //           nr: 1,
  //           picture:
  //             'https://images.pexels.com/videos/3326847/pictures/preview-1.jpg',
  //         },
  //         {
  //           id: 698112,
  //           nr: 2,
  //           picture:
  //             'https://images.pexels.com/videos/3326847/pictures/preview-2.jpg',
  //         },
  //         {
  //           id: 698113,
  //           nr: 3,
  //           picture:
  //             'https://images.pexels.com/videos/3326847/pictures/preview-3.jpg',
  //         },
  //         {
  //           id: 698114,
  //           nr: 4,
  //           picture:
  //             'https://images.pexels.com/videos/3326847/pictures/preview-4.jpg',
  //         },
  //         {
  //           id: 698115,
  //           nr: 5,
  //           picture:
  //             'https://images.pexels.com/videos/3326847/pictures/preview-5.jpg',
  //         },
  //         {
  //           id: 698116,
  //           nr: 6,
  //           picture:
  //             'https://images.pexels.com/videos/3326847/pictures/preview-6.jpg',
  //         },
  //         {
  //           id: 698117,
  //           nr: 7,
  //           picture:
  //             'https://images.pexels.com/videos/3326847/pictures/preview-7.jpg',
  //         },
  //         {
  //           id: 698118,
  //           nr: 8,
  //           picture:
  //             'https://images.pexels.com/videos/3326847/pictures/preview-8.jpg',
  //         },
  //         {
  //           id: 698119,
  //           nr: 9,
  //           picture:
  //             'https://images.pexels.com/videos/3326847/pictures/preview-9.jpg',
  //         },
  //         {
  //           id: 698120,
  //           nr: 10,
  //           picture:
  //             'https://images.pexels.com/videos/3326847/pictures/preview-10.jpg',
  //         },
  //         {
  //           id: 698122,
  //           nr: 11,
  //           picture:
  //             'https://images.pexels.com/videos/3326847/pictures/preview-11.jpg',
  //         },
  //         {
  //           id: 698124,
  //           nr: 12,
  //           picture:
  //             'https://images.pexels.com/videos/3326847/pictures/preview-12.jpg',
  //         },
  //         {
  //           id: 698126,
  //           nr: 13,
  //           picture:
  //             'https://images.pexels.com/videos/3326847/pictures/preview-13.jpg',
  //         },
  //         {
  //           id: 698128,
  //           nr: 14,
  //           picture:
  //             'https://images.pexels.com/videos/3326847/pictures/preview-14.jpg',
  //         },
  //       ],
  //     },
  //     {
  //       id: 1893625,
  //       width: 3840,
  //       height: 2160,
  //       duration: 45,
  //       full_res: null,
  //       tags: [],
  //       url: 'https://www.pexels.com/video/view-of-a-golden-sunset-1893625/',
  //       image:
  //         'https://images.pexels.com/videos/1893625/free-video-1893625.jpg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200',
  //       avg_color: null,
  //       user: {
  //         id: 100512,
  //         name: 'Alexandr Podvalny',
  //         url: 'https://www.pexels.com/@freestockpro',
  //       },
  //       video_files: [
  //         {
  //           id: 79069,
  //           quality: 'hd',
  //           file_type: 'video/mp4',
  //           width: 3840,
  //           height: 2160,
  //           link: 'https://player.vimeo.com/external/316508634.hd.mp4?s=4956ea7571d26223de70a0fce4d7a60a8ff57bdf&profile_id=172&oauth2_token_id=57447761',
  //         },
  //         {
  //           id: 79070,
  //           quality: 'hd',
  //           file_type: 'video/mp4',
  //           width: 1920,
  //           height: 1080,
  //           link: 'https://player.vimeo.com/external/316508634.hd.mp4?s=4956ea7571d26223de70a0fce4d7a60a8ff57bdf&profile_id=175&oauth2_token_id=57447761',
  //         },
  //         {
  //           id: 79071,
  //           quality: 'sd',
  //           file_type: 'video/mp4',
  //           width: 960,
  //           height: 540,
  //           link: 'https://player.vimeo.com/external/316508634.sd.mp4?s=e9793061c07753a202a0cfa59ae6f37eed7098bb&profile_id=165&oauth2_token_id=57447761',
  //         },
  //         {
  //           id: 79072,
  //           quality: 'hd',
  //           file_type: 'video/mp4',
  //           width: 2560,
  //           height: 1440,
  //           link: 'https://player.vimeo.com/external/316508634.hd.mp4?s=4956ea7571d26223de70a0fce4d7a60a8ff57bdf&profile_id=170&oauth2_token_id=57447761',
  //         },
  //         {
  //           id: 79073,
  //           quality: 'hd',
  //           file_type: 'video/mp4',
  //           width: 1280,
  //           height: 720,
  //           link: 'https://player.vimeo.com/external/316508634.hd.mp4?s=4956ea7571d26223de70a0fce4d7a60a8ff57bdf&profile_id=174&oauth2_token_id=57447761',
  //         },
  //         {
  //           id: 79074,
  //           quality: 'sd',
  //           file_type: 'video/mp4',
  //           width: 640,
  //           height: 360,
  //           link: 'https://player.vimeo.com/external/316508634.sd.mp4?s=e9793061c07753a202a0cfa59ae6f37eed7098bb&profile_id=164&oauth2_token_id=57447761',
  //         },
  //         {
  //           id: 79075,
  //           quality: 'hls',
  //           file_type: 'video/mp4',
  //           width: null,
  //           height: null,
  //           link: 'https://player.vimeo.com/external/316508634.m3u8?s=c35aa168b24f5a893e0c4608a6b7bb6de52f38ff&oauth2_token_id=57447761',
  //         },
  //       ],
  //       video_pictures: [
  //         {
  //           id: 191970,
  //           nr: 0,
  //           picture:
  //             'https://images.pexels.com/videos/1893625/pictures/preview-0.jpg',
  //         },
  //         {
  //           id: 191971,
  //           nr: 1,
  //           picture:
  //             'https://images.pexels.com/videos/1893625/pictures/preview-1.jpg',
  //         },
  //         {
  //           id: 191972,
  //           nr: 2,
  //           picture:
  //             'https://images.pexels.com/videos/1893625/pictures/preview-2.jpg',
  //         },
  //         {
  //           id: 191973,
  //           nr: 3,
  //           picture:
  //             'https://images.pexels.com/videos/1893625/pictures/preview-3.jpg',
  //         },
  //         {
  //           id: 191974,
  //           nr: 4,
  //           picture:
  //             'https://images.pexels.com/videos/1893625/pictures/preview-4.jpg',
  //         },
  //         {
  //           id: 191975,
  //           nr: 5,
  //           picture:
  //             'https://images.pexels.com/videos/1893625/pictures/preview-5.jpg',
  //         },
  //         {
  //           id: 191976,
  //           nr: 6,
  //           picture:
  //             'https://images.pexels.com/videos/1893625/pictures/preview-6.jpg',
  //         },
  //         {
  //           id: 191977,
  //           nr: 7,
  //           picture:
  //             'https://images.pexels.com/videos/1893625/pictures/preview-7.jpg',
  //         },
  //         {
  //           id: 191978,
  //           nr: 8,
  //           picture:
  //             'https://images.pexels.com/videos/1893625/pictures/preview-8.jpg',
  //         },
  //         {
  //           id: 191979,
  //           nr: 9,
  //           picture:
  //             'https://images.pexels.com/videos/1893625/pictures/preview-9.jpg',
  //         },
  //         {
  //           id: 191980,
  //           nr: 10,
  //           picture:
  //             'https://images.pexels.com/videos/1893625/pictures/preview-10.jpg',
  //         },
  //         {
  //           id: 191981,
  //           nr: 11,
  //           picture:
  //             'https://images.pexels.com/videos/1893625/pictures/preview-11.jpg',
  //         },
  //         {
  //           id: 191982,
  //           nr: 12,
  //           picture:
  //             'https://images.pexels.com/videos/1893625/pictures/preview-12.jpg',
  //         },
  //         {
  //           id: 191983,
  //           nr: 13,
  //           picture:
  //             'https://images.pexels.com/videos/1893625/pictures/preview-13.jpg',
  //         },
  //         {
  //           id: 191984,
  //           nr: 14,
  //           picture:
  //             'https://images.pexels.com/videos/1893625/pictures/preview-14.jpg',
  //         },
  //       ],
  //     },
  //     {
  //       id: 4441009,
  //       width: 1920,
  //       height: 1080,
  //       duration: 26,
  //       full_res: null,
  //       tags: [],
  //       url: 'https://www.pexels.com/video/waves-rushing-to-seashore-in-slow-motion-4441009/',
  //       image:
  //         'https://images.pexels.com/videos/4441009/pexels-photo-4441009.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200',
  //       avg_color: null,
  //       user: {
  //         id: 1437723,
  //         name: 'cottonbro',
  //         url: 'https://www.pexels.com/@cottonbro',
  //       },
  //       video_files: [
  //         {
  //           id: 774883,
  //           quality: 'sd',
  //           file_type: 'video/mp4',
  //           width: 426,
  //           height: 240,
  //           link: 'https://player.vimeo.com/external/420604525.sd.mp4?s=a61820d6be797373565c65909514df7ed559959b&profile_id=139&oauth2_token_id=57447761',
  //         },
  //         {
  //           id: 774884,
  //           quality: 'hd',
  //           file_type: 'video/mp4',
  //           width: 1920,
  //           height: 1080,
  //           link: 'https://player.vimeo.com/external/420604525.hd.mp4?s=70b8eeebb91b47d1ea7b09848e51d4170267d355&profile_id=169&oauth2_token_id=57447761',
  //         },
  //         {
  //           id: 774885,
  //           quality: 'hd',
  //           file_type: 'video/mp4',
  //           width: 1280,
  //           height: 720,
  //           link: 'https://player.vimeo.com/external/420604525.hd.mp4?s=70b8eeebb91b47d1ea7b09848e51d4170267d355&profile_id=174&oauth2_token_id=57447761',
  //         },
  //         {
  //           id: 774886,
  //           quality: 'sd',
  //           file_type: 'video/mp4',
  //           width: 640,
  //           height: 360,
  //           link: 'https://player.vimeo.com/external/420604525.sd.mp4?s=a61820d6be797373565c65909514df7ed559959b&profile_id=164&oauth2_token_id=57447761',
  //         },
  //         {
  //           id: 774887,
  //           quality: 'sd',
  //           file_type: 'video/mp4',
  //           width: 960,
  //           height: 540,
  //           link: 'https://player.vimeo.com/external/420604525.sd.mp4?s=a61820d6be797373565c65909514df7ed559959b&profile_id=165&oauth2_token_id=57447761',
  //         },
  //         {
  //           id: 774888,
  //           quality: 'hd',
  //           file_type: 'video/mp4',
  //           width: 1920,
  //           height: 1080,
  //           link: 'https://player.vimeo.com/external/420604525.hd.mp4?s=70b8eeebb91b47d1ea7b09848e51d4170267d355&profile_id=175&oauth2_token_id=57447761',
  //         },
  //         {
  //           id: 774889,
  //           quality: 'hls',
  //           file_type: 'video/mp4',
  //           width: null,
  //           height: null,
  //           link: 'https://player.vimeo.com/external/420604525.m3u8?s=04997fe82a93318ec59935880d1a87f1969ad79d&oauth2_token_id=57447761',
  //         },
  //       ],
  //       video_pictures: [
  //         {
  //           id: 1519009,
  //           nr: 0,
  //           picture:
  //             'https://images.pexels.com/videos/4441009/pictures/preview-0.jpg',
  //         },
  //         {
  //           id: 1519010,
  //           nr: 1,
  //           picture:
  //             'https://images.pexels.com/videos/4441009/pictures/preview-1.jpg',
  //         },
  //         {
  //           id: 1519011,
  //           nr: 2,
  //           picture:
  //             'https://images.pexels.com/videos/4441009/pictures/preview-2.jpg',
  //         },
  //         {
  //           id: 1519012,
  //           nr: 3,
  //           picture:
  //             'https://images.pexels.com/videos/4441009/pictures/preview-3.jpg',
  //         },
  //         {
  //           id: 1519013,
  //           nr: 4,
  //           picture:
  //             'https://images.pexels.com/videos/4441009/pictures/preview-4.jpg',
  //         },
  //         {
  //           id: 1519014,
  //           nr: 5,
  //           picture:
  //             'https://images.pexels.com/videos/4441009/pictures/preview-5.jpg',
  //         },
  //         {
  //           id: 1519015,
  //           nr: 6,
  //           picture:
  //             'https://images.pexels.com/videos/4441009/pictures/preview-6.jpg',
  //         },
  //         {
  //           id: 1519016,
  //           nr: 7,
  //           picture:
  //             'https://images.pexels.com/videos/4441009/pictures/preview-7.jpg',
  //         },
  //         {
  //           id: 1519017,
  //           nr: 8,
  //           picture:
  //             'https://images.pexels.com/videos/4441009/pictures/preview-8.jpg',
  //         },
  //         {
  //           id: 1519018,
  //           nr: 9,
  //           picture:
  //             'https://images.pexels.com/videos/4441009/pictures/preview-9.jpg',
  //         },
  //         {
  //           id: 1519019,
  //           nr: 10,
  //           picture:
  //             'https://images.pexels.com/videos/4441009/pictures/preview-10.jpg',
  //         },
  //         {
  //           id: 1519020,
  //           nr: 11,
  //           picture:
  //             'https://images.pexels.com/videos/4441009/pictures/preview-11.jpg',
  //         },
  //         {
  //           id: 1519021,
  //           nr: 12,
  //           picture:
  //             'https://images.pexels.com/videos/4441009/pictures/preview-12.jpg',
  //         },
  //         {
  //           id: 1519022,
  //           nr: 13,
  //           picture:
  //             'https://images.pexels.com/videos/4441009/pictures/preview-13.jpg',
  //         },
  //         {
  //           id: 1519023,
  //           nr: 14,
  //           picture:
  //             'https://images.pexels.com/videos/4441009/pictures/preview-14.jpg',
  //         },
  //       ],
  //     },
  //     {
  //       id: 6010489,
  //       width: 2160,
  //       height: 3840,
  //       duration: 16,
  //       full_res: null,
  //       tags: [],
  //       url: 'https://www.pexels.com/video/sea-waves-crashing-the-cliff-coast-6010489/',
  //       image:
  //         'https://images.pexels.com/videos/6010489/pexels-photo-6010489.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=630',
  //       avg_color: null,
  //       user: {
  //         id: 3088726,
  //         name: 'Tima Miroshnichenko',
  //         url: 'https://www.pexels.com/@tima-miroshnichenko',
  //       },
  //       video_files: [
  //         {
  //           id: 1875024,
  //           quality: 'hd',
  //           file_type: 'video/mp4',
  //           width: 1440,
  //           height: 2560,
  //           link: 'https://player.vimeo.com/external/484732151.hd.mp4?s=20890e99e28d8c495e57c2064c388f13581e17fb&profile_id=170&oauth2_token_id=57447761',
  //         },
  //         {
  //           id: 1875025,
  //           quality: 'hd',
  //           file_type: 'video/mp4',
  //           width: 2160,
  //           height: 3840,
  //           link: 'https://player.vimeo.com/external/484732151.hd.mp4?s=20890e99e28d8c495e57c2064c388f13581e17fb&profile_id=172&oauth2_token_id=57447761',
  //         },
  //         {
  //           id: 1875026,
  //           quality: 'hd',
  //           file_type: 'video/mp4',
  //           width: 1080,
  //           height: 1920,
  //           link: 'https://player.vimeo.com/external/484732151.hd.mp4?s=20890e99e28d8c495e57c2064c388f13581e17fb&profile_id=175&oauth2_token_id=57447761',
  //         },
  //         {
  //           id: 1875027,
  //           quality: 'sd',
  //           file_type: 'video/mp4',
  //           width: 360,
  //           height: 640,
  //           link: 'https://player.vimeo.com/external/484732151.sd.mp4?s=920e951e2eb3ff30c108209d9bf1f4a95c80918f&profile_id=164&oauth2_token_id=57447761',
  //         },
  //         {
  //           id: 1875028,
  //           quality: 'hd',
  //           file_type: 'video/mp4',
  //           width: 720,
  //           height: 1280,
  //           link: 'https://player.vimeo.com/external/484732151.hd.mp4?s=20890e99e28d8c495e57c2064c388f13581e17fb&profile_id=174&oauth2_token_id=57447761',
  //         },
  //         {
  //           id: 1875029,
  //           quality: 'sd',
  //           file_type: 'video/mp4',
  //           width: 540,
  //           height: 960,
  //           link: 'https://player.vimeo.com/external/484732151.sd.mp4?s=920e951e2eb3ff30c108209d9bf1f4a95c80918f&profile_id=165&oauth2_token_id=57447761',
  //         },
  //         {
  //           id: 1875030,
  //           quality: 'sd',
  //           file_type: 'video/mp4',
  //           width: 240,
  //           height: 426,
  //           link: 'https://player.vimeo.com/external/484732151.sd.mp4?s=920e951e2eb3ff30c108209d9bf1f4a95c80918f&profile_id=139&oauth2_token_id=57447761',
  //         },
  //         {
  //           id: 1875031,
  //           quality: 'hls',
  //           file_type: 'video/mp4',
  //           width: null,
  //           height: null,
  //           link: 'https://player.vimeo.com/external/484732151.m3u8?s=1536fb9daea842e4123b23e6970f264d6392fea3&oauth2_token_id=57447761',
  //         },
  //       ],
  //       video_pictures: [
  //         {
  //           id: 3763948,
  //           nr: 0,
  //           picture:
  //             'https://images.pexels.com/videos/6010489/pictures/preview-0.jpeg',
  //         },
  //         {
  //           id: 3763949,
  //           nr: 1,
  //           picture:
  //             'https://images.pexels.com/videos/6010489/pictures/preview-1.jpeg',
  //         },
  //         {
  //           id: 3763951,
  //           nr: 2,
  //           picture:
  //             'https://images.pexels.com/videos/6010489/pictures/preview-2.jpeg',
  //         },
  //         {
  //           id: 3763952,
  //           nr: 3,
  //           picture:
  //             'https://images.pexels.com/videos/6010489/pictures/preview-3.jpeg',
  //         },
  //         {
  //           id: 3763954,
  //           nr: 4,
  //           picture:
  //             'https://images.pexels.com/videos/6010489/pictures/preview-4.jpeg',
  //         },
  //         {
  //           id: 3763956,
  //           nr: 5,
  //           picture:
  //             'https://images.pexels.com/videos/6010489/pictures/preview-5.jpeg',
  //         },
  //         {
  //           id: 3763958,
  //           nr: 6,
  //           picture:
  //             'https://images.pexels.com/videos/6010489/pictures/preview-6.jpeg',
  //         },
  //         {
  //           id: 3763960,
  //           nr: 7,
  //           picture:
  //             'https://images.pexels.com/videos/6010489/pictures/preview-7.jpeg',
  //         },
  //         {
  //           id: 3763963,
  //           nr: 8,
  //           picture:
  //             'https://images.pexels.com/videos/6010489/pictures/preview-8.jpeg',
  //         },
  //         {
  //           id: 3763966,
  //           nr: 9,
  //           picture:
  //             'https://images.pexels.com/videos/6010489/pictures/preview-9.jpeg',
  //         },
  //         {
  //           id: 3763968,
  //           nr: 10,
  //           picture:
  //             'https://images.pexels.com/videos/6010489/pictures/preview-10.jpeg',
  //         },
  //         {
  //           id: 3763971,
  //           nr: 11,
  //           picture:
  //             'https://images.pexels.com/videos/6010489/pictures/preview-11.jpeg',
  //         },
  //         {
  //           id: 3763974,
  //           nr: 12,
  //           picture:
  //             'https://images.pexels.com/videos/6010489/pictures/preview-12.jpeg',
  //         },
  //         {
  //           id: 3763976,
  //           nr: 13,
  //           picture:
  //             'https://images.pexels.com/videos/6010489/pictures/preview-13.jpeg',
  //         },
  //         {
  //           id: 3763979,
  //           nr: 14,
  //           picture:
  //             'https://images.pexels.com/videos/6010489/pictures/preview-14.jpeg',
  //         },
  //       ],
  //     },
  //     {
  //       id: 7385122,
  //       width: 3840,
  //       height: 2160,
  //       duration: 6,
  //       full_res: null,
  //       tags: [],
  //       url: 'https://www.pexels.com/video/sea-sunset-water-blue-7385122/',
  //       image:
  //         'https://images.pexels.com/videos/7385122/4k-background-loop-ocean-7385122.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200',
  //       avg_color: null,
  //       user: {
  //         id: 3145660,
  //         name: 'Uzunov Rostislav',
  //         url: 'https://www.pexels.com/@rostislav',
  //       },
  //       video_files: [
  //         {
  //           id: 3007070,
  //           quality: 'hd',
  //           file_type: 'video/mp4',
  //           width: 1920,
  //           height: 1080,
  //           link: 'https://player.vimeo.com/external/532665758.hd.mp4?s=7c587f986e25ae587ae8967d990061f5c15ab50b&profile_id=175&oauth2_token_id=57447761',
  //         },
  //         {
  //           id: 3007071,
  //           quality: 'sd',
  //           file_type: 'video/mp4',
  //           width: 640,
  //           height: 360,
  //           link: 'https://player.vimeo.com/external/532665758.sd.mp4?s=1d2f7f8f2d642e28b23eef0c163d54e01cc2f389&profile_id=164&oauth2_token_id=57447761',
  //         },
  //         {
  //           id: 3007072,
  //           quality: 'hd',
  //           file_type: 'video/mp4',
  //           width: 3840,
  //           height: 2160,
  //           link: 'https://player.vimeo.com/external/532665758.hd.mp4?s=7c587f986e25ae587ae8967d990061f5c15ab50b&profile_id=172&oauth2_token_id=57447761',
  //         },
  //         {
  //           id: 3007073,
  //           quality: 'hd',
  //           file_type: 'video/mp4',
  //           width: 1280,
  //           height: 720,
  //           link: 'https://player.vimeo.com/external/532665758.hd.mp4?s=7c587f986e25ae587ae8967d990061f5c15ab50b&profile_id=174&oauth2_token_id=57447761',
  //         },
  //         {
  //           id: 3007074,
  //           quality: 'hd',
  //           file_type: 'video/mp4',
  //           width: 2560,
  //           height: 1440,
  //           link: 'https://player.vimeo.com/external/532665758.hd.mp4?s=7c587f986e25ae587ae8967d990061f5c15ab50b&profile_id=170&oauth2_token_id=57447761',
  //         },
  //         {
  //           id: 3007075,
  //           quality: 'sd',
  //           file_type: 'video/mp4',
  //           width: 960,
  //           height: 540,
  //           link: 'https://player.vimeo.com/external/532665758.sd.mp4?s=1d2f7f8f2d642e28b23eef0c163d54e01cc2f389&profile_id=165&oauth2_token_id=57447761',
  //         },
  //       ],
  //       video_pictures: [
  //         {
  //           id: 6309262,
  //           nr: 0,
  //           picture:
  //             'https://images.pexels.com/videos/7385122/pictures/preview-0.jpg',
  //         },
  //         {
  //           id: 6309293,
  //           nr: 1,
  //           picture:
  //             'https://images.pexels.com/videos/7385122/pictures/preview-1.jpg',
  //         },
  //         {
  //           id: 6309306,
  //           nr: 2,
  //           picture:
  //             'https://images.pexels.com/videos/7385122/pictures/preview-2.jpg',
  //         },
  //         {
  //           id: 6309316,
  //           nr: 3,
  //           picture:
  //             'https://images.pexels.com/videos/7385122/pictures/preview-3.jpg',
  //         },
  //         {
  //           id: 6309326,
  //           nr: 4,
  //           picture:
  //             'https://images.pexels.com/videos/7385122/pictures/preview-4.jpg',
  //         },
  //         {
  //           id: 6309339,
  //           nr: 5,
  //           picture:
  //             'https://images.pexels.com/videos/7385122/pictures/preview-5.jpg',
  //         },
  //         {
  //           id: 6309345,
  //           nr: 6,
  //           picture:
  //             'https://images.pexels.com/videos/7385122/pictures/preview-6.jpg',
  //         },
  //         {
  //           id: 6309356,
  //           nr: 7,
  //           picture:
  //             'https://images.pexels.com/videos/7385122/pictures/preview-7.jpg',
  //         },
  //         {
  //           id: 6309371,
  //           nr: 8,
  //           picture:
  //             'https://images.pexels.com/videos/7385122/pictures/preview-8.jpg',
  //         },
  //         {
  //           id: 6309389,
  //           nr: 9,
  //           picture:
  //             'https://images.pexels.com/videos/7385122/pictures/preview-9.jpg',
  //         },
  //         {
  //           id: 6309408,
  //           nr: 10,
  //           picture:
  //             'https://images.pexels.com/videos/7385122/pictures/preview-10.jpg',
  //         },
  //         {
  //           id: 6309417,
  //           nr: 11,
  //           picture:
  //             'https://images.pexels.com/videos/7385122/pictures/preview-11.jpg',
  //         },
  //         {
  //           id: 6309428,
  //           nr: 12,
  //           picture:
  //             'https://images.pexels.com/videos/7385122/pictures/preview-12.jpg',
  //         },
  //         {
  //           id: 6309446,
  //           nr: 13,
  //           picture:
  //             'https://images.pexels.com/videos/7385122/pictures/preview-13.jpg',
  //         },
  //         {
  //           id: 6309466,
  //           nr: 14,
  //           picture:
  //             'https://images.pexels.com/videos/7385122/pictures/preview-14.jpg',
  //         },
  //       ],
  //     },
  //     {
  //       id: 4328539,
  //       width: 3840,
  //       height: 2160,
  //       duration: 12,
  //       full_res: null,
  //       tags: [],
  //       url: 'https://www.pexels.com/video/sea-beach-blue-dolphins-4328539/',
  //       image:
  //         'https://images.pexels.com/videos/4328539/beach-blue-dolphin-dolphin-jumping-4328539.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200',
  //       avg_color: null,
  //       user: {
  //         id: 2653860,
  //         name: 'Jess Loiterton',
  //         url: 'https://www.pexels.com/@jess-vide',
  //       },
  //       video_files: [
  //         {
  //           id: 685999,
  //           quality: 'hd',
  //           file_type: 'video/mp4',
  //           width: 3840,
  //           height: 2160,
  //           link: 'https://player.vimeo.com/external/415278112.hd.mp4?s=f92d21b696ed89eebc56fca804c8db328ed3eb30&profile_id=172&oauth2_token_id=57447761',
  //         },
  //         {
  //           id: 686000,
  //           quality: 'hd',
  //           file_type: 'video/mp4',
  //           width: 1920,
  //           height: 1080,
  //           link: 'https://player.vimeo.com/external/415278112.hd.mp4?s=f92d21b696ed89eebc56fca804c8db328ed3eb30&profile_id=175&oauth2_token_id=57447761',
  //         },
  //         {
  //           id: 686001,
  //           quality: 'sd',
  //           file_type: 'video/mp4',
  //           width: 960,
  //           height: 540,
  //           link: 'https://player.vimeo.com/external/415278112.sd.mp4?s=78f1e08f9b98d9051fc8ff8229a20e13f7c76f80&profile_id=165&oauth2_token_id=57447761',
  //         },
  //         {
  //           id: 686002,
  //           quality: 'sd',
  //           file_type: 'video/mp4',
  //           width: 426,
  //           height: 240,
  //           link: 'https://player.vimeo.com/external/415278112.sd.mp4?s=78f1e08f9b98d9051fc8ff8229a20e13f7c76f80&profile_id=139&oauth2_token_id=57447761',
  //         },
  //         {
  //           id: 686003,
  //           quality: 'hd',
  //           file_type: 'video/mp4',
  //           width: 2560,
  //           height: 1440,
  //           link: 'https://player.vimeo.com/external/415278112.hd.mp4?s=f92d21b696ed89eebc56fca804c8db328ed3eb30&profile_id=170&oauth2_token_id=57447761',
  //         },
  //         {
  //           id: 686004,
  //           quality: 'sd',
  //           file_type: 'video/mp4',
  //           width: 640,
  //           height: 360,
  //           link: 'https://player.vimeo.com/external/415278112.sd.mp4?s=78f1e08f9b98d9051fc8ff8229a20e13f7c76f80&profile_id=164&oauth2_token_id=57447761',
  //         },
  //         {
  //           id: 686005,
  //           quality: 'hd',
  //           file_type: 'video/mp4',
  //           width: 1280,
  //           height: 720,
  //           link: 'https://player.vimeo.com/external/415278112.hd.mp4?s=f92d21b696ed89eebc56fca804c8db328ed3eb30&profile_id=174&oauth2_token_id=57447761',
  //         },
  //         {
  //           id: 686006,
  //           quality: 'hls',
  //           file_type: 'video/mp4',
  //           width: null,
  //           height: null,
  //           link: 'https://player.vimeo.com/external/415278112.m3u8?s=85c05ff46b7c7ce9b0d0a244455d94379e58ffb5&oauth2_token_id=57447761',
  //         },
  //       ],
  //       video_pictures: [
  //         {
  //           id: 1408624,
  //           nr: 0,
  //           picture:
  //             'https://images.pexels.com/videos/4328539/pictures/preview-0.jpg',
  //         },
  //         {
  //           id: 1408649,
  //           nr: 1,
  //           picture:
  //             'https://images.pexels.com/videos/4328539/pictures/preview-1.jpg',
  //         },
  //         {
  //           id: 1408677,
  //           nr: 2,
  //           picture:
  //             'https://images.pexels.com/videos/4328539/pictures/preview-2.jpg',
  //         },
  //         {
  //           id: 1408711,
  //           nr: 3,
  //           picture:
  //             'https://images.pexels.com/videos/4328539/pictures/preview-3.jpg',
  //         },
  //         {
  //           id: 1408755,
  //           nr: 4,
  //           picture:
  //             'https://images.pexels.com/videos/4328539/pictures/preview-4.jpg',
  //         },
  //         {
  //           id: 1408789,
  //           nr: 5,
  //           picture:
  //             'https://images.pexels.com/videos/4328539/pictures/preview-5.jpg',
  //         },
  //         {
  //           id: 1408824,
  //           nr: 6,
  //           picture:
  //             'https://images.pexels.com/videos/4328539/pictures/preview-6.jpg',
  //         },
  //         {
  //           id: 1408855,
  //           nr: 7,
  //           picture:
  //             'https://images.pexels.com/videos/4328539/pictures/preview-7.jpg',
  //         },
  //         {
  //           id: 1408897,
  //           nr: 8,
  //           picture:
  //             'https://images.pexels.com/videos/4328539/pictures/preview-8.jpg',
  //         },
  //         {
  //           id: 1408934,
  //           nr: 9,
  //           picture:
  //             'https://images.pexels.com/videos/4328539/pictures/preview-9.jpg',
  //         },
  //         {
  //           id: 1408960,
  //           nr: 10,
  //           picture:
  //             'https://images.pexels.com/videos/4328539/pictures/preview-10.jpg',
  //         },
  //         {
  //           id: 1408998,
  //           nr: 11,
  //           picture:
  //             'https://images.pexels.com/videos/4328539/pictures/preview-11.jpg',
  //         },
  //         {
  //           id: 1409032,
  //           nr: 12,
  //           picture:
  //             'https://images.pexels.com/videos/4328539/pictures/preview-12.jpg',
  //         },
  //         {
  //           id: 1409069,
  //           nr: 13,
  //           picture:
  //             'https://images.pexels.com/videos/4328539/pictures/preview-13.jpg',
  //         },
  //         {
  //           id: 1409090,
  //           nr: 14,
  //           picture:
  //             'https://images.pexels.com/videos/4328539/pictures/preview-14.jpg',
  //         },
  //       ],
  //     },
  //     {
  //       id: 6734777,
  //       width: 2160,
  //       height: 3840,
  //       duration: 30,
  //       full_res: null,
  //       tags: [],
  //       url: 'https://www.pexels.com/video/waves-in-the-sea-6734777/',
  //       image:
  //         'https://images.pexels.com/videos/6734777/aerial-beach-waves-drone-video-ocean-6734777.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=630',
  //       avg_color: null,
  //       user: {
  //         id: 574687,
  //         name: 'Ruvim Miksanskiy',
  //         url: 'https://www.pexels.com/@digitech',
  //       },
  //       video_files: [
  //         {
  //           id: 2439765,
  //           quality: 'hd',
  //           file_type: 'video/mp4',
  //           width: 1440,
  //           height: 2560,
  //           link: 'https://player.vimeo.com/external/509124207.hd.mp4?s=3b17e75116e1279cc0cf30c49a4dbca284ff8cca&profile_id=170&oauth2_token_id=57447761',
  //         },
  //         {
  //           id: 2439766,
  //           quality: 'hd',
  //           file_type: 'video/mp4',
  //           width: 720,
  //           height: 1280,
  //           link: 'https://player.vimeo.com/external/509124207.hd.mp4?s=3b17e75116e1279cc0cf30c49a4dbca284ff8cca&profile_id=174&oauth2_token_id=57447761',
  //         },
  //         {
  //           id: 2439767,
  //           quality: 'hd',
  //           file_type: 'video/mp4',
  //           width: 2160,
  //           height: 3840,
  //           link: 'https://player.vimeo.com/external/509124207.hd.mp4?s=3b17e75116e1279cc0cf30c49a4dbca284ff8cca&profile_id=172&oauth2_token_id=57447761',
  //         },
  //         {
  //           id: 2439768,
  //           quality: 'sd',
  //           file_type: 'video/mp4',
  //           width: 360,
  //           height: 640,
  //           link: 'https://player.vimeo.com/external/509124207.sd.mp4?s=4c8eaf4dacd9d2836e83977bf48f186ae0035925&profile_id=164&oauth2_token_id=57447761',
  //         },
  //         {
  //           id: 2439769,
  //           quality: 'hd',
  //           file_type: 'video/mp4',
  //           width: 1080,
  //           height: 1920,
  //           link: 'https://player.vimeo.com/external/509124207.hd.mp4?s=3b17e75116e1279cc0cf30c49a4dbca284ff8cca&profile_id=175&oauth2_token_id=57447761',
  //         },
  //         {
  //           id: 2439770,
  //           quality: 'sd',
  //           file_type: 'video/mp4',
  //           width: 540,
  //           height: 960,
  //           link: 'https://player.vimeo.com/external/509124207.sd.mp4?s=4c8eaf4dacd9d2836e83977bf48f186ae0035925&profile_id=165&oauth2_token_id=57447761',
  //         },
  //         {
  //           id: 2439771,
  //           quality: 'sd',
  //           file_type: 'video/mp4',
  //           width: 240,
  //           height: 426,
  //           link: 'https://player.vimeo.com/external/509124207.sd.mp4?s=4c8eaf4dacd9d2836e83977bf48f186ae0035925&profile_id=139&oauth2_token_id=57447761',
  //         },
  //       ],
  //       video_pictures: [
  //         {
  //           id: 5017453,
  //           nr: 0,
  //           picture:
  //             'https://images.pexels.com/videos/6734777/pictures/preview-0.jpeg',
  //         },
  //         {
  //           id: 5017458,
  //           nr: 1,
  //           picture:
  //             'https://images.pexels.com/videos/6734777/pictures/preview-1.jpeg',
  //         },
  //         {
  //           id: 5017465,
  //           nr: 2,
  //           picture:
  //             'https://images.pexels.com/videos/6734777/pictures/preview-2.jpeg',
  //         },
  //         {
  //           id: 5017469,
  //           nr: 3,
  //           picture:
  //             'https://images.pexels.com/videos/6734777/pictures/preview-3.jpeg',
  //         },
  //         {
  //           id: 5017470,
  //           nr: 4,
  //           picture:
  //             'https://images.pexels.com/videos/6734777/pictures/preview-4.jpeg',
  //         },
  //         {
  //           id: 5017471,
  //           nr: 5,
  //           picture:
  //             'https://images.pexels.com/videos/6734777/pictures/preview-5.jpeg',
  //         },
  //         {
  //           id: 5017472,
  //           nr: 6,
  //           picture:
  //             'https://images.pexels.com/videos/6734777/pictures/preview-6.jpeg',
  //         },
  //         {
  //           id: 5017473,
  //           nr: 7,
  //           picture:
  //             'https://images.pexels.com/videos/6734777/pictures/preview-7.jpeg',
  //         },
  //         {
  //           id: 5017474,
  //           nr: 8,
  //           picture:
  //             'https://images.pexels.com/videos/6734777/pictures/preview-8.jpeg',
  //         },
  //         {
  //           id: 5017475,
  //           nr: 9,
  //           picture:
  //             'https://images.pexels.com/videos/6734777/pictures/preview-9.jpeg',
  //         },
  //         {
  //           id: 5017476,
  //           nr: 10,
  //           picture:
  //             'https://images.pexels.com/videos/6734777/pictures/preview-10.jpeg',
  //         },
  //         {
  //           id: 5017477,
  //           nr: 11,
  //           picture:
  //             'https://images.pexels.com/videos/6734777/pictures/preview-11.jpeg',
  //         },
  //         {
  //           id: 5017478,
  //           nr: 12,
  //           picture:
  //             'https://images.pexels.com/videos/6734777/pictures/preview-12.jpeg',
  //         },
  //         {
  //           id: 5017479,
  //           nr: 13,
  //           picture:
  //             'https://images.pexels.com/videos/6734777/pictures/preview-13.jpeg',
  //         },
  //         {
  //           id: 5017480,
  //           nr: 14,
  //           picture:
  //             'https://images.pexels.com/videos/6734777/pictures/preview-14.jpeg',
  //         },
  //       ],
  //     },
  //     {
  //       id: 8438335,
  //       width: 1080,
  //       height: 1920,
  //       duration: 8,
  //       full_res: null,
  //       tags: [],
  //       url: 'https://www.pexels.com/video/bird-s-eye-view-of-waves-splashing-on-rocks-8438335/',
  //       image:
  //         'https://images.pexels.com/videos/8438335/pexels-photo-8438335.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=630',
  //       avg_color: null,
  //       user: {
  //         id: 3149039,
  //         name: 'RODNAE Productions',
  //         url: 'https://www.pexels.com/@rodnae-prod',
  //       },
  //       video_files: [
  //         {
  //           id: 3669001,
  //           quality: 'hd',
  //           file_type: 'video/mp4',
  //           width: 1080,
  //           height: 1920,
  //           link: 'https://player.vimeo.com/external/565942690.hd.mp4?s=5d56334601412765efa9a2bce637c0a35454e1e0&profile_id=175&oauth2_token_id=57447761',
  //         },
  //         {
  //           id: 3669002,
  //           quality: 'sd',
  //           file_type: 'video/mp4',
  //           width: 540,
  //           height: 960,
  //           link: 'https://player.vimeo.com/external/565942690.sd.mp4?s=d908b92bd486fcedfaf1aa4f1209083b15010c88&profile_id=165&oauth2_token_id=57447761',
  //         },
  //         {
  //           id: 3669003,
  //           quality: 'hd',
  //           file_type: 'video/mp4',
  //           width: 720,
  //           height: 1280,
  //           link: 'https://player.vimeo.com/external/565942690.hd.mp4?s=5d56334601412765efa9a2bce637c0a35454e1e0&profile_id=174&oauth2_token_id=57447761',
  //         },
  //         {
  //           id: 3669004,
  //           quality: 'sd',
  //           file_type: 'video/mp4',
  //           width: 360,
  //           height: 640,
  //           link: 'https://player.vimeo.com/external/565942690.sd.mp4?s=d908b92bd486fcedfaf1aa4f1209083b15010c88&profile_id=164&oauth2_token_id=57447761',
  //         },
  //       ],
  //       video_pictures: [
  //         {
  //           id: 8226273,
  //           nr: 0,
  //           picture:
  //             'https://images.pexels.com/videos/8438335/pictures/preview-0.jpeg',
  //         },
  //         {
  //           id: 8226282,
  //           nr: 1,
  //           picture:
  //             'https://images.pexels.com/videos/8438335/pictures/preview-1.jpeg',
  //         },
  //         {
  //           id: 8226291,
  //           nr: 2,
  //           picture:
  //             'https://images.pexels.com/videos/8438335/pictures/preview-2.jpeg',
  //         },
  //         {
  //           id: 8226299,
  //           nr: 3,
  //           picture:
  //             'https://images.pexels.com/videos/8438335/pictures/preview-3.jpeg',
  //         },
  //         {
  //           id: 8226311,
  //           nr: 4,
  //           picture:
  //             'https://images.pexels.com/videos/8438335/pictures/preview-4.jpeg',
  //         },
  //         {
  //           id: 8226324,
  //           nr: 5,
  //           picture:
  //             'https://images.pexels.com/videos/8438335/pictures/preview-5.jpeg',
  //         },
  //         {
  //           id: 8226335,
  //           nr: 6,
  //           picture:
  //             'https://images.pexels.com/videos/8438335/pictures/preview-6.jpeg',
  //         },
  //         {
  //           id: 8226345,
  //           nr: 7,
  //           picture:
  //             'https://images.pexels.com/videos/8438335/pictures/preview-7.jpeg',
  //         },
  //         {
  //           id: 8226352,
  //           nr: 8,
  //           picture:
  //             'https://images.pexels.com/videos/8438335/pictures/preview-8.jpeg',
  //         },
  //         {
  //           id: 8226362,
  //           nr: 9,
  //           picture:
  //             'https://images.pexels.com/videos/8438335/pictures/preview-9.jpeg',
  //         },
  //         {
  //           id: 8226369,
  //           nr: 10,
  //           picture:
  //             'https://images.pexels.com/videos/8438335/pictures/preview-10.jpeg',
  //         },
  //         {
  //           id: 8226376,
  //           nr: 11,
  //           picture:
  //             'https://images.pexels.com/videos/8438335/pictures/preview-11.jpeg',
  //         },
  //         {
  //           id: 8226384,
  //           nr: 12,
  //           picture:
  //             'https://images.pexels.com/videos/8438335/pictures/preview-12.jpeg',
  //         },
  //         {
  //           id: 8226391,
  //           nr: 13,
  //           picture:
  //             'https://images.pexels.com/videos/8438335/pictures/preview-13.jpeg',
  //         },
  //         {
  //           id: 8226397,
  //           nr: 14,
  //           picture:
  //             'https://images.pexels.com/videos/8438335/pictures/preview-14.jpeg',
  //         },
  //       ],
  //     },
  //   ],
  //   total_results: 8000,
  //   next_page:
  //     'https://api.pexels.com/v1/videos/search/?page=2&per_page=15&query=ocean',
  //   url: 'https://api-server.pexels.com/search/videos/ocean/',
  // };
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
