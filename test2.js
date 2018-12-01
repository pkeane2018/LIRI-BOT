var fs = require("fs");

var inputArray;
 
 fs.readFile("random.txt", "utf8", function(error, data){
 
        if (error) {
    
            console.log(error);
        } 
    
        inputArray = data;
        console.log(inputArray);

        dosomething();
    
    });

    function dosomething() {

        console.log(inputArray);
    };

    




   



   