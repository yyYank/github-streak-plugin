$(document).ready(function(){
    var isKusa = function (activity, current) {
        if(current === 0) {
            return;
        }
        var prev = activity[current - 1];
        var next = activity[current];
        return prev["kusa"] === "green" && next["kusa"] === "green";
    }
    var streak = new Array();
    var activity = new Array();
    $("rect").each(function(){
        var obj = new Object();
        var date = $(this).attr("data-date");
        var color = $(this).attr("fill");
        var kusa = color !== "#eeeeee" ? "green" : "";
        obj["date"] = date;
        obj["kusa"] = kusa;
        activity.push(obj);
    });
    var count = 0;
    for(var i = 0; i < activity.length; i++) {
        if(isKusa(activity, i)) {
            count++;
        } else {
            streak.push(count);
            count = 0;
        }
    }
    streak.push(count);
    if(Math.max.apply(null, streak) != 0){
        alert("[Current Streak]" + (count + 1) + "\n[Longest Streak]"+ (Math.max.apply(null, streak) + 1));
    }
});
