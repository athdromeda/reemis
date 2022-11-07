import Dropdown from "../Components/Dropdown";
import { Form, Button, Alert } from "react-bootstrap";
import { DropdownOptions } from "../Data/data";
import { useFormik } from "formik";
import { YupSchema } from "../Data/data";
import TextInput from "../Components/TextInput";
import * as Yup from "yup";

const validationSchema = Yup.object({
  waliName: YupSchema.name,
  waliNik: YupSchema.nik,
});

const Tab4 = ({ toTab, handleData }) => {
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
      <Alert variant="primary">
        Bagian ini bersifat opsional. Boleh diisi boleh dilewati.
      </Alert>

      <TextInput
        id="fatherName"
        label="Nama Wali"
        handleChange={formik.handleChange}
        handleValue={formik.values.fatherName}
        errorLog={formik.errors.fatherName}
      />

      <TextInput
        id="fatherNik"
        label="NIK"
        handleChange={formik.handleChange}
        handleValue={formik.values.fatherNik}
        errorLog={formik.errors.fatherNik}
      />

      <Dropdown
        id="relation"
        label="Hubungan Wali"
        options={DropdownOptions.hubunganWali}
        handleChange={formik.handleChange}
        handleValue={formik.values.relation}
      />

      <Dropdown
        id="job"
        label="Pekerjaan"
        options={DropdownOptions.pekerjaan}
        handleChange={formik.handleChange}
        handleValue={formik.values.job}
      />

      <Dropdown
        id="salary"
        label="Rata-rata Penghasilan"
        options={DropdownOptions.penghasilan}
        handleChange={formik.handleChange}
        handleValue={formik.values.salary}
      />

      <Button
        variant="primary"
        onClick={() => {
          formik.handleSubmit && toTab(5);
          handleData(formik.values)
        }}
        disabled={!formik.isValid}
      >
        Lanjut
      </Button>
    </Form>
  );
};

export default Tab4;
