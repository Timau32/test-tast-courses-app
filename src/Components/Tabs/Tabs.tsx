import { ITabs } from 'interfaces';
import classNames from 'classnames';
import classes from './Tabs.module.scss';

type Props = {
  tabs: ITabs[];
  onTabClick: (tab: ITabs) => void;
};

const Tabs = ({ tabs, onTabClick }: Props) => {
  return (
    <nav className={classes.tabs}>
      <ul>
        {tabs.map((tab) => (
          <li
            className={classNames(classes.tabs_item, tab.isActive && classes.tabs_active)}
            onClick={() => onTabClick(tab)}
            key={tab.key}>
            {tab.label}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Tabs;
