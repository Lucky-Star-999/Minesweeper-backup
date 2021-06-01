

function redirectSettings() {
    alert("" +
    "Hiện tại project lấy board từ API (tui tạo ra). Nhưng vì khi đặt API lên server thật, nó ngăn các request lạ. " + 
    "\n\nDo đó cần bấm vào link phía dưới để open request tạm thời. Cứ cách nửa ngày vô link đó bấm 1 lần.");
    window.location.href = "/settings";
}

//console.log(TestAppCenter.x);
