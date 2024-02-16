import { fireEvent, render, screen } from '@testing-library/react-native';
import { router } from 'expo-router';
import { HttpResponse, http } from 'msw';
import { AppProviders } from 'src/context/index';
import { LOCATION_1, LOCATION_2, LOCATION_3 } from 'src/data/mock';
import { LocationsData } from 'src/data/operations/locations';
import Locations from './..';

jest.mock('expo-router', () => {
  return {
    router: {
      back: jest.fn(),
      push: jest.fn(),
    },
  };
});

http.get(`/location/`, () => {
  return HttpResponse.json<LocationsData>({
    info: {
      count: 126,
      pages: 7,
      next: null,
      prev: null,
    },
    results: [LOCATION_1, LOCATION_2, LOCATION_3],
  });
});

describe('Locations', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should show location name and nav to /location/1', async () => {
    render(<Locations />, {
      wrapper: AppProviders,
    });

    const name = await screen.findByText(LOCATION_1.name);
    expect(name).toBeTruthy();

    const cell1 = await screen.findByTestId(`cell-${LOCATION_1.id}`);
    fireEvent.press(cell1);
    expect(router.push).toHaveBeenCalledWith(`/locations/${LOCATION_1.id}`);
  });
});
