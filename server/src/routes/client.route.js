import { Router } from "express";
import {
  addComments,
  createPost,
  getAllCommentOnPost,
  getAllPost,
  registerClient,
} from "../controller/clientController.js";
import { upload } from "../middleware/multer.middleware.js";

const router = Router();

router.route("/loginregclient").post(registerClient);
router.route("/createpost").post(upload.single("postimg"), createPost);
router.route("/getallpost").get(getAllPost);
router.route("/getallcommnets").get(getAllCommentOnPost);
router.route("/postcommnet").post(addComments);

export default router;
