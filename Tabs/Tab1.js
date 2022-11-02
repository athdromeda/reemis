import Dropdown from "../Components/Dropdown";
import { Form, Button, Row, Col } from "react-bootstrap";
import { DropdownOptions } from "../Data/data";
import { useState } from "react";
import { useFormik } from "formik";
import { YupSchema } from "../Data/data";
import TextInput from "../Components/TextInput";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: YupSchema.name,
  nik: YupSchema.nik,
});

const Tab1 = () => {
  const [isWNA, setWNA] = useState(false);

  const formik = useFormik({
    initialValues: {},
    validationSchema,
    onSubmit: (vals) => {
      alert(JSON.stringify(vals, null, 2));
    },
  });

  return (
    <Form>
      <TextInput
        id="name"
        label="Nama Lengkap"
        handleChange={formik.handleChange}
        handleValue={formik.values.name}
        errorLog={formik.errors.name}
      />

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
              checked
            />
            <Form.Check
              inline
              label="Perempuan"
              name="group1"
              type="radio"
              id="inline-radio-2"
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
          <Form.Group className="mb-3" controlId="formBasicEmail">
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
        label="NISM"
        handleChange={formik.handleChange}
        handleValue={formik.values.nism}
        errorLog={formik.errors.nism}
      />

      <TextInput
        id="kip"
        label="KIP"
        handleChange={formik.handleChange}
        handleValue={formik.values.kip}
        errorLog={formik.errors.kip}
      />

      <TextInput
        id="pkh"
        label="PKH"
        handleChange={formik.handleChange}
        handleValue={formik.values.pkh}
        errorLog={formik.errors.pkh}
      />

      <TextInput
        id="kks"
        label="KKS"
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

      <Button variant="primary" onClick={formik.handleSubmit}>
        Submit
      </Button>
    </Form>
  );
};

export default Tab1;
