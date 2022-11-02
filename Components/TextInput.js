import { Form } from "react-bootstrap";

const TextInput = ({ id, label, placeholder="", handleChange, handleValue, errorLog }) => {
  return (
    <Form.Group className="mb-3" controlId={id}>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
        value={handleValue}
      />
      {{errorLog} && (
        <Form.Text className="validationLabel" muted>
          {errorLog}
        </Form.Text>
      )}
    </Form.Group>
  );
};

export default TextInput;