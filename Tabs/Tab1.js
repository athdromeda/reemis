import Dropdown from "../Components/Dropdown";
import { Form, Button, Row, Col } from "react-bootstrap";
import { DropdownOptions } from "../Data/data";
import { useState } from "react";

const Tab1 = () => {
  const [isWNA, setWNA] = useState(false);

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nama</Form.Label>
        <Form.Control type="text" placeholder="Masukkan nama lengkap" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Jenis Kelamin</Form.Label>
        <br />
        <Form.Check
          inline
          label="Laki-laki"
          name="group1"
          type="radio"
          id="inline-radio-1"
          checked
        />
        <Form.Check
          inline
          label="Perempuan"
          name="group1"
          type="radio"
          id="inline-radio-2"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Kewarganegaraan</Form.Label>
        <br />
        <Form.Check
          inline
          label="WNI"
          name="group2"
          type="radio"
          id="inline-radio-1"
          checked
        />
        <Form.Check
          inline
          label="WNA"
          name="group2"
          type="radio"
          id="inline-radio-2"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>TTL</Form.Label>
        <Row>
          <Col>
            <Form.Control type="text" placeholder="Tempat lahir" />
          </Col>
          <Col>
            <Form.Control type="date" />
          </Col>
        </Row>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>NISN</Form.Label>
        <Form.Control
          type="text"
          placeholder="Masukkan Nomor Induk Siswa Nasional"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>No. KK</Form.Label>
        <Form.Control type="text" placeholder="Masukkan Nomor Kartu Keluarga" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>NIK</Form.Label>
        <Form.Control type="text" placeholder="Masukkan NIK" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>NISM</Form.Label>
        <Form.Control
          type="text"
          placeholder="Masukkan Nomor Induk Siswa Madrasah"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>KIP</Form.Label>
        <Form.Control
          type="text"
          placeholder="Masukkan Nomor Kartu Indonesia Pintar"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPKH">
        <Form.Label>PKH</Form.Label>
        <Form.Control
          type="text"
          placeholder="Masukkan Nomor Program Keluarga Harapan"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>KKS</Form.Label>
        <Form.Control
          type="text"
          placeholder="Masukkan Nomor Kartu Keluarga Sejahtera"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>No Paspor</Form.Label>
        <Form.Control type="text" placeholder="Masukkan Nomor Paspor" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Dropdown label="Hobi" options={DropdownOptions.hobi} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Dropdown label="Cita-cita" options={DropdownOptions.citaCita} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Dropdown
          label="Kebutuhan Khusus"
          options={DropdownOptions.kebutuhanKhusus}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Dropdown label="Status Rumah" options={DropdownOptions.statusRumah} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Status Mukim</Form.Label>
        <br />
        <Form.Check
          inline
          label="Mukim"
          name="group3"
          type="radio"
          id="inline-radio-1"
          checked
        />
        <Form.Check
          inline
          label="Tidak"
          name="group3"
          type="radio"
          id="inline-radio-2"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Tab1;
