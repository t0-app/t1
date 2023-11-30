import { render, screen } from '@testing-library/react-native';
import { AppProviders } from 'context/index';
import Launch from '../';

describe('Launch', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should show default text', async () => {
    render(<Launch />, {
      wrapper: AppProviders,
    });

    const name = screen.getByText('Launch');
    expect(name).toBeTruthy();
  });
});
