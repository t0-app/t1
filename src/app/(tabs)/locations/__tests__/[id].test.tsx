import { render, screen } from '@testing-library/react-native';
import { HttpResponse, http } from 'msw';
import { setupServer } from 'msw/node';
import { AppProviders } from 'src/context/index';
import { API_URL } from 'src/data/api';
import { CHARACTER_1, CHARACTER_2, LOCATION_3 } from 'src/data/mock';
import { MultipleCharactersData } from 'src/data/operations/characters';
import { LocationData } from 'src/data/operations/locations';
import LocationDetail from './../[id]';

jest.mock('expo-router', () => ({
  useLocalSearchParams: jest.fn().mockReturnValue({ id: 3 }),
  router: {
    back: jest.fn(),
    push: jest.fn(),
  },
}));

const handlers = [
  http.get(`${API_URL}/location/3`, () => {
    return HttpResponse.json<LocationData>(LOCATION_3);
  }),
  http.get(`${API_URL}/character/1,2,0`, () => {
    return HttpResponse.json<MultipleCharactersData>([CHARACTER_1, CHARACTER_2]);
  }),
];

const server = setupServer(...handlers);

describe('LocationDetail', () => {
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

  test('should show location name', async () => {
    render(<LocationDetail />, {
      wrapper: AppProviders,
    });

    const location = await screen.findByText(LOCATION_3.name);
    expect(location).toBeTruthy();
  });

  test('should show residents names', async () => {
    render(<LocationDetail />, {
      wrapper: AppProviders,
    });

    const name1 = await screen.findByText(CHARACTER_1.name);
    expect(name1).toBeTruthy();

    const name2 = await screen.findByText(CHARACTER_2.name);
    expect(name2).toBeTruthy();
  });
});
