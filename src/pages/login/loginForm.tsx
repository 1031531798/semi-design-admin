import { usePrefixCls } from "../../hook/useConfig";
import { useLocale } from "../../locales";
import LoginInput from "../../components/input/loginInput";
import { InputStatus } from "../../enum/common";
import {
  IconUser,
  IconTickCircle,
  IconClear,
  IconLockStroked,
  IconUploadError,
} from "@douyinfe/semi-icons";
import { useState } from "react";
import { cloneDeep } from "lodash";
import { LoginInputRenderProps } from "../../components/input/types";
import { Button, Checkbox, Tooltip, Typography } from "@douyinfe/semi-ui";
import googleLogo from "@/assets/image/login/google_logo.png";
import twitterLogo from "@/assets/image/login/twitter_logo.png";
import { useGoogleAuth } from "../../hook/useGoogleAuth";
import useStore from "../../store";
import { webSettings } from "../../config/setting";
import { loginUser } from "../../api/login";
import { useNavigate } from "react-router-dom";
import useUserStore from "../../store/user";
const LoginForm = (props: { setFormActive: (active: string) => void }) => {
  const prefixCls = usePrefixCls("login-main-body");
  const { getFormatText } = useLocale();
  const { setFormActive } = props;
  const { Text } = Typography;
  const { setToken } = useStore();
  const { setUserInfo } = useUserStore();
  const [loginLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  const iconMap = {
    [InputStatus.wait]: "",
    [InputStatus.success]: (
      <IconTickCircle style={{ color: "var(--semi-color-success)" }} />
    ),
    [InputStatus.error]: (
      <IconClear style={{ color: "var(--semi-color-danger)" }} />
    ),
    [InputStatus.warning]: (
      <IconUploadError style={{ color: "var(--semi-color-warning)" }} />
    ),
  };
  // 表单状态控制
  const [statusMap, setStatusMap] = useState({
    userName: InputStatus.wait,
    password: InputStatus.wait,
  });
  // 变更 输入框状态
  function changeStatus(field: "userName" | "password", value: InputStatus) {
    const data = cloneDeep(statusMap);
    data[field] = value;
    setStatusMap(data);
  }
  const [formData, setFormData] = useState({ userName: "", password: "" });
  // 变更 form数据
  function changeFormData(field: "userName" | "password", value: string) {
    const data = cloneDeep(formData);
    data[field] = value;
    setFormData(data);
  }

  function renderInputs() {
    const inputList: LoginInputRenderProps[] = [
      {
        type: "userName",
        icon: <IconUser size={"inherit"} />,
        status: statusMap.userName,
        placeholder: getFormatText("web.login.userName"),
      },
      {
        type: "password",
        icon: <IconLockStroked size={"inherit"} />,
        enterEvent: submitForm,
        status: statusMap.password,
        placeholder: getFormatText("web.login.password"),
      },
    ];
    return inputList.map((input) => {
      return (
        <LoginInput
          key={input.type}
          changeData={(value: string) => changeFormData(input.type, value)}
          mode={input.type === "password" ? "password" : undefined}
          icon={input.icon}
          enterEvent={input.enterEvent}
          status={input.status}
          suffix={iconMap[input.status]}
          placeholder={input.placeholder}
        />
      );
    });
  }

  // 渲染其他登录方式
  function renderJoinBox() {
    const joinList = [
      {
        label: "Google",
        icon: <img src={googleLogo} alt={"google"} />,
        click: useGoogleAuth,
      },
      {
        label: "GitHub",
        icon: (
          <svg
            height="40"
            aria-hidden="true"
            viewBox="0 0 16 16"
            version="1.1"
            width="40"
            data-view-component="true"
            style={{ fill: "rgba(var(--semi-grey-9), 1)" }}
          >
            <path
              fillRule={"evenodd"}
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
            ></path>
          </svg>
        ),
        url: "",
      },
      {
        label: "Twitter",
        icon: <img src={twitterLogo} alt={"Twitter"} />,
        url: "",
      },
    ];
    return joinList.map((item) => {
      return (
        <Tooltip position={"bottom"} content={item.label} key={item.label}>
          <div className={"join-box"} onClick={item.click}>
            {item.icon}
          </div>
        </Tooltip>
      );
    });
  }
  const submitForm = () => {
    setLoading(true);
    setTimeout(() => {
      setToken("admin");
      setUserInfo({ userName: "admin", password: '123', userToken: '123', createTime: new Date().getTime() + '' });
      setLoading(false);
      navigate(webSettings.defaultRouter);
    }, 1000);
    // loginUser({
    //   ...formData,
    //   userName: formData.userName,
    // })
    //   .then((res) => {
    //     const { data } = res;
    //     setToken(data.data.userToken);
    //     setUserInfo(data.data);
    //     setLoading(false);
    //     navigate(webSettings.defaultRouter);
    //   })
    //   .catch(() => {
    //     setLoading(false);
    //   });
  };

  return (
    <div className={`${prefixCls}-form flex flex-col`}>
      <div className={`${prefixCls}-form-head`}>
        <h1>{getFormatText("web.login.welcome")}</h1>
        <span>{getFormatText("web.login.desc")}</span>
      </div>
      <div className={`${prefixCls}-form-body`}>
        {renderInputs()}
        <div className={`flex flex-row ${prefixCls}-form-body-operate`}>
          <Checkbox className={"remember-me"}>
            {getFormatText("web.login.remember")}
          </Checkbox>
          <Text link>{getFormatText("web.login.forgetPassword")}</Text>
        </div>
        <div className={`flex flex-row ${prefixCls}-form-body-menu`}>
          <Button
            loading={loginLoading}
            theme="solid"
            size="large"
            onClick={submitForm}
          >
            {getFormatText("web.login.loginText")}
          </Button>
          <Button
            size="large"
            onClick={() => {
              setFormActive("register");
            }}
          >
            {getFormatText("web.login.register")}
          </Button>
        </div>
        <div className={`${prefixCls}-form-body-join`}>
          <Text style={{ color: "rgba(var(--semi-grey-7), 1)" }}>
            {getFormatText("web.login.join")}
          </Text>
          <div style={{ marginTop: "1rem" }} className={"flex flex-row"}>
            {renderJoinBox()}
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginForm;
