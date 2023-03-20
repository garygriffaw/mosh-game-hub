import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "010295950a2a42d7a0c443b347b118b5",
  },
});
