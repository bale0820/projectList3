import { API_BASE_URL } from "shared/constants/apiBaseUrl";
import { setNoticeList } from "./noticeSlice";
// shared
import { api } from "shared/lib/axios";

export const setNoticeListAPI = () => async(dispatch) => {
    const result = await api.get(`${API_BASE_URL}/notice/all`);
    dispatch(setNoticeList({"result" : result.data}));
}