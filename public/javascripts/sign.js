function sign() {
    var username = document.getElementsByName('useName').item(0).value;
    var pwd = document.getElementsByName('passWord').item(0).value;
    var rpwd = document.getElementsByName('repassWord').item(0).value;
    var mail = document.getElementsByName("amil").item(0).value;

    if(!/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(mail)){
        alert("邮箱格式不正确!");
        return false;
    }else {
        if (pwd.length < 6 || pwd.length > 12) {
            alert('请输入6-12位的密码');
            document.getElementsByName('passWord').item(0).value = '';
            document.getElementsByName('repassWord').item(0).value = '';
            return false;
        } else if (pwd !== rpwd) {
            alert('两次密码输入不一致');
            document.getElementsByName('passWord').item(0).value = '';
            document.getElementsByName('repassWord').item(0).value = '';
            return false;

        } else {
            return true;
        }
    }







}