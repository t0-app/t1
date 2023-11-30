import { fireEvent, render, screen } from '@testing-library/react-native';
import { router } from 'expo-router';
import { HttpResponse, http } from 'msw';
import { AppProviders } from 'src/context/index';
import { CHARACTER_1, CHARACTER_2 } from 'src/data/mock';
import { CharactersData } from 'src/data/operations/characters';
import Characters from './..';

jest.mock('expo-router', () => {
  return {
    router: {
      back: jest.fn(),
      push: jest.fn(),
    },
  };
});

http.get(`/character/`, () => {
  return HttpResponse.json<CharactersData>({
    info: {
      count: 826,
      pages: 42,
      next: null,
      prev: null,
    },
    results: [CHARACTER_1, CHARACTER_2],
  });
});

describe('Characters', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should show character name and nav to /character/1', async () => {
    render(<Characters />, {
      wrapper: AppProviders,
    });

    const name = await screen.findByText(CHARACTER_1.name);
    expect(name).toBeTruthy();

    const card1 = await screen.findByTestId(`card-${CHARACTER_1.id}`);
    fireEvent.press(card1);
    expect(router.push).toHaveBeenCalledWith(`/characters/${CHARACTER_1.id}`);
  });
});
