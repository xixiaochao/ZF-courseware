$(function () {
    render(); // 1.渲染数据
    discolor(); // 1.5 始终保持各行变色
    add(); // 2.添加内容
    sort();// 3.排序
    select();// 4.选中
    upDown();// 5.上移下移
    del();// 6.删除
    delAll();// 7.批量删除
})

// 1.渲染数据√
function render() {
    $.ajax({
        url: "data/table.json",
        type: "get",
        dataType: "json",
        contentType: "application/json;charset=UTF-8",
        async: false,
        success: function (res) {
            var obj = res.data;
            var html = "";
            $.each(obj, function (index, ele) {
                html += `<tr>
                <td><input type="checkbox" name='ids'></td>
                <td>${ele.id}</td>
                <td>${ele.name}</td>
                <td>${ele.price}</td>
                <td>
                    <input type="button" value="删除">
                    <input type="button" value="上移">
                    <input type="button" value="下移">
                </td>
            </tr>`
            })
            $("tbody").append(html);
            console.log(obj);
        }
    })
}

// 1.5隔行变色√
function discolor() {
    $("tbody>tr:odd").addClass("odd");
    $("tbody>tr:even").addClass("even");
    $("tbody>tr").mouseover(function () {
        $(this).addClass("selected");
    }).mouseout(function () {
        $(this).removeClass("selected");
    });
}

// 2.添加内容√
function add() {
    $("#add").click(function () {
        var num = $("tbody").find('tr').length;
        let name = $("#name").val();
        let price = $("#age").val();
        if (name == '') {
            alert("请填写姓名");
            return
        } else if (price == '') {
            alert("请填写年龄");
            return
        }
        var txt = `<tr>
        <td><input type="checkbox"></td>
        <td>${num + 1}</td>
        <td>${name}</td>
        <td>${price}</td>
        <td>
            <input type="button" value="删除">
            <input type="button" value="上移">
            <input type="button" value="下移">
        </td>
    </tr>`;
        $("tbody").append(txt);
        discolor();
    })
}

// 3.排序
function sort() {
    //根据编号或者年龄进行排序
    $("#stBtn").click(function () {
        var s1 = $("#s1  option:selected").val();
        var s2 = $("#s2  option:selected").val();
        console.log(s1);
        console.log(s2);
        console.log($("tbody tr:eq(0) td:eq(1)").text());
        var t = $("tbody tr:eq(0) td:eq(1)").text();
        if(s1 == 'price'){
            if(s1 == 2){

            }
        }
        if(s2 == 'id'){
            if(s2 == 2){

            }
        }

        var num = $("tbody>tr").html();
        console.log(num);

        $("#tbody>tr").each(function (index, item) {
            console.log(index);
        })
    })
}

// 4.选中
function select() {
    // 全选 or 全不选
    $("#checkAll").click(function () {
        // this指代的你当前选择的这个元素的JS对象
        $(":checkbox[name='ids']").prop("checked", this.checked);
    })
}

// 5.上移下移
function upDown() {
    $("input[value='上移']").click(function () {
        var prevTr = $(this).parent().parent().prevAll();
        console.log(prevTr);
        //判断是否是第一行
        if (prevTr.length > 0) {
            var preTemp = prevTr.first();
            var thisHr = $(this).parent().parent();
            //替换两行内容
            thisHr.replaceWith("<tr>" + preTemp.html() + "</tr>");
            preTemp.replaceWith("<tr>" + thisHr.html() + "</tr>");
        }
        discolor();
    })

    $("input[value='下移']").click(function () {
        var nextTr = $(this).parent().parent().next();
        //判断是否是最后一行
        if (nextTr.length > 0) {
            var thisHr = $(this).parent().parent();
            //替换两行内容
            thisHr.replaceWith("<tr>" + nextTr.html() + "</tr>");
            nextTr.replaceWith("<tr>" + thisHr.html() + "</tr>");
        }
        discolor();
    })
}

// 6.删除
function del() {
    let delet = $("input[value='删除']");
    for (let i = 0; i < delet.length; i++) {
        //console.log(delet[i]);
        delet[i].onclick = function () {
            let td = $("tbody")[0];
            td.removeChild(this.parentNode.parentNode) 
        }
    }
}

// 7.批量删除√
function delAll() {
    $("#rm").click(function () {
        var check = $("input:checked[name='ids']");
        if (check.length == 0) {
            alert("请选择删除行");
            return;
        }
        var flag = confirm("确认删除!!");
        if (!flag) return
        for (var i = 0; i < check.length; i++) {
            check[i].parentNode.parentNode.remove();
        }
        discolor();
    })
}
