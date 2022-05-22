function baitap1(KetQua) {
  // B1: Xác định đầu vào: input số nguyên
  var n = document.getElementById("txtNum").value;
  var number = soNT(n);
  // B2: Kiểm tra n có phải là số nguyên tố không
  if (n < 2) {
    alert("n không phải là số nguyên tố");
    return;
  }
  for(var j = 2; j < n ; j++){
      if(n % j !== 0){
        
      }
  }
//   var KetQua;
//   for (var i = 2; i < n; i++) {
//     if (n % i === 0) {
//       KetQua = false;
//       break;
//     }
//     if (KetQua === true) {
//       KetQua += KetQua;
//     }
//   }

  var notiDiv = document.getElementById("notibt");
  notiDiv.style.display = "block";
  divNoti.innerHTML = KetQua;
}
function soNT(n){
  var KetQua;
  for (var i = 2; i < n; i++) {
    if (n % i === 0) {
      KetQua = false;
      break;
    } else {
      KetQua = true;
    }
  }
  return KetQua
}
