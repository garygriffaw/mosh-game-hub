import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "9e172998b5a940888bc62dee5fb2dd17",
  },
});
