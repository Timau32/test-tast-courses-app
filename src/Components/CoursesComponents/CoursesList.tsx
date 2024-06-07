import { ICourse } from 'interfaces';
import CoursesItem from './CoursesItem';
import classes from './Courses.module.scss';

type Props = {
  filteredCourses: ICourse[];
};

const CoursesList = ({ filteredCourses }: Props) => {
  return (
    <div className={classes.list}>
      {filteredCourses.map((course) => (
        <CoursesItem key={`image-${course.id}`} course={course} />
      ))}
    </div>
  );
};

export default CoursesList;
