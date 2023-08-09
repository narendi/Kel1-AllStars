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
      <Card className="w-full max-w-[150rem] flex-row">
          <CardHeader
            shadow={false}
            floated={false}
            className="m-0 w-2/5 shrink-0 rounded-r-none"
          >
            <img
              src="./assets/konten/konten1.jpg"
              alt="card-image"
              className="h-full w-full object-cover rounded-2xl"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h4" color="blue-gray" className="mb-2">
              Banner Iklan
            </Typography>
            <Typography color="gray" className="mb-8 font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              condimentum aliquet arcu, sit amet eleifend tortor. Donec
              elementum enim quis ligula laoreet convallis. Fusce sodales ligula
              ut nibh finibus, at ultricies odio interdum. Etiam ac sapien
              euismod, fringilla lacus nec, feugiat massa. Suspendisse in arcu
              enim. Orci varius natoque penatibus et magnis dis parturient
              montes, nascetur ridiculus mus. Fusce aliquet malesuada quam, ut
              hendrerit risus eleifend in. Nulla facilisi. Aliquam tincidunt
              odio nunc, sit amet feugiat quam convallis nec. Morbi laoreet nunc
              sed lacus elementum lacinia. Vestibulum ante ipsum primis in
              faucibus orci luctus et ultrices posuere cubilia curae; Donec
              varius libero augue, eget varius tellus cursus non.
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
          <br />
          <div className="mt-10 ml-10">
            <h2 className="font-extrabold text-3xl">Kategori Pelatihan</h2>
            <div className="flex">
              <p className="text-sm text-gray-600 mt-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                condimentum aliquet arcu, sit amet eleifend tortor. Donec
                elementum enim quis ligula laoreet convallis.
              </p>
              <Link to={"/All"}>
                <button className="border border-black hover:border-blue-800 hover:text-blue-800 mt-5 rounded-xl w-56 h-6">
                  Tampilkan Semua
                </button>
              </Link>
            </div>
          </div>
          <div className="flex  justify-start mt-10">
            <div className="flex flex-wrap">
              <Kateg />
            </div>
          </div>
          
      </Card>
    </React.Fragment>
  );
};

export default ContentAdminFinal;