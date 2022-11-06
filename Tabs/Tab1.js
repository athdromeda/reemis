import Dropdown from "../Components/Dropdown";
import { Form, Button, Row, Col } from "react-bootstrap";
import { DropdownOptions } from "../Data/data";
import { useState, useContext } from "react";
import { useFormik, useFormikContext, Field } from "formik";
import { YupSchema } from "../Data/data";
import TextInput from "../Components/TextInput";
import * as Yup from "yup";
import { DataContext } from "../pages";

const toTitleCase = (phrase) => {
  return phrase
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const validationSchema = Yup.object({
  name: YupSchema.name,
  birthPlace: YupSchema.birthPlace,
  nik: YupSchema.nik,
  nisn: YupSchema.nisn,
  kk: YupSchema.kk,
});

const Tab1 = ({ setSelected, selectedId, dataRaw, toTab }) => {
  const [showList, setShowList] = useState(true);
  const [name, setName] = useState("");
  const [isMen, setMen] = useState(true);
  const [isWNA, setWNA] = useState(false);

  // console.log(data)

  const formik = useFormik({
    initialValues: { name: "" },
    validationSchema,
    onSubmit: (vals) => {
      alert(JSON.stringify(vals, null, 2));
    },
  });

  const handleName = (name) => {
    setName(toTitleCase(name));
    formik.setFieldValue("name", name);
  };

  const handleSelection = (res) => {
    setSelected(dataRaw.findIndex((row) => row.name === res));
  };

  const populate = (name) => {
    const id = dataRaw.findIndex((row) => row.name === name);
    const [month, day, year] = dataRaw[id].birthDate.split("/");

    //BirthPlace
    formik.setFieldValue("birthPlace", toTitleCase(dataRaw[id].birthPlace));

    //Birthday
    const birthDay = new Date(+year, month - 1, +day);
    formik.setFieldValue("birthDate", birthDay);

    //NISN
    formik.setFieldValue("nisn", year.substring(1));

    //NIK
    let nikDate;
    dataRaw[id].gender === "Perempuan"
      ? (nikDate = parseInt(day) + 40)
      : (nikDate = day.padStart(2, "0"));
    formik.setFieldValue(
      "nik",
      "—" + nikDate + month.padStart(2, "0") + year.substring(2) + "—"
    );

    //Gender
    dataRaw[id].gender === "Perempuan" ? setMen(false) : setMen(true);
  };

  return (
    <Form>
      <TextInput
        id="name"
        label="Nama Lengkap"
        handleChange={(e) => {
          handleName(e.target.value);
          setShowList(true);
        }}
        handleValue={formik.values.name}
        errorLog={formik.errors.name}
      />

      {name.length > 9 && showList && (
        <div className="d-grid gap-1">
          {dataRaw
            .filter((data) =>
              data.name.toLowerCase().includes(name.toLowerCase())
            )
            .map((res, index) => (
              <button
                key={index}
                className="btn btn-outline-secondary text-start"
                type="button"
                onClick={() => {
                  handleName(res.name);
                  setShowList(false);
                  handleSelection(res.name);
                  populate(res.name);
                }}
              >
                {toTitleCase(res.name)}
              </button>
            ))}
        </div>
      )}

      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="gender">
            <Form.Label>Jenis Kelamin</Form.Label>
            <br />
            <Form.Check
              inline
              label="Laki-laki"
              name="group1"
              type="radio"
              id="inline-radio-1"
              onChange={() => setMen(true)}
              checked={isMen}
              defaultChecked
            />
            <Form.Check
              inline
              label="Perempuan"
              name="group1"
              type="radio"
              id="inline-radio-2"
              onChange={() => setMen(false)}
              checked={!isMen}
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="nationality">
            <Form.Label>Kewarganegaraan</Form.Label>
            <br />

            <Form.Check
              inline
              label="WNI"
              name="group2"
              type="radio"
              value="WNI"
              id="inline-radio-1"
              onChange={() => setWNA(false)}
              checked={!isWNA}
              defaultChecked
            />
            <Form.Check
              inline
              label="WNA"
              name="group2"
              type="radio"
              value="WNA"
              onChange={() => setWNA(true)}
              id="inline-radio-2"
              checked={isWNA}
            />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col>
          <TextInput
            id="birthPlace"
            label="Tempat"
            handleChange={formik.handleChange}
            handleValue={formik.values.birthPlace}
            errorLog={formik.errors.birthPlace}
          />
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="birthDate">
            <Form.Label>Tanggal Lahir</Form.Label>
            <Form.Control type="date" />
          </Form.Group>
        </Col>
      </Row>

      <TextInput
        id="nisn"
        label="NISN"
        handleChange={formik.handleChange}
        handleValue={formik.values.nisn}
        errorLog={formik.errors.nisn}
      />

      <TextInput
        id="kk"
        label="KK"
        handleChange={formik.handleChange}
        handleValue={formik.values.kk}
        errorLog={formik.errors.kk}
      />

      <TextInput
        id="nik"
        label="NIK"
        handleChange={formik.handleChange}
        handleValue={formik.values.nik}
        errorLog={formik.errors.nik}
      />

      <TextInput
        id="nism"
        label="NISM (Opsional)"
        handleChange={formik.handleChange}
        handleValue={formik.values.nism}
        errorLog={formik.errors.nism}
      />

      <TextInput
        id="kip"
        label="KIP (Opsional)"
        handleChange={formik.handleChange}
        handleValue={formik.values.kip}
        errorLog={formik.errors.kip}
      />

      <TextInput
        id="pkh"
        label="PKH (Opsional)"
        handleChange={formik.handleChange}
        handleValue={formik.values.pkh}
        errorLog={formik.errors.pkh}
      />

      <TextInput
        id="kks"
        label="KKS (Opsional)"
        handleChange={formik.handleChange}
        handleValue={formik.values.kks}
        errorLog={formik.errors.kks}
      />

      {isWNA && (
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>No Paspor</Form.Label>
          <Form.Control type="text" placeholder="Masukkan Nomor Paspor" />
        </Form.Group>
      )}

      <Dropdown
        id="hobby"
        label="Hobi"
        options={DropdownOptions.hobi}
        handleChange={formik.handleChange}
        handleValue={formik.values.hobby}
      />

      <Dropdown
        id="dream"
        label="Cita"
        options={DropdownOptions.citaCita}
        handleChange={formik.handleChange}
        handleValue={formik.values.dream}
      />

      <Dropdown
        id="specialNeeds"
        label="Kebutuhan Khusus"
        options={DropdownOptions.kebutuhanKhusus}
        handleChange={formik.handleChange}
        handleValue={formik.values.specialNeeds}
      />

      <Dropdown
        id="statusRumah"
        label="Status Rumah"
        options={DropdownOptions.statusRumah}
        handleChange={formik.handleChange}
        handleValue={formik.values.statusRumah}
      />

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Status Mukim</Form.Label>
        <br />
        <Form.Check
          inline
          label="Mukim"
          name="group3"
          type="radio"
          id="inline-radio-1"
          checked
        />
        <Form.Check
          inline
          label="Tidak"
          name="group3"
          type="radio"
          id="inline-radio-2"
        />
      </Form.Group>

      <Button
        variant="primary"
        onClick={() => {
          formik.handleSubmit && toTab(2);
        }}
        disabled={!(formik.isValid && formik.dirty)}
      >
        Lanjut
      </Button>
    </Form>
  );
};

export default Tab1;
