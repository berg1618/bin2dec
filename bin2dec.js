let i = 0;
function adviseNBin (){
    if (event.keyCode !== 49 && event.keyCode  !== 48){
        res.innerHTML = 'type a binary a number';
        i++;
        return true;
    }
    res.innerHTML = ' ';
}

function bintdec() {
    res.innerHTML = " ";
    const bin = document.getElementById("bin").value;
    if(i < 1){
        if(bin.length > 1){
            const decimal = parseInt(bin, 2);
            res.innerHTML = `result is equal to: ${decimal}`;
        } else {
         res.innerHTML = "type a valid number";
        }
    } else {
        res.innerHTML = "type a valid number";
    }
    i = 0;
}