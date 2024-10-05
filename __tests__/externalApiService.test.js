// __tests__/externalApiService.test.js
const axios = require('axios');
const { fetchData } = require('../src/externalApiService');

jest.mock('axios');

describe('Simulation Pattern', () => {
  test('fetchData should return data from API', async () => {
    const mockData = { data: { id: 1, name: 'Test' } };
    axios.get.mockResolvedValue(mockData);

    const data = await fetchData('https://api.example.com/data');
    expect(data).toEqual(mockData.data);
    expect(axios.get).toHaveBeenCalledWith('https://api.example.com/data');
  });

  test('fetchData should handle errors', async () => {
    axios.get.mockRejectedValue(new Error('Network Error'));

    await expect(fetchData('https://api.example.com/data')).rejects.toThrow('Network Error');
  });
});
