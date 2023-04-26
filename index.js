// Chương trình tính tiền lương của nhân viên
const tinhTienLuong = (days) => {
  const luongNgay = 100000;
  return days * luongNgay;
};

tinhTienLuong(30);

// Tính giá trị trung bình

const tbCong = (a, b, c, d, e) => {
  return (a + b + c + d + e) / 5;
};
tbCong(1, 2, 3, 4, 5);

const changeCurrency = (usd) => {
  const usdCurrency = 23500;
  return usd * usdCurrency;
};
changeCurrency(50);

const tinhChuViDienTich = (dai, rong) => {
  const chuVi = (dai + rong) * 2;
  const dienTich = dai * rong;
  return chuVi, dienTich;
};

tinhChuViDienTich(4, 3);

const tinhTongHaiKySo = (num) => {
  const hangDonVi = num % 10;
  const hangChuc = Math.floor(num / 10);
  const tong = hangDonVi + hangChuc;
  return tong;
};

tinhTongHaiKySo(15);
