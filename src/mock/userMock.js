import mock from '../utils/mock';

// mock.onPost('/api/home/login').reply(200, {
//   id: 1,
//   username: 'Brenin',
//   email: 'brenin@gmail.com',
// });

mock.onPost('/api/home/login').reply((config) => {
  const { email, password } = JSON.parse(config.data);

  if (email !== 'brenin@gmail.com' || password !== 'admin') {
    return [400, { message: 'Seu email ou senha estão incorretos' }];
  }

  const user = {
    id: 1,
    name: 'Breno henrique',
    username: 'breno',
    email: 'brenin@gmail.com',
  };

  return [200, { user }];
});
