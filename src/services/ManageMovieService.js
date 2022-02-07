import { baseService } from "./baseService";
import GROUPID from "antd/lib/input/Group";
export default class ManageMovieService extends baseService {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  getBannerList = () => {
    return this.get(`/api/QuanLyPhim/LayDanhSachBanner`);
    };
    
    getMovieList = () => {
        return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`);
    }
}

export const manageMovieService = new ManageMovieService();
