import { Reducer } from 'redux';
import { ThemeState, Theme, SwitchThemeAction } from '../types';
import { lightTheme } from '../themes';

export const Actions = {
  switchTheme: (theme: Theme): SwitchThemeAction => ({
    type: 'SWITCH_THEME',
    payload: { theme },
  }),
};

const INITIAL_STATE: ThemeState = { theme: lightTheme };

const reducer: Reducer<ThemeState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SWITCH_THEME': {
      const { theme } = action.payload;

      return { theme };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
