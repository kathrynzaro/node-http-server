import cats from './routes/cats.js';
import candies from './routes/candies.js';
import notFound from './not-found.js';
import bodyParser from './bodyParser.js';

const log = (...args) => console.log('[server]', ...args);

const routes = {
  cats,
  candies,
};

export default async function (req, res) {
  const urlSegments = req.url.split('/');
  log(urlSegments);
  if (urlSegments.length && urlSegments[1] === 'api') {
    req.body = await bodyParser(req);
    log(req.body);
    const resource = routes[urlSegments[urlSegments.length - 1]];

    const route = resource[req.method.toLowerCase()];

    route(req, res);
    return;
  }

  notFound(req, res);
}
