import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Kateg from "../kontenAll/card.jsx";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Chip,
  Button,
} from "@material-tailwind/react";
// import Card from "../kontenAll/card";
// import Image1 from "/assets/hacker.jpg";
// import Image2 from "/assets/fotopemandangan.jpg";
// import Navbarguest from "../components/layout/navbar/navbarguest";

const ContentAdminFinal = () => {
  const [newdata, setNewData] = useState([]);
  const [pelatihan, setPelatihan] = useState([]);
  const [kategoriheader, setKategoriHeader] = useState([]);
  const [pelatihanheader, setPelatihanHeader] = useState([]);
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3100/kategori/all?latest=true")
      .then((response) => {
        setNewData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("http://localhost:3100/pelatihan/all?latest=true")
      .then((response) => {
        setPelatihan(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("http://localhost:3100/pelatihanheader/header")
      .then((response) => {
        setPelatihanHeader(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("http://localhost:3100/kategoriheader/header")
      .then((response) => {
        setKategoriHeader(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("http://localhost:3100/banner/all")
      .then((response) => {
        setBanner(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    // fetchKategoriHeader();
  }, []);

  // const fetchKategoriHeader = async () => {
  //   try {
  //     const response = await fetch("http://localhost:3100/kategoriheader/header");
  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }
  //     const data = await response.json();
  //     setKategoriHeader(data);
  //   } catch (error) {
  //     console.log("Error fetching data:", error.message);
  //   }
  // };

  // const cards = [
  //   {
  //     image: Image1,
  //     title: "Kategori A",
  //     description: "Deskripsi Kategori",
  //   },
  //   {
  //     image: Image2,
  //     title: "Kategori B",
  //     description: "Deskripsi Kategori",
  //   },
  //   {
  //     image: Image2,
  //     title: "Kategori C",
  //     description: "Deskripsi Kategori",
  //   },
  //   {
  //     image: Image2,
  //     title: "Kategori D",
  //     description: "Deskripsi Kategori",
  //   },
  //   {
  //     image: Image2,
  //     title: "Kategori E",
  //     description: "Deskripsi Kategori",
  //   },
  // ];

  return (
    <React.Fragment>
      {banner.map((item) => (
        <Card key={item.id} className="w-full max-w-[150rem] flex-row">
          <CardHeader
            shadow={false}
            floated={false}
            className="m-0 w-2/5 shrink-0 rounded-r-none"
          >
            <img
              src={`http://localhost:3100/images/banner/${item.image}`}
              alt="card-image"
              className="h-full w-full object-cover rounded-2xl"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h4" color="blue-gray" className="mb-2">
              {item.name}
            </Typography>
            <Typography color="gray" className="mb-8 font-normal">
              {item.description}
            </Typography>
            <a href="#" className="inline-block">
              <Button variant="text" className="flex items-center gap-5">
                Baca Selengkapnya
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-11 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Button>
            </a>
          </CardBody>
        </Card>
      ))}

      {/* KATEGORI */}
      {kategoriheader.map((header) => (
        <div key={header.id} className="mt-10 ml-10 flex-col">
          <h2 className="font-extrabold text-3xl">{header.name}</h2>
          <div className="flex">
            <p className="text-sm text-gray-600 mt-5">{header.description}</p>
            <Link to={"/All"}>
              <button className="border ml-6 border-black hover:border-blue-800 hover:text-blue-800 mt-5 rounded-xl w-56 h-6">
                Tampilkan Semua
              </button>
            </Link>
          </div>
        </div>
      ))}
      <div className="flex ml-10 justify-start mt-10">
        <div className="flex flex-wrap">
          {newdata ? (
            newdata.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden w-[239px] mr-5 h-[290px] mt-5"
              >
                <img
                  className="w-20 h-20 mt-5 ml-5 rounded-full object-cover"
                  src={`http://localhost:3100/images/kategori/${item.image}`}
                  alt="Card Image"
                />
                <div className="p-4 mt-12">
                  <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))
          ) : (
            <p>Tidak ada data extrakulikuler terbaru.</p>
          )}
        </div>
      </div>

      {/* PELATIHAN */}
      {pelatihanheader.map((judul) => (
        <div key={judul.id} className="mt-10 ml-10 flex-col">
          <h2 className="font-extrabold text-3xl">{judul.name}</h2>
          <div className="flex">
            <p className="text-sm text-gray-600 mt-5">{judul.description}</p>
            <Link to={"/pelatihan"}>
              <button className="border ml-6 border-black hover:border-blue-800 hover:text-blue-800 mt-5 rounded-xl w-56 h-6">
                Tampilkan Semua
              </button>
            </Link>
          </div>
        </div>
      ))}
      <div className="flex flex-wrap ml-10 justify-start mt-10">
        {pelatihan ? (
          pelatihan.map((item) => (
            <div
              key={item.id}
              className="max-w-[300px] mb-24 mr-7 mx-auto bg-white rounded-xl overflow-hidden shadow-md"
            >
              <img
                className="w-full h-32 object-cover"
                src={`http://localhost:3100/images/pelatihan/${item.image}`}
                alt={item.name}
              />
              <div className="p-2 text-left">
                <div className="font-bold text-xl mb-2">{item.name}</div>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
              <div className="px-3 py-2 flex flex-col items-start">
                <div className="text-sm font-semibold text-gray-800">
                  Dibuat oleh:
                </div>
                <div className="text-sm font-semibold text-gray-800">
                  Untuk:
                </div>
              </div>
              <div className="px-6 py-2 flex justify-between items-center">
                <div className="flex space-x-1">
                  <svg
                    className="h-6 w-6 inline-block text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.5 10c0 1.93 2.685 3.5 6 3.5s6-1.57 6-3.5-2.685-3.5-6-3.5-6 1.57-6 3.5zm6 1.167a1.167 1.167 0 1 1 0-2.334 1.167 1.167 0 0 1 0 2.334zm0 1.167a2.334 2.334 0 1 1 0-4.667 2.334 2.334 0 0 1 0 4.667z"
                    />
                  </svg>
                  <span className="text-gray-600 text-sm">{item.views}</span>
                  <div className="ml-4">
                    <img
                      className="h-4 w-4 inline-block text-gray-500"
                      src="http://cdn.onlinewebfonts.com/svg/img_287671.png"
                      alt="Comment Icon"
                    />
                    <span className="text-gray-600 text-sm">
                      {item.comments}
                    </span>
                  </div>
                </div>
                <div className="flex space-x-1">
                  <span className="font-bold text-lg">Rp. {item.price}</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>Tidak ada data Pelatihan terbaru.</p>
        )}
      </div>
      <MyFooter />
    </React.Fragment>
  );
};

export default ContentAdminFinal;
