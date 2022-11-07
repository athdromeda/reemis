import Dropdown from "../Components/Dropdown";
import { Form, Button } from "react-bootstrap";
import { DropdownOptions } from "../Data/data";
import { useFormik } from "formik";
import { YupSchema } from "../Data/data";
import TextInput from "../Components/TextInput";
import * as Yup from "yup";

const validationSchema = Yup.object({
  fatherName: YupSchema.name,
  fatherNik: YupSchema.nik,
});

const Tab3 = ({ toTab, handleData }) => {
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
      <TextInput
        id="fatherName"
        label="Nama Ayah"
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

      <TextInput
        id="fatherPhone"
        label="No. HP (Opsional)"
        handleChange={formik.handleChange}
        handleValue={formik.values.fatherPhone}
        errorLog={formik.errors.fatherPhone}
      />

      <Dropdown
        id="job"
        label="Pekerjaan"
        options={DropdownOptions.pekerjaan}
        handleChange={formik.handleChange}
        handleValue={formik.values.job}
      />

      <Dropdown
        id="education"
        label="Pendidikan"
        options={DropdownOptions.pendidikan}
        handleChange={formik.handleChange}
        handleValue={formik.values.education}
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
          formik.handleSubmit && toTab(4);
          handleData(formik.values);
        }}
        disabled={!(formik.isValid && formik.dirty)}
      >
        Lanjut
      </Button>
    </Form>
  );
};

export default Tab3;
