function baitap1(ketQua) {
  // B1: Xác định đầu vào: input số nguyên
  var n = document.getElementById("txtNum").value;
  // B2: Kiểm tra n có phải là số nguyên tố không
  if (n < 2) {
    alert("n không phải là số nguyên tố");
    return;
  }
  for(var j = 2; j < n ; j++){
      if(soNT(j) === true){
        ketQua += j + " ";
      }
  }
  var notiDiv = document.getElementById("notibt");
  notiDiv.style.display = "block";
  notiDiv.innerHTML = ketQua;
}
function soNT(n){
  var ketQua;
  if(n<2){
    return false  
  }
  if(n === 2){
    return true
  }
  for (var i = 2; i < n; i++) {
    if (n % i === 0) {
      ketQua = false;
      break;
    } else {
      ketQua = true;
    }
    return ketQua
  }
}
