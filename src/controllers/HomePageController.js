import db from '../models/index';
class homePageController {
  async getHomePage(req, res, next) {
    try {
      let data = await db.User.findAll();
      console.log(data);
      res.render('homePage.ejs',
        { data: JSON.stringify(data) }
      );
    } catch (error) {
      console.log(error);
    }
  }
}
export default new homePageController();
