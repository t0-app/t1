import { fireEvent, render, screen } from '@testing-library/react-native';
import { router } from 'expo-router';
import { HttpResponse, http } from 'msw';
import { AppProviders } from 'src/context/index';
import { EPISODE_1, EPISODE_2 } from 'src/data/mock';
import { EpisodesData } from 'src/data/operations/episodes';
import Episodes from './..';

jest.mock('expo-router', () => {
  return {
    router: {
      back: jest.fn(),
      push: jest.fn(),
    },
  };
});

http.get(`/episode/`, () => {
  return HttpResponse.json<EpisodesData>({
    info: {
      count: 51,
      pages: 3,
      next: null,
      prev: null,
    },
    results: [EPISODE_1, EPISODE_2],
  });
});

describe('Episodes', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should show episode name and nav to /episode/1', async () => {
    render(<Episodes />, {
      wrapper: AppProviders,
    });

    const name = await screen.findByText(EPISODE_1.name);
    expect(name).toBeTruthy();

    const cell1 = await screen.findByTestId(`cell-${EPISODE_1.id}`);
    fireEvent.press(cell1);
    expect(router.push).toHaveBeenCalledWith(`/episodes/${EPISODE_1.id}`);
  });
});
