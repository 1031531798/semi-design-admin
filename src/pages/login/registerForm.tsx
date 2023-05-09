import { usePrefixCls } from "../../hook/useConfig";
import "./register.scss";
import { Button, Form, Row, Toast } from "@douyinfe/semi-ui";
import { BaseFormApi } from "@douyinfe/semi-foundation/form/interface";
import { useState } from "react";
import { InputMode } from "@douyinfe/semi-ui/lib/es/input";
import { registerUser } from "../../api/login";
interface RegisterFormProps {
  setFormActive: (active: string) => void;
}
const RegisterForm = ({ setFormActive }: RegisterFormProps) => {
  const prefixCls = usePrefixCls("login-register");
  const { Input } = Form;
  const [loading, setLoading] = useState(false);
  // form api
  let formApi: BaseFormApi;
  const getFormApi = (api: BaseFormApi) => {
    formApi = api;
  };

  function handleRegister() {
    formApi.validate().then(() => {
      setLoading(true);
      registerUser(formApi.getFormState().values)
        .then(() => {
          Toast.success("注册成功,请登录");
          formApi.reset();
          setLoading(false);
          handleBack();
        })
        .catch(() => {
          setLoading(false);
        });
    });
  }
  function handleBack() {
    setFormActive("login");
  }

  // 渲染注册表输入框
  const renderInput = () => {
    const inputList = [
      {
        label: "用户名",
        placeholder: "请输入用户名",
        field: "userName",
        rules: [
          { required: true, message: "用户名不能为空" },
          { min: 6, max: 14, message: "请输入6-14位字符" },
        ],
      },
      {
        label: "密码",
        mode: "password",
        placeholder: "请输入密码",
        field: "password",
        rules: [
          { required: true, message: "密码不能为空" },
          { min: 6, max: 14, message: "请输入6-14位字符" },
        ],
      },
      {
        label: "确认密码",
        mode: "password",
        placeholder: "请输入确认密码",
        field: "confirmPassword",
        rules: [
          { required: true, message: "确认密码不能为空" },
          { min: 6, max: 14, message: "请输入6-14位字符" },
          {
            validator: (rule: any, value: string) => {
              const formState = formApi.getFormState();
              return value === formState.values.password;
            },
            message: "两次密码不一致",
          },
        ],
      },
    ];
    return inputList.map((item) => (
      <Input
        key={item.field}
        label={item.label}
        mode={item.mode as InputMode}
        size={"large"}
        placeholder={item.placeholder}
        field={item.field}
        rules={item.rules}
      />
    ));
  };
  return (
    <div className={`${prefixCls} flex flex-col`}>
      <h2>注册账号</h2>
      <Form getFormApi={getFormApi}>
        <Row>{renderInput()}</Row>
      </Form>
      <Button
        loading={loading}
        size={"large"}
        block
        theme="solid"
        type="primary"
        style={{ marginBottom: "20px", marginTop: "10px" }}
        onClick={handleRegister}
      >
        确认注册
      </Button>
      <Button
        size={"large"}
        block
        theme="solid"
        type="tertiary"
        onClick={handleBack}
      >
        返回登录
      </Button>
    </div>
  );
};

export default RegisterForm;
