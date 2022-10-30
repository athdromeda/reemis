import Dropdown from "../Components/Dropdown";
import { Form, Button } from "react-bootstrap";
import { DropdownOptions } from "../Data/data";

const Tab2 = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nama Ibu</Form.Label>
        <Form.Control type="text" placeholder="Masukkan nama ibu" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>NIK</Form.Label>
        <Form.Control type="text" placeholder="Masukkan NIK" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Telepon</Form.Label>
        <Form.Control type="text" placeholder="Masukkan nomor telepon" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Dropdown label="Pekerjaan" options={DropdownOptions.pekerjaan} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Dropdown label="Pendidikan" options={DropdownOptions.pendidikan} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Kembali
      </Button>
      <Button variant="primary" type="submit">
        Lanjut
      </Button>
    </Form>
  );
};

export default Tab2;
