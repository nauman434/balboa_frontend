import GenericService from "./GenericService";
import jwtDecode from "jwt-decode";
class UserService extends GenericService {
  constructor() {
    super();
  }

  login = ({ email, password }) =>
    new Promise((resolve, reject) => {
      this.post("/users/login", { email, password })
        .then((data) => {
          localStorage.setItem("balboaToken", data.token);
          resolve(data.token);
        })
        .catch((err) => {
          reject(err);
        });
    });

  logout = () => {
    localStorage.removeItem("balboaToken");
  };

  getProfile = () =>
    new Promise((resolve, reject) => {
      this.get("/users/profile")
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });

  isLoggedIn = () => {
    return localStorage.getItem("balboaToken") == "undefined" ||
      localStorage.getItem("balboaToken") == null
      ? false
      : true;
  };
}

let userService = new UserService();
export default userService;
