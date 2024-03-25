import { render, screen } from '@testing-library/react-native';
import { HttpResponse, http } from 'msw';
import { setupServer } from 'msw/node';
import { AppProviders } from 'src/context/index';
import { API_URL } from 'src/data/api';
import { CHARACTER_1, CHARACTER_2, EPISODE_1 } from 'src/data/mock';
import { MultipleCharactersData } from 'src/data/operations/characters';
import { EpisodeData } from 'src/data/operations/episodes';
import EpisodeDetail from '../[id]';

jest.mock('expo-router', () => ({
  useLocalSearchParams: jest.fn().mockReturnValue({ id: 1 }),
  router: {
    back: jest.fn(),
    push: jest.fn(),
  },
}));

const handlers = [
  http.get(`${API_URL}/episode/1`, () => {
    return HttpResponse.json<EpisodeData>(EPISODE_1);
  }),
  http.get(`${API_URL}/character/1,2,0`, () => {
    return HttpResponse.json<MultipleCharactersData>([CHARACTER_1, CHARACTER_2]);
  }),
];

const server = setupServer(...handlers);

describe('EpisodeDetail', () => {
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

  test('should show episode name', async () => {
    render(<EpisodeDetail />, {
      wrapper: AppProviders,
    });

    const episode1 = await screen.findByText(EPISODE_1.name);
    expect(episode1).toBeTruthy();
  });

  test('should show characters names', async () => {
    render(<EpisodeDetail />, {
      wrapper: AppProviders,
    });

    const name1 = await screen.findByText(CHARACTER_1.name);
    expect(name1).toBeTruthy();

    const name2 = await screen.findByText(CHARACTER_2.name);
    expect(name2).toBeTruthy();
  });
});
