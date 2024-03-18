import { render, screen } from '@testing-library/react-native';
import { HttpResponse, http } from 'msw';
import { setupServer } from 'msw/node';
import { AppProviders } from 'src/context/index';
import { API_URL } from 'src/data/api';
import { CHARACTER_1, EPISODE_1, EPISODE_2, EPISODE_3 } from 'src/data/mock';
import { CharacterData } from 'src/data/operations/characters';
import { MultipleEpisodesData } from 'src/data/operations/episodes';
import CharacterDetail from './../[id]';

jest.mock('expo-router', () => ({
  useLocalSearchParams: jest.fn().mockReturnValue({ id: 1 }),
  router: {
    back: jest.fn(),
    push: jest.fn(),
  },
}));

const handlers = [
  http.get(`${API_URL}/character/1`, () => {
    return HttpResponse.json<CharacterData>(CHARACTER_1);
  }),
  http.get(`${API_URL}/episode/1,2,3,0`, () => {
    return HttpResponse.json<MultipleEpisodesData>([EPISODE_1, EPISODE_2, EPISODE_3]);
  }),
];

const server = setupServer(...handlers);

describe('CharacterDetail', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  beforeAll(() => {
    // Start the interception.
    server.listen();
  });

  afterEach(() => {
    // Remove any handlers you may have added
    // in individual tests (runtime handlers).
    server.resetHandlers();
  });

  afterAll(() => {
    // Disable request interception and clean up.
    server.close();
  });

  test('should show character name', async () => {
    render(<CharacterDetail />, {
      wrapper: AppProviders,
    });

    const name = await screen.findByText(CHARACTER_1.name);
    expect(name).toBeTruthy();
  });

  test('should show episodes', async () => {
    render(<CharacterDetail />, {
      wrapper: AppProviders,
    });

    const episode1 = await screen.findByText(EPISODE_1.name);
    expect(episode1).toBeTruthy();

    const episode2 = await screen.findByText(EPISODE_2.name);
    expect(episode2).toBeTruthy();

    const episode3 = await screen.findByText(EPISODE_3.name);
    expect(episode3).toBeTruthy();
  });
});
