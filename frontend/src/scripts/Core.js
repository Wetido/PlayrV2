const isEmpty = function(value){
    
    if(value === null || value === 'undefined' || typeof value === 'undefined' || value.length === 0){
        return false
    }else{ return true }
}


export{
    isEmpty,
};