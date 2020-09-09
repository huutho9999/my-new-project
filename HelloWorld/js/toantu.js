let inputvatly = prompt("Nhập điểm Vật Lý");
let inputhoahoc = prompt("Nhập điểm Hoá Học");
let inputsinhhoc = prompt("Nhập điểm Sinh học");

let vatly = parseInt(inputvatly);
let hoahoc = parseInt(inputhoahoc);
let sinhhoc = parseInt(inputsinhhoc);
let trungbinh= (vatly + hoahoc + sinhhoc)/3;
let tong=vatly + hoahoc + sinhhoc;
document.write("Tổng điểm là " + tong +'<br>' ) ;

document.write("Điểm trung bình 3 môn là " + trungbinh );