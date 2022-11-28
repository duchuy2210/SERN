import homePageRoute from './homePage';

function routes(app) {
  app.use('/', homePageRoute);
}

export default routes;
