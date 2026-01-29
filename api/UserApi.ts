
import axios from 'axios';

export class UserApi {
  async createUser() {
    const res = await axios.post('https://reqres.in/api/users', {
      name: 'QA',
      job: 'Engineer'
    });
    return res.data;
  }
}
