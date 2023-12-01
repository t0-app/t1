import { render, screen } from '@testing-library/react-native';
import { HttpResponse, http } from 'msw';
import { AppProviders } from 'src/context/index';
import { CHARACTER_1 } from 'src/data/mock';
import { CharacterData } from 'src/data/operations/characters';
import Profile from '..';

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

describe('Profile', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should show profile text', async () => {
    render(<Profile />, {
      wrapper: AppProviders,
    });

    const name = screen.getByText('Profile');
    expect(name).toBeTruthy();
  });
});
