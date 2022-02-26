import { Select } from 'antd';
import { getCountry, setCountry } from '../../common/ducks/settings';
import { useAppDispatch } from '../../hooks/app-dispatch/use-app-dispatch';
import { useAppSelector } from '../../hooks/app-selector/use-app-selector';

export const CountrySwitch = () => {
  const country = useAppSelector(getCountry);
  const dispatch = useAppDispatch();
  const handleOnChange = (e: Country) => {
    dispatch(setCountry(e));
  };
  return (
    <Select value={country} onChange={handleOnChange}>
      <Select.Option value="gb">GB</Select.Option>
      <Select.Option value="us">US</Select.Option>
    </Select>
  );
};
