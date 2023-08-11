import express from "express";
import FileUpload from "express-fileupload";
import cors from "cors";
import Kategori from "./routes/kategori.js";
import KategoriHeader from "./routes/kategoriheader.js";
import Pelatihan from "./routes/pelatihan.js";
import PelatihanHeader from "./routes/pelatihanheader.js";
import Banner from "./routes/banner.js";

const app = express();

app.use(FileUpload());
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use(Kategori);
app.use(KategoriHeader);
app.use(Pelatihan);
app.use(PelatihanHeader);
app.use(Banner);

const port = 3100;
app.listen(port, () => {
  console.log(`Server berjalan pada port ${port}`);
});
