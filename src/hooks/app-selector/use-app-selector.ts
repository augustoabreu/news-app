import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../../store/config';
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
