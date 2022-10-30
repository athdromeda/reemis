import {Form} from "react-bootstrap";

const Dropdown = ({ label, options }) => {
  return (
    <>
      <Form.Label>{label}</Form.Label>
      <Form.Select>
        {options.map((item) => {
          return <option>{item}</option>;
        })}
      </Form.Select>
    </>
  );
};

export default Dropdown;
