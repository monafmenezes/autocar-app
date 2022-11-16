import multer from "multer";
import path from "path";

const tmpFolder = path.resolve(__dirname, "..", "..", "tmp");
export default {
  directory: tmpFolder,
  storage: multer.diskStorage({
    destination: tmpFolder,
    filename(request, file, callback) {
      const time = new Date().getTime();
      const filename = `${time}_${file.originalname}`
      return callback(null, filename);
    },
  }),
};

