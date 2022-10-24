import { FC } from 'react';
import {
  useAppDispatch,
  useAppSelector,
} from '../app/hooks';
import {
  modeSelector,
  setDark,
  setLight,
} from './slice';

type ModeProps = {
  className?: string
}

const Mode: FC<ModeProps> = function () {  
    const dispatch = useAppDispatch();
    const mode = useAppSelector(modeSelector);

    const handleSelect = (evt: React.ChangeEvent<HTMLSelectElement>) => {
      setDark()
      switch (evt.target.value) {
        case "dark":
          dispatch(setDark());
          break;
        case "light":
          dispatch(setLight());
          break;
        default: console.error("unknown theme", evt.target.value);
      }
    }

    return (
        <div className="flex items-center w-half mb-6">
          <div className="w-200">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
              Switch theme
            </label>
          </div>
          <div className="w-60">
            <select 
                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline text-black"
                onChange={handleSelect}
                value={mode}
              >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              {/* <option value="systems">other</option> */}
            
            </select>

          </div>
        </div>
    );
}


export default Mode;