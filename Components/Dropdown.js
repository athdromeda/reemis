import { Form } from "react-bootstrap";

const Dropdown = ({
  id = "",
  label,
  options,
  handleChange = false,
  handleValue = false,
}) => {
  return (
    <Form.Group className="mb-3" controlId={id}>
      <Form.Label>{label}</Form.Label>
      <Form.Select onChange={handleChange} value={handleValue}>
        {options.map((item) => {
          return <option value={item}>{item}</option>;
        })}
      </Form.Select>
    </Form.Group>
  );
};

export default Dropdown;
