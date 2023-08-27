import React from "react";

const Djk = () => {
  return (
    <>
      <div className=" pl-3">
        <p className="font-bold text-xl mb-7 mt-3">Detail Jawaban Kuis</p>

        <div className="grid grid-cols-2 gap-4">
          <div
            className="border-black border-2 flex-grow"
            style={{ width: "145%" }}
          >
            <p className="ml-3 mt-2">
              Judul pertanyaan <br /> <br />
              Pertanyaan A <br />
              <br />
              <br />
              Jawaban dipilih: A <br />
              Jawaban Benar: A <br /> <br />
              Perolehan: 50.00
              <p className="ml-20">Bobot soal: 50.00</p>
            </p>
            <br />
          </div>
          <div
            className="border-black border-2 "
            style={{
              width: "55%",
              height: "70%",
              justifySelf: "end",
              alignSelf: "start",
              padding: "0 5px",
            }}
          >
            <div className="ml-4 mr-4" >
              <p className="border-b-2 border-black border-black-600 mt-2 mb-1">
                Detail Kuis
              </p>
              <p>Pelatihan: Lorem Ipsum</p>
              <p>Tanggal: 10 Januari 2023</p>
              <p>Total Nilai: 50/100</p>
            </div>
          </div>
        </div>
        <br />
        <div
          className="border-black border-2 flex-grow mb-10"
          style={{ gridColumn: "span 1", width: "71.5%" }}
        >
          <p className="ml-3 mt-2">
            Judul pertanyaan <br /> <br />
            Pertanyaan B <br />
            <br />
            <br />
            Jawaban dipilih: C <br />
            Jawaban Benar: D <br /> <br />
            Perolehan: 0.00
            <p className="ml-20">Bobot soal: 50.00</p>
          </p>
          <br />
        </div>
      </div>
      <br />
    </>
  );
};

export default Djk;
