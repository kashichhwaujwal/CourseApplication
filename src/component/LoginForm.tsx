import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import { Formik } from "formik";
import styled from "styled-components";

import * as Yup from "yup";
import { AppDispatch } from "store/store";
import { userLogin } from "store/action/authAction";
import {
  ErrorContainer,
  ErrorMessage,
  Footer,
  FormContainer,
  Input,
} from "./CourseForm";
import { toast } from "react-toastify";

export const Button = styled.button`
  background: ${(props) => (props.className === "success" ? "green" : "red")};
  border: none;
  border-radius: 0.3rem;
  color: white;
  cursor: pointer;
  height: 2rem;
  margin-left: 0.8rem;
  width: 100%;
`;

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { t } = useTranslation();

  const validationSchema = Yup.object({
    identifier: Yup.string().email().required(),
    password: Yup.string().required(),
  });

  const initialValues = {
    identifier: "",
    password: "",
  };

  return (
    <FormContainer>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        enableReinitialize={true}
        onSubmit={async (values, { resetForm }) => {
          const response = await dispatch(userLogin(values));
          resetForm();

          if ((await response).type === "auth/userLogin/fulfilled") {
            navigate("/");
            toast.success(`${t("loginForm.successMessage")}`);
          } else {
            toast.error(`${t("loginForm.errorMessage")}`);
          }
        }}
      >
        {({ values, errors, touched, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              name="identifier"
              placeholder={t("loginForm.emailPlaceholder")}
              onChange={handleChange}
              value={values.identifier}
            />
            <ErrorContainer>
              <ErrorMessage>
                {errors.identifier && touched.identifier && errors.identifier}
              </ErrorMessage>
            </ErrorContainer>

            <Input
              type="password"
              name="password"
              placeholder={t("loginForm.passwordPlaceholder")}
              onChange={handleChange}
              value={values.password}
            />
            <ErrorContainer>
              <ErrorMessage>
                {errors.password && touched.password && errors.password}
              </ErrorMessage>
            </ErrorContainer>

            <Footer>
              <Button
                type="submit"
                className="success"
                disabled={!values.identifier}
              >
                {t("loginForm.submit")}
              </Button>
            </Footer>
          </form>
        )}
      </Formik>
    </FormContainer>
  );
};

export default LoginForm;
