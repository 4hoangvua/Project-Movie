import { combineReducers } from "redux";
import banner from "./banner";
import listMovie from "./listMovie";
import navbar from "./navbar";
import listLogo from "./showTime";
import tickets from "./ticket";
import userLogin from "./singin";
import movieDetail from "./movieDetail";
import listFilm from "./listFilm";
const rootReducer = combineReducers({
  nav: navbar,
  ban: banner,
  movie: listMovie,
  show: listLogo,
  ticket: tickets,
  movieD: movieDetail,
  listFilm: listFilm,
  user: userLogin,
});
export default rootReducer;
