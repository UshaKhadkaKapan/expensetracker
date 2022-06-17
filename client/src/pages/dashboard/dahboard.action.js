import { getTransactions } from "../../helpers/axiosHelper";
import {
  setIsLoading,
  setResponse,
  setTransaction,
  setTransactions,
} from "./dashboard.slice";

export const fetchTransactionsAction = () => async (dispatch) => {
  dispatch(setIsLoading());

  const data = await getTransactions();
  if (data.status === "success") {
    dispatch(setTransactions(data.result));
  }
};
