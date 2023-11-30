---
to: app/<%= h.changeCase.paramCase(name) %>/__tests__/index.test.tsx
---
import { fireEvent, render, screen } from '@testing-library/react-native';
import { AppProviders } from 'context/index';
import { router } from 'expo-router';
import { HttpResponse, http } from 'msw';
import { CHARACTER_1 } from 'data/mock';
import { CharacterData } from 'data/operations/characters';
import <%= name %> from '../';

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

describe('<%= name %>', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should show character name and handle nav back', async () => {
    render(<<%= name %> />, {
      wrapper: AppProviders,
    });

    const name = await screen.findByText(CHARACTER_1.name);
    expect(name).toBeTruthy();

    const buttonBack = await screen.findByTestId('nav-button-back');
    fireEvent.press(buttonBack);
    expect(router.back).toHaveBeenCalled();
  });
});
