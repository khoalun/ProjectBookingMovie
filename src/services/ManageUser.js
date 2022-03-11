import { baseService } from "./baseService";
export default class ManageUserService extends baseService {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  getUser = (inforLogin) => {   // get Account and password infor
    return this.post(`/api/QuanLyNguoiDung/DangNhap` , inforLogin);
  };

  inforUserBooking = () => {
     return this.post('/api/QuanLyNguoiDung/ThongTinTaiKhoan')
  }
}

export const manageUserService = new ManageUserService();
