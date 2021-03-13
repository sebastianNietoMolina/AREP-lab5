var app = ( function (){


    function postMessage(){
        note = $("#note").val();
        appClient.getMessages(note, _setData);
    }

    function _setData(list){
        var table = $("#table1");
        var body = $("tbody");
        var newList = JSON.parse(list)
        body.remove();
        table.append("<tbody>");
        var newBody = $("tbody");
        newBody.append(newList.map(_print));
        table.append(newBody);
        table.append("</tbody>");
    }

    function _print(res){
        var temp = '<tr><td>' + res.note + '</td><td>' + res.date + '</td></tr>';
        return temp;
     }

    return{
        postMessage: postMessage
    }
})();