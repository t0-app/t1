import { render, screen } from '@testing-library/react-native';
import { AppProviders } from 'context/index';
import { useLocalSearchParams } from 'expo-router';
import { HttpResponse, http } from 'msw';
import { CHARACTER_1 } from 'data/mock';
import { CharacterData } from 'data/operations/characters';
import CharacterDetail from '../[id]';

jest.mock('expo-router');

const id = CHARACTER_1.id;

(useLocalSearchParams as jest.Mock).mockReturnValue({
  id,
});

http.get(`/character/${id}`, () => {
  return HttpResponse.json<CharacterData>(CHARACTER_1);
});

describe('CharacterDetail', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should show character name', async () => {
    render(<CharacterDetail />, {
      wrapper: AppProviders,
    });

    const name = await screen.findByText(CHARACTER_1.name);
    expect(name).toBeTruthy();
  });
});
