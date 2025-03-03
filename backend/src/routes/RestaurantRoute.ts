import express from "express";
import { param, query } from "express-validator";
import RestaurantController from "../controllers/RestaurantController";

const router = express.Router();

router.get(
  "/nearby",
  query("maxDeliveryTime")
    .isNumeric()
    .withMessage("maxDeliveryTime query parameter must be a valid number")
    .notEmpty()
    .withMessage("maxDeliveryTime query parameter is required"),
  query("city")
    .isString()
    .withMessage("city query parameter must be a valid string")
    .notEmpty()
    .withMessage("city query parameter is required"),
  RestaurantController.getNearbyRestaurants
);

router.get(
  "/:restaurantId",
  param("restaurantId")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("RestaurantId paramenter must be a valid string"),
  RestaurantController.getRestaurant
);

router.get(
  "/search/:city",
  param("city")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("City paramenter must be a valid string"),
  RestaurantController.searchRestaurant
);

export default router;
