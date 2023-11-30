import { fireEvent, render, screen } from '@testing-library/react-native';
import { AppProviders } from 'context/index';
import { router } from 'expo-router';
import { HttpResponse, http } from 'msw';
import { CHARACTER_1 } from 'data/mock';
import { CharacterData } from 'data/operations/characters';
import CharacterDetail from '../[id]';

jest.mock('expo-router', () => ({
  useLocalSearchParams: jest.fn().mockReturnValue({ id: 1 }),
  router: {
    back: jest.fn(),
    push: jest.fn(),
  },
}));

http.get(`/character/1`, () => {
  return HttpResponse.json<CharacterData>(CHARACTER_1);
});

describe('CharacterDetail', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should show character name and handle nav back', async () => {
    render(<CharacterDetail />, {
      wrapper: AppProviders,
    });

    const name = await screen.findByText(CHARACTER_1.name);
    expect(name).toBeTruthy();

    const buttonBack = await screen.findByTestId('nav-button-back');
    fireEvent.press(buttonBack);
    expect(router.back).toHaveBeenCalled();
  });
});
