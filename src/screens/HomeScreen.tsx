import React from 'react';
import { StatusBar } from 'react-native';
import styled, { ThemeProvider } from 'styled-components/native';

import { useSelector, useDispatch } from 'react-redux';
import { Actions } from '../ducks';

import { lightTheme, darkTheme } from '../themes';
import { State, Theme, ThemeState, SwitchThemeAction } from '../types';

const HomeScreen: React.FC = () => {
  const theme = useSelector<State, Theme>((state) => state.reducer.theme);
  const dispatch = useDispatch();

  return (
    <ThemeProvider theme={theme}>
      <StatusBar backgroundColor={theme.PRIMARY_BACKGROUND_COLOR} />
      <Container>
        {theme.mode == 'light' ? (
          <Button
            onPress={(): SwitchThemeAction =>
              dispatch(Actions.switchTheme(darkTheme))
            }
          >
            <ButtonText>Change to Dark Theme</ButtonText>
          </Button>
        ) : (
          <Button
            onPress={(): SwitchThemeAction =>
              dispatch(Actions.switchTheme(lightTheme))
            }
          >
            <ButtonText>Change to Light Theme</ButtonText>
          </Button>
        )}
      </Container>
    </ThemeProvider>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }: ThemeState): string =>
    theme.PRIMARY_BACKGROUND_COLOR};
`;

const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  width: 250px;
  height: 45px;
  border-radius: 10px;
  background-color: ${({ theme }: ThemeState): string =>
    theme.PRIMARY_BUTTON_COLOR};
`;

const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }: ThemeState): string => theme.PRIMARY_TEXT_COLOR};
`;

export default HomeScreen;
