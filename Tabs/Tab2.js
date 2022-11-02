import Dropdown from "../Components/Dropdown";
import { Form, Button } from "react-bootstrap";
import { DropdownOptions } from "../Data/data";
import { useFormik } from "formik";
import { YupSchema } from "../Data/data";
import TextInput from "../Components/TextInput";
import * as Yup from "yup";

const validationSchema = Yup.object({
  motherName: YupSchema.name,
  motherNik: YupSchema.nik,
});

const Tab2 = () => {
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
        id="motherName"
        label="Nama Ibu"
        handleChange={formik.handleChange}
        handleValue={formik.values.motherName}
        errorLog={formik.errors.motherName}
      />

      <TextInput
        id="motherNik"
        label="NIK"
        handleChange={formik.handleChange}
        handleValue={formik.values.motherNik}
        errorLog={formik.errors.motherNik}
      />

      <TextInput
        id="motherPhone"
        label="No. HP"
        handleChange={formik.handleChange}
        handleValue={formik.values.motherPhone}
        errorLog={formik.errors.motherPhone}
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

      <Button variant="primary" onClick={formik.handleSubmit}>
        Submit
      </Button>
    </Form>
  );
};
export default Tab2;
