const stateDefault = {
  arrFilm: [
    {
      maPhim: 9427,
      tenPhim: "Trạng Tí Phiêu Lưu Ký 121",
      biDanh: "trang-ti-phieu-luu-ky-121",
      trailer: "https://youtu.be/sx1ROHCmY-4",
      hinhAnh:
        "http://movieapi.cyberlearn.vn/hinhanh/trang-ti-phieu-luu-ky-121_gp01.png",
      moTa: "Trạng tí phiêu lưu ký là một bộ phim do người Việt sản xuất",
      maNhom: "GP01",
      ngayKhoiChieu: "2022-01-25T13:57:40.603",
      danhGia: 10,
      hot: true,
      dangChieu: false,
      sapChieu: true,
    },
  ],
};

export const MovieListReducer = (state = stateDefault, action) => {
  switch (action.type) {
    default:
      return {
        ...state,
      };
  }
};
