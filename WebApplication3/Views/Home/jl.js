
// Lấy giá trị của một input : bỏ khoảng trắng 2 đầu
function getValue(id) {
    return document.getElementById(id).value.trim();
}
// Hiển thị lỗi
function showError(key, mess) {
    document.getElementById(key + '_error').innerHTML = mess;
}
// kiểm tra lỗi
function validate() {
    var flag = true;
    // 1 username
    var username = getValue('username');
    if (username == '' || username.length < 5 || !/^[a-zA-Z0-9]+$/.test(username)) {
        flag = false;
        showError('username', 'Vui lòng kiểm tra lại Username');
    }
    // 2. password
    var password = getValue('password');
    var repassword = getValue('repassword');
    if (password == '' || password.length < 8) {
        flag = false;
        showError('password', 'Vui lòng kiểm tra lại Password');
    }
    // 3. repassword
    var repassword = getValue('repassword');
    if (password != repassword) {
        flag = false;
        showError('repassword', 'Vui lòng kiểm tra nhập lại Password');
    }
    return flag;
}