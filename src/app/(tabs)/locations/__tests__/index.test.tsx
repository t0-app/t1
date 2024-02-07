import { render, screen } from '@testing-library/react-native';
import { HttpResponse, http } from 'msw';
import { AppProviders } from 'src/context/index';
import { CHARACTER_1 } from 'src/data/mock';
import { CharacterData } from 'src/data/operations/characters';
import Locations from '..';

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

describe('Locations', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should show character name', async () => {
    render(<Locations />, {
      wrapper: AppProviders,
    });

    const name = await screen.findByText(CHARACTER_1.name);
    expect(name).toBeTruthy();
  });
});
