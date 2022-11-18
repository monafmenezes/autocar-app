import { Button, Input, Modal, Upload, Form } from "antd";
import { useContext } from "react";
import { useState } from "react";
import { CarContext } from "../../providers/cars";

const ModalForm = ({ open, setOpen }) => {
  const { createCar } = useContext(CarContext);
  const [file, setFile] = useState([]);
  const up = async (event) => {
    setFile(event.target.files[0]);
  };
  const handleSubmit = ({ model, mark, year, km, price }) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("model", model);
      formData.append("mark", mark);
      formData.append("year", year);
      formData.append("km", km);
      formData.append("price", price);
      createCar(formData);
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Modal
      title="Adicione um novo veículo"
      open={open}
      onCancel={() => setOpen(false)}
      footer={[]}
    >
      <Form
        name="form"
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={handleSubmit}
        autoComplete="off"
      >
        <Form.Item name="model" label="Modelo" value="model">
          <Input placeholder="Informe o modelo" />
        </Form.Item>
        <Form.Item name="mark" label="Marca" value="mark">
          <Input placeholder="Informe a marca" />
        </Form.Item>
        <Form.Item name="year" label="Ano" value="year">
          <Input placeholder="Informe o ano" />
        </Form.Item>
        <Form.Item name="km" label="Km">
          <Input placeholder="Informe a quilometragem" value="km" />
        </Form.Item>
        <Form.Item name="price" label="Preço">
          <Input placeholder="Informe preço" />
        </Form.Item>
        {/* <Upload onChange={(e) => up(e)}>
          <Button danger className="mb-4">
            Upload
          </Button>
        </Upload> */}
        <input type="file" onChange={(e) => up(e)} />
        <Form.Item>
          <Button className="mt-4" type="primary" htmlType="submit" block>
            Enviar
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalForm;
