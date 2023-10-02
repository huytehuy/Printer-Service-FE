import {
  Dispatch,
  FunctionComponent,
  SVGProps,
  SetStateAction,
  ReactNode,
} from 'react';
import { Vehicle } from '~/features/monitor/types';

export type ControlColsChangeProps = {
  listCol: ColsChange<Vehicle>[];
  ItemsChangeCheckbox: any[];
  ItemsChangeCheckboxMobile: any[];
  indicator?: number[];
  setIndicator?: Dispatch<SetStateAction<number[]>>;
  indicatorSetting: number[];
  setIndicatorSetting: Dispatch<SetStateAction<number[]>>;
  indicatorSettingMobile: string[];
  setIndicatorSettingMobile: Dispatch<SetStateAction<string[]>>;
  items: any[];
  setItems: Dispatch<SetStateAction<any[]>>;
  itemsChange: any[];
  setItemsChange: Dispatch<SetStateAction<any[]>>;
  itemsChangeMobile: any[];
  setItemsChangeMobile: Dispatch<SetStateAction<any[]>>;
  isOpenSetting: boolean;
  openSetting: () => void;
  closeSetting: () => void;
  saveChangeCols: () => void;
  settingDefault: () => void;
  isShowDriverName: boolean;
  setIsShowDriverName: Dispatch<SetStateAction<boolean>>;
  isShowDriverNameTemp: boolean;
  setIsShowDriverNameTemp: Dispatch<SetStateAction<boolean>>;
};

export type ColsChange<T> = {
  accessorKey: string & keyof T;
  header: string;
  accessorFn?: (vehicle: T) => ReactNode;
  hidden: boolean;
  isMoved: boolean;
  icon?: FunctionComponent<
    SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
};
