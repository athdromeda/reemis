import Dropdown from "../Components/Dropdown";
import { Form, Button, Row, Col } from "react-bootstrap";
import { DropdownOptions } from "../Data/data";

const Tab5 = () => {
  return (
    <Form>
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>RT</Form.Label>
            <Form.Control type="text" inline />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3  ml-4" controlId="formBasicEmail">
            <Form.Label>RW</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Kode Pos</Form.Label>
            <Form.Control type="text" placeholder="Masukkan kode pos" />
          </Form.Group>
        </Col>
      </Row>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Alamat Rinci</Form.Label>
        <Form.Control type="text" placeholder="Misal: Jl. Raya No. X" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Dropdown label="Provinsi" options={DropdownOptions.statusRumah} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Dropdown label="Kab Kota" options={DropdownOptions.statusRumah} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Dropdown label="Kec" options={DropdownOptions.statusRumah} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Tab5;
