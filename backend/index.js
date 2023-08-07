import express from "express";
import FileUpload from "express-fileupload";
import cors from "cors";
import Kategori from "./routes/kategori.js";

const app = express();

app.use(FileUpload());
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use(Kategori);

const port = 3100;
app.listen(port, () => {
  console.log(`Server berjalan pada port ${port}`);
});
