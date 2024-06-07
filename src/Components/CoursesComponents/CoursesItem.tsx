import { ICourse } from 'interfaces';
import classes from './Courses.module.scss';

type Props = {
  course: ICourse;
};

const CoursesItem = ({ course }: Props) => {
  return (
    <div className={classes.list_item}>
      <div style={{ background: course.bgColor }} className={classes.list_item_holder}>
        <img src={course.image} alt="About course" />
      </div>
      <h2>{course.name}</h2>
    </div>
  );
};

export default CoursesItem;
