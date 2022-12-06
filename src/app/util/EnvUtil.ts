import { environment } from 'src/environments/environment';

type UrlKey = keyof typeof environment.api.urls;
const baseUrl = environment.api.urls.BASE;

const getUrl = (key: UrlKey) => {
  return baseUrl + environment.api.urls[key];
};

export default { getUrl };
