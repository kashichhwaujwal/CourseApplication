import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import PageTitle from "component/PageTitle";
import { AppDispatch, RootState } from "store/store";
import Course from "component/Course";
import Button from "component/Button";
import DialogBox from "component/DialogBox";
import { deleteCourse, fetchCourses } from "store/action/coursesAction";

export const LoadingCourse = styled.div<{ isLoading: boolean }>`
  animation: rotate 2s infinite linear;
  border: 0.6rem solid grey;
  border-right-color: #19a6e6;
  border-radius: 50%;
  display: ${(props) => (props.isLoading ? "initial" : "none")};
  left: 45%;
  padding: 1.5rem;
  position: absolute;
  top: 45%;
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`;

const CoursePage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { courses } = useSelector((state: RootState) => state.courses);
  const [isDialogBoxOpen, setIsDialogBoxOpen] = useState<boolean>(false);
  const [courseId, setCourseId] = useState<any>();

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  return (
    <>
      <header>
        <PageTitle title={t("course.title")} />
        <Button
          label={t(`course.buttonLabel`)}
          onClick={() => navigate("/courses/add")}
        />
      </header>
      {courses.length > 0 ? (
        courses.map((course) => (
          <Course
            key={course.id}
            course={course}
            setCourseId={setCourseId}
            setIsDialogBoxOpen={setIsDialogBoxOpen}
          />
        ))
      ) : (
        <div className="course__noCourse">{t("course.noCourse")}</div>
      )}
      <LoadingCourse isLoading={courses.length === 0 ? true : false} />
      <DialogBox
        message={t("course.deleteMessage")}
        isOpen={isDialogBoxOpen}
        onConfirm={() => dispatch(deleteCourse(courseId))}
        onClose={() => setIsDialogBoxOpen(false)}
      />
    </>
  );
};

export default CoursePage;
