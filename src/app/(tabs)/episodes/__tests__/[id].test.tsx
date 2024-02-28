import { render, screen } from '@testing-library/react-native';
import { HttpResponse, http } from 'msw';
import { AppProviders } from 'src/context/index';
import { EPISODE_1 } from 'src/data/mock';
import { EpisodeData } from 'src/data/operations/episodes';
import EpisodeDetail from './../[id]';

jest.mock('expo-router', () => ({
  useLocalSearchParams: jest.fn().mockReturnValue({ id: 1 }),
  router: {
    back: jest.fn(),
    push: jest.fn(),
  },
}));

http.get(`/episode/1`, () => {
  return HttpResponse.json<EpisodeData>(EPISODE_1);
});

describe('EpisodeDetail', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should show episode name', async () => {
    render(<EpisodeDetail />, {
      wrapper: AppProviders,
    });

    const name = await screen.findByText(EPISODE_1.name);
    expect(name).toBeTruthy();
  });
});
