import Dropdown from "../Components/Dropdown";
import { Form, Button, Row, Col } from "react-bootstrap";
import { DropdownOptions } from "../Data/data";
import { useFormik } from "formik";
import { YupSchema } from "../Data/data";
import TextInput from "../Components/TextInput";
import * as Yup from "yup";

const validationSchema = Yup.object({});

const Tab5 = ({ toTab, handleData, submitData }) => {
  const formik = useFormik({
    initialValues: {},
    validationSchema,
    onSubmit: (vals) => {
      alert(JSON.stringify(vals, null, 2));
      console.log(JSON.stringify(vals, null, 2));
    },
  });

  return (
    <Form>
      <Row>
        <Col>
          <TextInput
            id="rt"
            label="RT"
            handleChange={formik.handleChange}
            handleValue={formik.values.rt}
            errorLog={formik.errors.rt}
          />
        </Col>
        <Col>
          <TextInput
            id="rw"
            label="RW"
            handleChange={formik.handleChange}
            handleValue={formik.values.rw}
            errorLog={formik.errors.rw}
          />
        </Col>
        <Col>
          <TextInput
            id="postalCode"
            label="Kode Pos"
            handleChange={formik.handleChange}
            handleValue={formik.values.postalCode}
            errorLog={formik.errors.postalCode}
          />
        </Col>
      </Row>

      <TextInput
        id="addres"
        label="Alamat"
        handleChange={formik.handleChange}
        handleValue={formik.values.address}
        errorLog={formik.errors.address}
      />

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Dropdown label="Provinsi" options={DropdownOptions.statusRumah} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Dropdown label="Kab Kota" options={DropdownOptions.statusRumah} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Dropdown label="Kec" options={DropdownOptions.statusRumah} />
      </Form.Group>

      <Button
        variant="primary"
        onClick={() => {
          formik.handleSubmit && toTab(1);
          handleData(formik.values);
          setTimeout(()=>submitData(), 3000);
        }}
        disabled={!(formik.isValid && formik.dirty)}
      >
        Selesai
      </Button>
    </Form>
  );
};

export default Tab5;
