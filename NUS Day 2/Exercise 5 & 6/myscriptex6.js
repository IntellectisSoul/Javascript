var exp = [4000,5000,6500,5000,2800,3500];

exp.forEach((element,index) => {
    if (element>=4000){
        exp[index] *=1.02;
    }  
});

