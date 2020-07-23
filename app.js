var className = "tool";


function showTooltip(obj, id, html, width, heigth) {
    if (document.getElementById(id) == null) {
        var tool;
        tool = document.createElement("div");
        tool.className = className;
        tool.id = id;
        tool.innerHTML = html;
        obj.appendChild(tool);

        tool.style.width = width ? width + "px" : "auto";
        tool.style.heigth = heigth ? heigth + "px" : "auto";
        tool.style.position = "absolute";


        obj.onmouseout = function () {
            document.getElementById(id).style.display = "none";
        };
    } else {
        document.getElementById(id).style.display = "block";
    }
}

var wb = document.getElementById("weibo");
var wx = document.getElementById("weixin");
var xt = document.getElementById("xiaotian");

wb.onmousemove = function () {
    showTooltip(this, "wb", "小天要上热搜", 150, 150);
};
wx.onmousemove = function () {
    showTooltip(this, "wx", "小天上热搜了吗", 150, 150);
};
xt.onmousemove = function () {
    showTooltip(this, "xt", "dududu", 150, 150);
};