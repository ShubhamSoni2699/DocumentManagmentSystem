import { Router } from "express";
import appData from "../controllers/app.controller.js";

const router = Router();

router.route("/setAppData").post(
    appData
);

export default router;