import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

type Props = {
  size?: string | number;
  color?: string;
  width?: string;
  height?: string;
};

const Spinner = ({ size = 25, color = 'inherit', width = '100%', height = '100vh' }: Props) => {
  const antIcon = <LoadingOutlined style={{ fontSize: size, color }} spin />;
  return (
    <div
      style={{
        width,
        height,
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <Spin indicator={antIcon} />
    </div>
  );
};

export default Spinner;
