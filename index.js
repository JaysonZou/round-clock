var clock = document.querySelector('#clock')

function setPanel() {
    //12个数字位置
    var radius = 160 //内圆半径
    var dot_num = 360 / document.querySelectorAll('.dot').length //每个数字占的度数
    var ahd = dot_num * Math.PI / 180 //每个数字占的弧度数
    document.querySelectorAll('.dot').forEach(function (val, index) {
        var Top = 180 + Math.cos((ahd * index)) * radius
        var Left = 180 + Math.sin((ahd * index)) * radius
        val.style.top = Top + 'px'
        val.style.left = Left + 'px'
    })
    //刻度设置
    for (var i = 0; i < 60; i++) {
        clock.innerHTML += "<div class='clock-scale'> " +
            "<div class='scale-hidden'></div>" +
            "<div class='scale-show'></div>" +
            "</div>";
    }
    var scale = document.querySelectorAll(".clock-scale");
    for (var i = 0; i < scale.length; i++) {
        scale[i].style.transform = "rotate(" + (i * 6 - 90) + "deg)";
    }
}
setPanel()

function setTime() {
    var nowTime = new Date()
    var year = nowTime.getFullYear()
    month = nowTime.getMonth() + 1  //注意这里需要加1
    day = nowTime.getDay()
    hours = nowTime.getHours()
    minutes = nowTime.getMinutes()
    seconds = nowTime.getSeconds()
    date = nowTime.getDate()
    var weekday = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    // 获取日期id
    date_info.innerHTML = year + "年" + month + "月" + date + "日   " + weekday[day];
    hour_time.innerHTML = hours >= 10 ? hours : "0" + hours;
    minute_time.innerHTML = minutes >= 10 ? minutes : "0" + minutes;
    second_time.innerHTML = seconds >= 10 ? seconds : "0" + seconds;
    //时分秒动态设置
    // var hour_rotate = (hours >= 12 ? hours - 12 : hours)*30 - 90
    var hour_rotate = (hours * 30 - 90) + (Math.floor(minutes / 12) * 6);
    hour_line.style.transform = 'rotate(' + hour_rotate + 'deg)';
    minute_line.style.transform = 'rotate(' + (minutes * 6 - 90) + 'deg)';
    second_line.style.transform = 'rotate(' + (seconds * 6 - 90) + 'deg)';
}
setInterval(setTime, 1000)
