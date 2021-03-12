var app = ( function (){

    function postMessage(){
        note = $("#note").val();
        appClient.getMessages(note, _setData);
    }

    function _setData(data){
        mean = data;
    }

    return{
        postMessage: postMessage
    }
})();