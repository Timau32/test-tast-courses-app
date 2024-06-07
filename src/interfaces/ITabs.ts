import { ReactNode } from 'react';

export default interface ITabs {
  key: string;
  label: ReactNode;
  isActive: boolean;
}
