import Cookies from "js-cookie";

export const BASE_URL =
  process.env.REACT_APP_SERVER_URL || "http://localhost:5000/graphql";

class Auth {
  getCipher() {
    return Cookies.get("gmes-cipher") || null;
  }

  setCipher(token) {
    Cookies.set("gmes-cipher", token);
  }

  clearCipher() {
    Cookies.remove("gmes-cipher");
  }
}

export default new Auth();
