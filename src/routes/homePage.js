import express from "express";
import homePageController from "../controllers/HomePageController";

//Khai báo sử dụng router
const router = express.Router();

//Config Router
router.get('/', homePageController.getHomePage);

export default router;
