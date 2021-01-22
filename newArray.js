function arrLong(arr) {
    let maxStr = "";
    
    for(let i = 0; i < arr.length; i++){
    if(arr[i] > maxStr){
    maxStr = arr[i];
    }
    }
    return maxStr;
    }
    
    console.log(arrLong(['zafor','zamilur','kamaluddinahmed', 'jamali', 'khalilur','rahman','zzzzz']));

    //'kamaluddinahmed', 'jamali', 'khalilur','rahman','zafor','zamilur'