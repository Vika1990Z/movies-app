import {API_KEY, API, IMG_API} from './constants';

export const generateURL = path => `${ API }${ path }?api_key=${ API_KEY }`;

export const generateImgTag = (path, title) => `<img src="${IMG_API}${path}" alt="${title}">`;

export const generateSectionName = (path) => path.split("/");