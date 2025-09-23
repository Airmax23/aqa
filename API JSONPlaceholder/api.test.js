const axios = require('axios');

const baseURL = 'https://jsonplaceholder.typicode.com';

describe('API JSONPlaceholder tests', () => {
  
  describe('GET requests', () => {
    test('should fetch post with id 1', async () => {
      const response = await axios.get(`${baseURL}/posts/1`);
      expect(response.status).toBe(200);
      expect(response.data.id).toBe(1);
    });

    test('should fetch user with id 1', async () => {
      const response = await axios.get(`${baseURL}/users/1`);
      expect(response.status).toBe(200);
      expect(response.data.id).toBe(1);
    });

    test('should fetch comments for post with id 1', async () => {
      const response = await axios.get(`${baseURL}/comments`, { params: { postId: 1 } });
      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBeTruthy();
    });
  });

 
  describe('POST requests', () => {
    test('should create a new post', async () => {
      const newPost = { title: 'foo', body: 'bar', userId: 1 };
      const response = await axios.post(`${baseURL}/posts`, newPost);
      expect(response.status).toBe(201);
      expect(response.data).toHaveProperty('id'); 
    });

    test('should create a new comment', async () => {
      const newComment = { postId: 1, name: 'test', email: 'test@example.com', body: 'Test comment' };
      const response = await axios.post(`${baseURL}/comments`, newComment);
      expect(response.status).toBe(201);
      expect(response.data.postId).toBe(newComment.postId);
    });
  });
});