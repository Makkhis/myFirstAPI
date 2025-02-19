class UserService {
  constructor({ userModel }) {
      this.userModel = userModel;
  }

  async createUser(name, email) {
      return await this.userModel.create({ name, email });
  }

  async getUsers() {
      return await this.userModel.findAll();
  }
}

module.exports = UserService;

  