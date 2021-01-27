import { Theme } from '../types';

export const lightTheme: Theme = {
  mode: 'light',
  BACKGROUND_IMAGE: require('../assets/light-background.jpg'),
  PRIMARY_BACKGROUND_COLOR: '#fff',
  PRIMARY_TEXT_COLOR: '#000',
  PRIMARY_BUTTON_COLOR: '#4eb9e4',
  PRIMARY_BUTTON_TEXT_COLOR: '#fff',
  STATUS_BAR_STYLE: 'dark-content',
};

export const darkTheme: Theme = {
  mode: 'dark',
  BACKGROUND_IMAGE: require('../assets/dark-background.jpg'),
  PRIMARY_BACKGROUND_COLOR: '#000',
  PRIMARY_TEXT_COLOR: '#fff',
  PRIMARY_BUTTON_COLOR: '#5f0f94',
  PRIMARY_BUTTON_TEXT_COLOR: '#000',
  STATUS_BAR_STYLE: 'default',
};
