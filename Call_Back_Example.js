reports.post("/test_function_app", (req, res) => {
    var myVal = req.body.myVal;

    helperUtils.test_function_app(myVal, function(cb_myVal){
        if(cb_myVal.error_status){
            res.send("ERROR");
        }else{
            res.send("DONE");
        }        
    })
})



"test_function_app": function(myVal, cb_myVal){
    if(myVal == 1){
        cb_myVal({
            "error_status": true,
            "message": "ERROR",
        })
    }else{
        cb_myVal({
            "error_status": false,
            "message": "SUCCESS",
        })
    }
},





