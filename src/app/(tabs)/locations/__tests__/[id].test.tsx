import { render, screen } from '@testing-library/react-native';
import { HttpResponse, http } from 'msw';
import { AppProviders } from 'src/context/index';
import { LOCATION_1 } from 'src/data/mock';
import { LocationData } from 'src/data/operations/locations';
import LocationDetail from './../[id]';

jest.mock('expo-router', () => ({
  useLocalSearchParams: jest.fn().mockReturnValue({ id: 1 }),
  router: {
    back: jest.fn(),
    push: jest.fn(),
  },
}));

http.get(`/location/1`, () => {
  return HttpResponse.json<LocationData>(LOCATION_1);
});

describe('LocationDetail', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should show location name', async () => {
    render(<LocationDetail />, {
      wrapper: AppProviders,
    });

    const name = await screen.findByText(LOCATION_1.name);
    expect(name).toBeTruthy();
  });
});
