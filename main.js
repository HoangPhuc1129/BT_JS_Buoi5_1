// Bài 1

//Mô hình 3 khối

//Đầu vào:
//- Người dùng nhập điểm 3 môn,điểm chuẩn của trường,chọn đối tượng hoặc vùng được cộng điểm ưu tiên (nếu có)

//Xử lí:
function dom1(id) {
  return document.getElementById(id).value;
}
document.getElementById("ketQua").onclick = function () {
  let diemMon1 = dom1("mon1");
  let diemMon2 = dom1("mon2");
  let diemMon3 = dom1("mon3");
  let tagDiemChuan = +dom1("diemChuan");
  let tagDoiTuong = +dom1("doiTuong");
  let tagKhuVuc = +dom1("khuVuc");
  // console.log(`?`, tagDoiTuong, typeof tagDoiTuong);
  if (!diemMon1 || !diemMon2 || !diemMon3 || !tagDiemChuan) {
    alert(`Vui lòng nhập điểm`);
    return;
  }
  diemMon1 = +diemMon1;
  diemMon2 = +diemMon2;
  diemMon3 = +diemMon3;
  if (tagDoiTuong === 4 || tagKhuVuc === 4) {
    alert(`Vui lòng chọn đối tượng và khu vực`);
    return;
  }
  let tagKetQua = diemMon1 + diemMon2 + diemMon3 + tagDoiTuong + tagKhuVuc;

  document.getElementById("footer").innerHTML = checkKetQua(
    tagKetQua,
    tagDiemChuan,
    diemMon1,
    diemMon2,
    diemMon3
  );
};
function checkKetQua(tagKetQua, tagDiemChuan, diemMon1, diemMon2, diemMon3) {
  if (diemMon1 === 0 || diemMon2 === 0 || diemMon3 === 0) {
    // document.getElementById("footer").innerHTML =
    //  " Bạn đã rớt.Do có điểm bằng 0" ;
    return " Bạn đã rớt.Do có điểm bằng 0";
  }
  // checkPointValid(diemMon1);
  if (
    checkPointValid(diemMon1) ||
    checkPointValid(diemMon2 || checkPointValid(diemMon3))
  ) {
    alert(" Điểm không hợp lệ");
    return;
  }
  switch (true) {
    case tagKetQua < tagDiemChuan: {
      // document.getElementById("footer").innerHTML = "Bạn Đã Rớt";
      // break;
      return " Bạn Đã Rớt. Tổng Điểm Là : " + tagKetQua;
    }
    case tagKetQua >= tagDiemChuan: {
      // document.getElementById("footer").innerHTML = "Bạn Đã Đậu";
      // break;
      return "Bạn Đã Đậu. Tổng Điểm Là : " + tagKetQua;
    }
  }
}
//Check điểm người dùng nhập có hợp lệ hay không
function checkPointValid(number) {
  return number < 0 || number > 10;
}

//Đầu ra:
//-Xuất ouput cho biết người dùng đậu hay rớt với tổng điểm là bao nhiêu

// Bài 2

//Mô hình 3 khối

//Đầu vào:
//-Cho người dùng nhập tên và nhập số kw

//Xử lí:
function dom2(id2) {
  return document.getElementById(id2).value;
}
function tinhToan() {
  let tagTen = dom2("ten");
  let tagDien = +dom2("dien");
  // console.log(tagDien);

  let tagTienDien = 0;
  document.getElementById(`ketQua2`).innerHTML = tinhTienDien(
    tagTienDien,
    tagDien,
    tagTen
  );
}
function tinhTienDien(tagTienDien, tagDien, tagTen) {
  if (tagDien <= 50) {
    tagTienDien = tagDien * 500;
  } else if (tagDien <= 100) {
    tagTienDien = 50 * 500 + (tagDien - 50) * 650;
  } else if (tagDien <= 150) {
    tagTienDien = 50 * 500 + 50 * 650 + (tagDien - 100) * 850;
  } else if (tagDien <= 200) {
    tagTienDien = 50 * 500 + 50 * 650 + 50 * 850 + (tagDien - 150) * 1100;
  } else {
    50 * 500 + 50 * 650 + 50 * 850 + 50 * 1100 + (tagDien - 200) * 1300;
  }

  return "Tên : " + tagTen + "; Tiền điện : " + tagTienDien + " Đồng";
}
//Đầu ra:
//-Xuất ra output tên và số tiền điện
