import { useTranslation } from "react-i18next";

import PageTitle from "component/PageTitle";
import LoginForm from "component/LoginForm";

const LoginPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle title={t("loginPage.title")} />
      <LoginForm />
    </>
  );
};

export default LoginPage;
