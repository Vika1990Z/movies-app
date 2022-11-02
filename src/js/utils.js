import {API_KEY, API, IMG_API} from './constants';

export const generateURL = path => `${ API }${ path }?api_key=${ API_KEY }`;

export const generateImgTag = (path, title, width) => (
    `<img src="${IMG_API}/w${width}${path}" alt="${title}">`
);

export const generateSectionName = (path) => path.split("/");

export const generateHash = str => str.split("=").slice(1).join('');

export const convertDate = date => new Date(date).toDateString();