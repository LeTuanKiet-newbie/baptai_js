// Chương trình tính tiền lương của nhân viên
document.getElementById("tinhLuong").addEventListener("click", () => {
  const luongNgay = Number(document.getElementById("luongNgay").value);
  const soNgay = Number(document.getElementById("soNgay").value);
  document.getElementById("luongNhanVien").innerHTML = (
    luongNgay * soNgay
  ).toLocaleString("vn", {
    style: "currency",
    currency: "VND",
  });
});

// Tính giá trị trung bình

document.getElementById("tinhTrungBinhCong").addEventListener("click", () => {
  const arr = [];

  for (let i = 0; i < document.getElementsByClassName("soHang").length; i++) {
    arr.push(Number(document.getElementsByClassName("soHang")[i].value));
  }
  document.getElementById("trungBinhCong").innerHTML =
    arr.reduce((a, b) => a + b) / arr.length;
});

// Quy đổi tiền tệ
document.getElementById("quyDoi").addEventListener("click", () => {
  const usd = document.getElementById("soTienUsd").value;
  const vndExchange = 23500;
  const vnCurrency = usd * vndExchange;
  document.getElementById("vnd").innerHTML = vnCurrency.toLocaleString(
    "vn-VN",
    { style: "currency", currency: "vnd" }
  );
});

// tính diện tích chu vi hình chữ nhật
document.getElementById("tinh").addEventListener("click", () => {
  const chieuDai = Number(document.getElementById("chieuDai").value);
  const chieuRong = Number(document.getElementById("chieuRong").value);
  console.log(chieuDai, chieuRong);
  document.getElementById("dienTich").innerHTML = chieuDai * chieuRong;
  document.getElementById("chuVi").innerHTML = (chieuDai + chieuRong) * 2;
});

// Tính tổng 2 ký số

document.getElementById("tongHaiKySo").addEventListener("click", () => {
  const kySo = Number(document.getElementById("soDuocChia").value);
  document.getElementById("ketQuaKySo").innerHTML =
    (kySo % 10) + Math.floor(kySo / 10);
});
