import axios from "axios";
import { postUser } from "../../helpers/axiosHelper";
import { setisLoading, setResponse } from "./regLogin.slice";

export const registerAction = (form) => async (dispatch) => {
  // set the loader on
  dispatch(setisLoading());
  // call axios

  const result = await postUser(form);
  console.log(result);
  setResponse(form);
};
