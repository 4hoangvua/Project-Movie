import axiosClient from "./axiosClient";

const movieAPI = {
  getMovieShowing: (moviePage) => {
    return axiosClient.get("QuanLyPhim/LayDanhSachPhimPhanTrang", {
      params: {
        soTrang: moviePage,
        soPhanTuTrenTrang: 12,
      },
    });
  },
  getMovieDetail: (movieID) => {
    return axiosClient.get("QuanLyPhim/LayThongTinPhim", {
      params: {
        maPhim: movieID,
      },
    });
  },
  getMovieBanner: () => {
    return axiosClient.get("QuanLyPhim/LayDanhSachBanner");
  },

  getShowTimeTheaterInfo: (theater) => {
    return axiosClient.get("QuanLyRap/LayThongTinLichChieuHeThongRap", {
      params: {
        maHeThongRap: theater,
      },
    });
  },
  getThongTinLichChieuPhim: (maPhim) => {
    return axiosClient.get("QuanLyRap/LayThongTinLichChieuPhim", {
      params: {
        maPhim: maPhim,
      },
    });
  },
  getDanhSachPhim: (id) => {
    return axiosClient.get("QuanLyPhim/LayDanhSachPhim", {
      params: {
        maNhom: id,
      },
    });
  },
  getInfoTicket: (timeTheater) => {
    return axiosClient.get("QuanLyDatVe/LayDanhSachPhongVe", {
      params: {
        maLichChieu: timeTheater,
      },
    });
  },
  accountUser: (info) => {
    return axiosClient.post("QuanLyNguoiDung/DangNhap", info);
  },
  userRegister: (info) => {
    return axiosClient.post("QuanLyNguoiDung/DangKy", {
      ...info,
    });
  },
};
export default movieAPI;
