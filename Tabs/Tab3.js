import Dropdown from "../Components/Dropdown";
import { Form, Button } from "react-bootstrap";
import { DropdownOptions } from "../Data/data";

const Tab3 = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nama Ayah</Form.Label>
        <Form.Control type="text" placeholder="Masukkan nama ayah" />
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

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Dropdown
          label="Rata-rata Penghasilan"
          options={DropdownOptions.penghasilan}
        />
      </Form.Group>

    </Form>
  );
};

export default Tab3;
