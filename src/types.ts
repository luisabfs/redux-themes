export interface Theme {
  mode: 'light' | 'dark';
  PRIMARY_BACKGROUND_COLOR: string;
  PRIMARY_TEXT_COLOR: string;
  PRIMARY_BUTTON_COLOR: string;
  PRIMARY_BUTTON_TEXT_COLOR: string;
  STATUS_BAR_STYLE: string;
}

export interface ThemeState {
  theme: Theme;
}

export interface SwitchThemeAction {
  type: string;
  payload?: ThemeState;
}

export interface State {
  reducer: ThemeState;
}
