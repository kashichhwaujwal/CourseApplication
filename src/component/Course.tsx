import styled from "styled-components";

const DeleteButton = styled.button`
  background: red;
  border: none;
  border-radius: 0.3rem;
  color: white;
  cursor: pointer;
  height: 2rem;
  position: absolute;
  right: 1rem;
  top: 1.3rem;
  width: 2rem;
`;

const CoursesWrapper = styled.div`
  background: white;
  border-radius: 0.4rem;
  box-shadow: 0rem 0.2rem #f1f0f0;
  height: 4.6rem;
  left: 2rem;
  margin-bottom: 0.5rem;
  overflow-y: auto;
  position: relative;
  top: 5rem;
  width: 85%;
  z-index: 0;

  @media screen and (min-width: 576px) {
    width: 96%;
  }
`;

const CoursesContent = styled.div`
  left: 2.5rem;
  min-height: 2rem;
  position: absolute;
  top: 0.8rem;
  width: 75%;

  @media screen and (min-width: 576px) {
    width: 80%;
  }
`;

const CourseTitle = styled.h1`
  font-size: 1.3rem;
  margin-bottom: 0.2rem;
`;

interface Props {
  course: ICourse;
  setIsDialogBoxOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setCourseId: React.Dispatch<React.SetStateAction<number>>;
}

const Course = ({ course, setIsDialogBoxOpen, setCourseId }: Props) => {
  return (
    <>
      <CoursesWrapper>
        <CoursesContent>
          <CourseTitle>{course.title}</CourseTitle>
          <p>{course.description}</p>
        </CoursesContent>
        <DeleteButton
          type="button"
          onClick={() => {
            if (course.id) {
              setCourseId(course.id);
              setIsDialogBoxOpen(true);
            }
          }}
        >
          X
        </DeleteButton>
      </CoursesWrapper>
    </>
  );
};

export default Course;
