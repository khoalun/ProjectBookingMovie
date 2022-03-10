import { baseService } from "./baseService";
export default class ManageTicketService extends baseService {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  getDetailTicket = (id) => { // maLichChieu lay tu Url
    return this.get(
      `/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`
    );
  };


}

export const manageTicketService = new ManageTicketService();
