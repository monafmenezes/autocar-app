import { Button, Form, Input } from "antd";
import authService from "../../Auth";
import jwt_decode from "jwt-decode";
import { userContext } from "../../providers/User";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const LoginAdmin = () => {

  const { getUser, setUser } = useContext(userContext);
  const navigate = useNavigate()

  const onFinish = async ({email, password}) => {
    try {
      const res = await authService.authenticate({email, password});
      authService.setLoggedUser(res.data.token);
      const decode = jwt_decode(res.data.token);
      const user = await getUser(decode.sub, res.data.token);
      setUser(user.data);
      if (user.data.isAdmin === true) {
        navigate("/admin");
        toast.success("Login realizado com sucesso!")
      } else {
        localStorage.clear();
      }
      
    } catch (err) {
        toast.error("Email ou senha inválidos")
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className="p-16 flex flex-col items-center justify-center">
      <h1 className="text-lg font-poppins mb-10">Login Admin</h1>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Informe seu email",
            },
            {type: "email", message: "Informe um email válido"}
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Informe seu password",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Acessar
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginAdmin;
