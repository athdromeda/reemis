import Dropdown from "../Components/Dropdown";
import { Form, Button, Row, Col } from "react-bootstrap";
import { DropdownOptions } from "../Data/data";
import { useFormik } from "formik";
import { YupSchema } from "../Data/data";
import TextInput from "../Components/TextInput";
import * as Yup from "yup";
import { useState } from "react";
import { Provinsi } from "../Data/data";

const validationSchema = Yup.object({
  rt: YupSchema.rt,
  rw: YupSchema.rw,
  postalCode: YupSchema.postalCode,
});

const Tab5 = ({ toTab, handleData, submitData }) => {
  const [regencyData, setRegencyData] = useState([
    { nama: "---" },
    { nama: "--" },
  ]);
  const [kecData, setKecData] = useState([{ nama: "---" }, { nama: "--" }]);

  const handleProvince = async (provinceName) => {
    const provinceIndex = Provinsi.findIndex((e) => e.nama === provinceName);
    const provinceId = Provinsi[provinceIndex].id;

    fetch(
      `https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${provinceId}`,
      {
        method: "GET",
        // headers: {
        //   "Access-Control-Allow-Origin": "*",
        //   "Content-Type": "application/json",
        // },
      }
    )
      .then((data) => data.json())
      .then((data) => setRegencyData(data.kota_kabupaten))
      .then((data) => console.log("Fetched data", data));
    formik.setFieldValue("province", provinceName);
  };

  const handleCity = async (cityName) => {
    const cityIndex = regencyData.findIndex((e) => e.nama === cityName);
    console.log("mau ngefetch data", cityName, cityIndex);
    const cityId = regencyData[cityIndex].id;

    fetch(
      `https://dev.farizdotid.com/api/daerahindonesia/kecamatan?id_kota=${cityId}`,
      {
        method: "GET",
        // headers: {
        //   "Access-Control-Allow-Origin": "*",
        //   "Content-Type": "application/json",
        // },
      }
    )
      .then((data) => data.json())
      .then((data) => setKecData(data.kecamatan))
      .then((data) => console.log("Fetched kota", data));

    formik.setFieldValue("regency", cityName);
  };

  const handleKecamatan = (kecamatanName) => {
    formik.setFieldValue("kecamatan", kecamatanName);
  };

  const handleInput = (fieldId, value) => {
    formik.setFieldValue(fieldId, value);
  };

  const formik = useFormik({
    initialValues: {
      regency: "",
      rt: "",
      rw: "",
      postalCode: "",
    },
    validationSchema,
    onSubmit: (vals) => {
      alert(JSON.stringify(vals, null, 2));
      console.log(JSON.stringify(vals, null, 2));
    },
  });

  return (
    <Form>
      <Dropdown
        id="province"
        label="Provinsi"
        options={Provinsi.map((e) => e.nama)}
        handleChange={(e) => {
          handleProvince(e.target.value);
          handleData(formik.values);
        }}
        handleValue={formik.values.province}
      />

      <Dropdown
        id="regency"
        label="Kab/Kota"
        options={
          regencyData ? regencyData.map((e) => e.nama) : "Error fetching"
        }
        handleChange={(e) => {
          handleCity(e.target.value);
          handleData(formik.values);
        }}
        handleValue={formik.values.regency}
      />

      <Dropdown
        id="kecamatan"
        label="Kec"
        options={kecData ? kecData.map((e) => e.nama) : "Error fetching"}
        handleChange={(e) => {
          handleKecamatan(e.target.value);
          handleData(formik.values);
        }}
        handleValue={formik.values.kecamatan}
      />

      <Row>
        <Col>
          <TextInput
            id="rt"
            label="RT"
            handleChange={(e) => {
              formik.handleChange;
              handleInput("rt", e.target.value);
              handleData({ rt: e.target.value });
            }}
            handleValue={formik.values.rt}
            errorLog={formik.errors.rt}
          />
        </Col>
        <Col>
          <TextInput
            id="rw"
            label="RW"
            handleChange={(e) => {
              formik.handleChange;
              handleInput("rw", e.target.value);
              handleData({ rw: e.target.value });
            }}
            handleValue={formik.values.rw}
            errorLog={formik.errors.rw}
          />
        </Col>
        <Col>
          <TextInput
            id="postalCode"
            label="Kode Pos"
            handleChange={(e) => {
              formik.handleChange;
              handleInput("postalCode", e.target.value);
              handleData({ postalCode: e.target.value });
            }}
            handleValue={formik.values.postalCode}
            errorLog={formik.errors.postalCode}
          />
        </Col>
      </Row>

      <TextInput
        id="alamatLengkap"
        label="Alamat Pelengkap"
        handleChange={formik.handleChange}
        handleValue={formik.values.alamatLengkap}
        errorLog={formik.errors.alamatLengkap}
      />

      <Button
        variant="primary"
        onClick={() => {
          formik.handleSubmit && toTab(1);
          handleData(formik.values);
          setTimeout(() => submitData(), 3000);
        }}
        disabled={!formik.isValid}
      >
        Selesai
      </Button>
    </Form>
  );
};

export default Tab5;
