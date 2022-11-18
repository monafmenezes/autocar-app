import jwt_decode from "jwt-decode";
import authService from "../../Auth";
import { Button, Input, Modal, Form } from "antd";
import { useContext } from "react";
import { userContext } from "../../providers/User";

const ModalProfile = ({ open, setOpen }) => {
  const { updateUser } = useContext(userContext);
  const handleSubmit = (data) => {
    const token = authService.getLoggedUser();
    const { sub } = jwt_decode(token);
    updateUser(data, token, sub);
    
  };
  return (
    <Modal
      title="Perfil"
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
        <Form.Item name="name" label="Nome" value="name">
          <Input placeholder="Informe o novo nome" />
        </Form.Item>
        <Form.Item name="password" label="Senha" value="password">
          <Input placeholder="Informe a nova senha" />
        </Form.Item>
        <Form.Item>
          <Button className="mt-4" type="primary" htmlType="submit" block>
            Alterar
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalProfile;
