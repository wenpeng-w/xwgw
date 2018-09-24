/**
 * 设置弹层的位置（垂直居中）
 * @param id 弹层的 ID
 */
function siteLayerPos (id) {
    var $id = $(id);
    var winH = $(window).height();
    var headerH = $('.header').height();
    var layerH = $id.find('.xw-layer').height();
    $id.find('.xw-layer').css('top', (winH - layerH + headerH) / 2);
}

/**
 * 提交表单（加盟留言表单）
 */
function submitMessage () {
    var msgArr = [];
    var $inputEles = $('#formMsg').find('.inputMsg');
    for (var i = 0, len = $inputEles.length; i < len; i++) {
        var $inputEle = $inputEles.eq(i);
        var inputName = $inputEle.attr('name');
        var inputVal = $inputEle.val().replace(/(^\s*)|(\s*$)/g, "");
        msgArr.push({
            name: inputName,
            msg: inputVal
        });
        if (inputVal === '') {
            $inputEle.next().css('visibility', 'visible');
        } else {
            $inputEle.next().css('visibility', 'hidden');
        }
    };
    for (var j = 0, len = msgArr.length; j < len; j++) {
        if (msgArr[j].msg === '') {
            return
        }
    };
    // 校验通过，提交表单数据接口
    console.log(msgArr);
    $('#msgLayer').hide();
    $('#msgSuccessLayer').show();
    siteLayerPos('#msgSuccessLayer');
}

/**
 * 失去焦点时校验 当前输入框的值
 * @param _this
 */
function blurVerify (_this) {
    var $this = $(_this);
    var msg = $this.val().replace(/(^\s*)|(\s*$)/g, "");
    if (!msg || msg === '') {
        $this.next().css('visibility', 'visible');
    } else {
        $this.next().css('visibility', 'hidden');
    }
}

// 显示加盟留言弹层
function showMsgLayer () {
    $('#msgLayer').show();
    siteLayerPos('#msgLayer');
}
// 隐藏加盟留言弹层
function closeMessage () {
    $('#msgLayer').hide();
}
// 隐藏状态弹层
function msgSuccessLayer () {
    $('#msgSuccessLayer').hide();
}

/**
 * 业态资讯导航切换
 */
$('#sideBar li').on('click', function () {
    var $this = $(this);
    $this.addClass('current').siblings().removeClass('current');
})
