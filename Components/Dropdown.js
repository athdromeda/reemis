import { Form } from "react-bootstrap";

const Dropdown = ({
  id = "",
  label,
  options = ["Data", "not", "displayed", "correctly"],
  handleChange = () => {
    return;
  },
  handleValue = "",
}) => {
  return (
    <Form.Group className="mb-3" controlId={id}>
      <Form.Label>{label}</Form.Label>
      <Form.Select onChange={handleChange} value={handleValue}>
        {options.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </Form.Select>
    </Form.Group>
  );
};

export default Dropdown;
