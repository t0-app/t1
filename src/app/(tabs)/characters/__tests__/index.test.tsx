import { fireEvent, render, screen } from '@testing-library/react-native';
import { router } from 'expo-router';
import { HttpResponse, http } from 'msw';
import { setupServer } from 'msw/node';
import { AppProviders } from 'src/context/index';
import { API_URL } from 'src/data/api';
import { CHARACTER_1, CHARACTER_2, CHARACTER_3 } from 'src/data/mock';
import { CharactersData } from 'src/data/operations/characters';
import Characters from './..';

jest.mock('expo-router', () => {
  return {
    router: {
      back: jest.fn(),
      push: jest.fn(),
    },
  };
});

const handlers = [
  http.get(`${API_URL}/character/`, ({ request }) => {
    const url = new URL(request.url);
    const name = url.searchParams.get('name');

    if (name) {
      return HttpResponse.json<CharactersData>({
        info: {
          count: 826,
          pages: 42,
          next: null,
          prev: null,
        },
        results: [CHARACTER_3],
      });
    }

    return HttpResponse.json<CharactersData>({
      info: {
        count: 826,
        pages: 42,
        next: null,
        prev: null,
      },
      results: [CHARACTER_1, CHARACTER_2],
    });
  }),
];

const server = setupServer(...handlers);

describe('Characters', () => {
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

  test('should show character name and nav to /character/1', async () => {
    render(<Characters />, {
      wrapper: AppProviders,
    });

    const name = await screen.findByText(CHARACTER_1.name);
    expect(name).toBeTruthy();

    const card1 = await screen.findByTestId(`card-${CHARACTER_1.id}`);
    fireEvent.press(card1);
    expect(router.push).toHaveBeenCalledWith(`/characters/${CHARACTER_1.id}`);
  });

  test('should filter character by name', async () => {
    render(<Characters />, {
      wrapper: AppProviders,
    });

    const name1 = await screen.findByText(CHARACTER_1.name);
    expect(name1).toBeTruthy();

    console.log('foo');

    const textInputName = await screen.findByTestId('text-input-name');
    fireEvent.changeText(textInputName, 'Alien');

    const name3 = await screen.findByText(CHARACTER_3.name);
    expect(name3).toBeTruthy();
  });

  test('should filter character by specie', async () => {
    render(<Characters />, {
      wrapper: AppProviders,
    });
    const species1 = await screen.findAllByText(`species: ${CHARACTER_1.species}`);
    expect(species1).toBeTruthy();

    const textInputSpecies = await screen.findByTestId('text-input-species');
    fireEvent.changeText(textInputSpecies, 'Human');

    const species3 = await screen.findAllByText(`species: ${CHARACTER_1.species}`);
    expect(species3).toBeTruthy();
  });

  test('should filter character by type', async () => {
    render(<Characters />, {
      wrapper: AppProviders,
    });
    const textInputType = await screen.findByTestId('text-input-type');
    fireEvent.changeText(textInputType, 'Parasite');

    const type2 = await screen.findAllByText(`type: ${CHARACTER_2.type}`);
    expect(type2).toBeTruthy();
  });

  test('should filter character by status', async () => {
    render(<Characters />, {
      wrapper: AppProviders,
    });
    const textInputStatus = await screen.findByTestId('text-input-status');
    fireEvent.changeText(textInputStatus, 'Dead');

    const status1 = await screen.findAllByText(`status: ${CHARACTER_1.status}`);
    expect(status1).toBeTruthy();
  });

  test('should filter character by gender', async () => {
    render(<Characters />, {
      wrapper: AppProviders,
    });

    const textInputGender = await screen.findByTestId('text-input-gender');
    fireEvent.changeText(textInputGender, 'Female');
  });
});
