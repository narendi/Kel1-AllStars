import React from "react";
// import { Line } from '@ant-design/charts';

const Tc = () => {
  const data = [
    { day: 'Senin',  value: 1, line: 'Kategori 1' },
    { day: 'Selasa', value: 3, line: 'Kategori 1' },
    { day: 'Rabu',   value: 5, line: 'Kategori 1' },
    { day: 'Kamis',  value: 7, line: 'Kategori 1' },
    { day: 'Jumat',  value: 4.6, line: 'Kategori 1' },
    { day: 'Sabtu',  value: 2.25, line: 'Kategori 1' },
    { day: 'Minggu', value: 0, line: 'Kategori 1' },
    { day: 'Senin',  value: 7, line: 'Kategori 2' },
    { day: 'Selasa', value: 4, line: 'Kategori 2' },
    { day: 'Rabu',   value: 1, line: 'Kategori 2' },
    { day: 'Kamis',  value: 3, line: 'Kategori 2' },
    { day: 'Jumat',  value: 1, line: 'Kategori 2' },
    { day: 'Sabtu',  value: 3, line: 'Kategori 2' },
    { day: 'Minggu', value: 5, line: 'Kategori 2' },
    { day: 'Senin',  value: 1, line: 'Kategori 3' },
    { day: 'Selasa', value: 1, line: 'Kategori 3' },
    { day: 'Rabu',   value: 1, line: 'Kategori 3' },
    { day: 'Kamis',  value: 1, line: 'Kategori 3' },
    { day: 'Jumat',  value: 1, line: 'Kategori 3' },
    { day: 'Sabtu',  value: 1, line: 'Kategori 3' },
    { day: 'Minggu', value: 1, line: 'Kategori 3' },
  ];

  const config = {
    data,
    xField: "day",
    yField: "value",
    seriesField: "line",
    label: {
      position: "middle", // Posisikan label di tengah
      style: {
        fontSize: 14, // Ukuran font label
        textAlign: "center", // Posisi teks di tengah
      },
    },
    point: {
      size: 1, // Ukuran kotak warna lebih besar
      shape: "",
      style: {
        fill: "none",
        stroke: "#5B8FF9",
        lineWidth: 1,
      },
    },
    xAxis: {
      title: {
        text: "",
      },
    },
    yAxis: {
      title: {
        text: "",
      },
    },
    color: ["#f87171", "#67e8f9", "#fde047"],
  };

  // return <Line {...config} />;
};

export default Tc;
