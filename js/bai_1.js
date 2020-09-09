function xacnhan(){
    let browser=document.getElementById("browser_name").value;
    switch (browser){
        case 'edge':
            alert("you have got the Edge!");
            break;
        case 'chrome':
        case 'firefox':
        case 'safari':
        case 'opera':
            alert("okay we support there browsers too");
            break;
        default:
            alert("we hope that this page look ok!");
    }
}