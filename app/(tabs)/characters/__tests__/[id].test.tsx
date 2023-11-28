// import { AppProviders } from 'context/index';
// import { renderRouter, screen } from 'expo-router/testing-library';
// import { HttpResponse, http } from 'msw';
// import { CHARACTER_1 } from 'data/mock';
// import { CharacterData } from 'data/operations/characters';
// import Characters from '../';
// import CharacterDetail from '../[id]';

// http.get('/character', () => {
//   return HttpResponse.json<CharacterData>(CHARACTER_1);
// });

// http.get('/character', () => {
//   return new HttpResponse(null, {
//     status: 404,
//     statusText: 'Out Of Apples',
//   });
// });

// describe('CharacterDetail', () => {
//   beforeEach(() => {
//     jest.clearAllMocks();
//   });

//   test('should show character name on success response', async () => {
//     renderRouter(
//       {
//         index: Characters,
//         '[id]': CharacterDetail,
//       },
//       {
//         initialUrl: '/characters',
//         wrapper: AppProviders,
//       },
//     );

//     const name = await screen.findByText(CHARACTER_1.name);
//     expect(name).toBeTruthy();
//   });

//   test('should show error message on error', async () => {
//     const errorMessage = 'Error message';
//     renderRouter(
//       {
//         index: Characters,
//         '[id]': CharacterDetail,
//       },
//       {
//         wrapper: AppProviders,
//       },
//     );

//     const error = await screen.findByText(errorMessage);
//     expect(name).toBeTruthy();
//   });
// });
