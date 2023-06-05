import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { Formik } from "formik";
import styled from "styled-components";

import * as Yup from "yup";
import { AppDispatch, RootState } from "store/store";
import { createCourse } from "store/action/coursesAction";

export const Button = styled.button`
  background: ${(props) => (props.className === "success" ? "green" : "red")};
  border: none;
  border-radius: 0.3rem;
  color: white;
  cursor: pointer;
  height: 1.5rem;
  width: 4rem;
`;

export const FormContainer = styled.div`
  left: 2rem;
  position: relative;
  top: 5rem;
  width: 85%;
  z-index: 0;

  @media screen and (min-width: 576px) {
    width: 96%;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media screen and (min-width: 576px) {
    width: 50%;
  }
`;

export const ErrorContainer = styled.div`
  width: 100%;
  height: 2rem;
  @media screen and (min-width: 576px) {
    width: 50%;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
`;

export const Input = styled.input`
  border-radius: 0.2rem;
  height: 1rem;
  padding: 0.5rem;
  width: 100%;

  @media screen and (min-width: 576px) {
    width: 50%;
  }
`;

export const TextArea = styled.textarea`
  border-radius: 0.2rem;
  max-height: 5rem;
  min-height: 5rem;
  max-width: 100%;
  min-width: 100%;
  padding: 0.5rem;

  @media screen and (min-width: 576px) {
    max-width: 50%;
    min-width: 50%;
  }
`;

const CourseForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { isSubmitting } = useSelector((state: RootState) => state.courses);
  const { t } = useTranslation();

  const validationSchema = Yup.object({
    title: Yup.string().required(),
    description: Yup.string().required(),
  });

  const initialValues = {
    title: "",
    description: "",
  };

  return (
    <FormContainer>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        enableReinitialize={true}
        onSubmit={async (values, { resetForm }) => {
          dispatch(createCourse(values));
          if (!isSubmitting) {
            navigate("/courses");
            resetForm();
          }
        }}
      >
        {({ values, errors, touched, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              name="title"
              placeholder={t("courseForm.titlePlaceholder")}
              onChange={handleChange}
              value={values.title}
            />
            <ErrorContainer>
              <ErrorMessage>
                {errors.title && touched.title && errors.title}
              </ErrorMessage>
            </ErrorContainer>
            <TextArea
              name="description"
              placeholder={t("courseForm.descriptionPlaceholder")}
              onChange={handleChange}
              value={values.description}
            />

            <ErrorContainer>
              <ErrorMessage>
                {errors.description &&
                  touched.description &&
                  errors.description}
              </ErrorMessage>
            </ErrorContainer>

            <Footer>
              {!isSubmitting && (
                <Button
                  type="button"
                  className="danger"
                  onClick={() => navigate("/courses")}
                >
                  {t("courseForm.cancel")}
                </Button>
              )}
              <Button
                type="submit"
                className="success"
                disabled={!values.title}
              >
                {!isSubmitting ? t("courseForm.create") : "submitting"}
              </Button>
            </Footer>
          </form>
        )}
      </Formik>
    </FormContainer>
  );
};

export default CourseForm;
