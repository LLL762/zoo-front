import { environment } from 'src/environments/environment';

type UrlKey = keyof typeof environment.api.urls;
type AppUriKey = keyof typeof environment.app.uris;
const baseUrl = environment.api.urls.BASE;
const baseAppUri = environment.app.uris.BASE;

const getUrl = (key: UrlKey) => {
  return baseUrl + environment.api.urls[key];
};

const getAppUri = (key: AppUriKey) => {
  return baseAppUri + environment.app.uris[key];
};

export default { getUrl, getAppUri };
