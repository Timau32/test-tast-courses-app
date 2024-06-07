import { useEffect, useState } from 'react';
import { CoursesList, Spinner, Tabs } from 'Components';
import { ICourse, ITabs } from 'interfaces';
import api from 'api/api';
import classes from './Course.module.scss';

const Courses = () => {
  const [courses, setCourses] = useState<ICourse[]>([]);
  const [filteredCourses, setFilteredCourses] = useState<ICourse[]>([]);
  const [tabs, setTabs] = useState<ITabs[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      setIsLoading(true);
      const response = await api.getCourses();
      const tags = response.data.reduce((acc: string[], item: ICourse) => {
        const selectedTags = item.tags.map((tag) => tag);

        return [...acc, ...selectedTags];
      }, []);

      const uniqueTags = Array.from(new Set(tags));
      const transformedToTabs = uniqueTags.map((tag) => ({
        label: tag,
        isActive: false,
        key: tag,
      }));

      transformedToTabs.unshift({
        key: 'All',
        label: 'Все Темы',
        isActive: true,
      });

      setTabs(transformedToTabs);
      setCourses(response.data);
      setFilteredCourses(response.data);
    } catch (err) {
    } finally {
      setIsLoading(false);
    }
  };

  const onTabClick = (tab: ITabs) => {
    if (tab.key === 'All') {
      setFilteredCourses(courses);
    } else {
      setFilteredCourses(courses.filter((course) => course.tags.includes(tab.key)));
    }
    setTabs((prev) =>
      prev.map((originTab) => (tab.key === originTab.key ? { ...originTab, isActive: true } : { ...originTab, isActive: false }))
    );
  };

  return (
    <div className={classes.container}>
      {isLoading ? (
        <Spinner size={40} />
      ) : (
        <>
          <Tabs tabs={tabs} onTabClick={onTabClick} />
          <CoursesList filteredCourses={filteredCourses} />
        </>
      )}
    </div>
  );
};

export default Courses;
