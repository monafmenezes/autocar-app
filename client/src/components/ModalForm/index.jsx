import { Button, Input, Modal, Form } from "antd";
import { useContext } from "react";
import { useState } from "react";
import { CarContext } from "../../providers/cars";
import { SlPicture } from "react-icons/sl";

const ModalForm = ({ open, setOpen, id = null, setId = null }) => {
  const { createCar, updateCar, getCars } = useContext(CarContext);
  const [file, setFile] = useState(null);
  const up = async (event) => {
    setFile(event.target.files[0]);
  };
  const handleSubmit = ({ model, mark, year, km, price }) => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      if (id) {
        updateCar(formData, id);
        setOpen(false);
        setId(null);
        getCars();
        return;
      }
      formData.append("model", model);
      formData.append("mark", mark);
      formData.append("year", year);
      formData.append("km", km);
      formData.append("price", price);

      createCar(formData);
      setOpen(false);
      getCars();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Modal
      title={id ? "Adicione uma nova foto" : "Insira as novas informações"}
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
        {!id && (
          <>
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
          </>
        )}
        <label className="mb-5">Faça o upload a foto</label>
        <label htmlFor="upload-file-select">
          <SlPicture className="cursor-pointer" size={30} color="#ffcc00" />
          <input
            className="invisible"
            id="upload-file-select"
            type="file"
            onChange={(e) => up(e)}
          />
        </label>
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
