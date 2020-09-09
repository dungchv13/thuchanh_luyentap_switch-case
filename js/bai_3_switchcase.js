let n=parseInt(prompt("hay nhap so n:"));
switch (n>0){
    case true:
        alert("1");
        break;
    case false:
        switch (n<0){
            case true:
                alert("-1");
                break;
            case false:
                alert("0");
                break;
        }

}