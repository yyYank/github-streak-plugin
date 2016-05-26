$(document).ready(function(){
    // 連続で草生えてるか生えてないか
    var isKusa = function (contribution, current) {
        if(current === 0) {
            return;
        }
        var prev = contribution[current - 1];
        var next = contribution[current];
        return prev["kusa"] === "green" && next["kusa"] === "green";
    }
    // Streak用のarray
    var streak = new Array();
    // コントリビューショングラフ
    var contribution = new Array();

    // rectエレメントを探索する
    $("rect").each(function(){
        var graph = new Object();
        var date = $(this).attr("data-date");
        var color = $(this).attr("fill");
        var kusa = color !== "#eeeeee" ? "green" : "";
        graph["date"] = date;
        graph["kusa"] = kusa;
        contribution.push(graph);
    });

    // 数える
    var count = 0;
    for(var i = 0; i < contribution.length; i++) {
        if(isKusa(contribution, i)) {
            count++;
        } else {
            streak.push(count);
            count = 0;
        }
    }
    streak.push(count);

    // 草生やしてない奴は表示しないよ
    if(Math.max.apply(null, streak) != 0){
        alert("[Current Streak]" + (count + 1) + "\n[Longest Streak]"+ (Math.max.apply(null, streak) + 1));
    }
});
