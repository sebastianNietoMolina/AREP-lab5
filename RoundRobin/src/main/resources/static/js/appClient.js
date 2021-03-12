var appClient = ( function (){

   function getMessages(data, callback){
        var list = JSON.stringify(data);
        var Promise = $.ajax({
            url: "/notify",
            type: 'POST',
            data: list,
            contentType: "application/json"
        });
        Promise.then(
            function (answer) {
                console.info("OK");
                callback(answer);
            }
        );
    }

    return{
        getMessages: getMessages
    }
})();