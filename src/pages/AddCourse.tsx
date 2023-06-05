import { useTranslation } from "react-i18next";

import PageTitle from "component/PageTitle";
import CourseForm from "component/CourseForm";

const AddCourse = () => {
  const { t } = useTranslation();

  return (
    <>
      <PageTitle title={t("addCourse.title")} />
      <CourseForm />
    </>
  );
};

export default AddCourse;
