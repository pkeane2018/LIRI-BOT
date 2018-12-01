if (typeof terms !== 'undefined') {

        for (i = 0; i < terms.length; i++) {
    
            appname = terms[0];
            process.argv[3] = terms[1];
            keyword = terms[1];
        }  
    
        console.log(appname);
        console.log(keyword);
    
    }