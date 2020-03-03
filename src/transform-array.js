module.exports = function transform(arr) {
   
    if(!Array.isArray(arr)) {
        throw new TypeError("Not array");
    }

    let transformed = [];

    for(let i = 0; i < arr.length; ) {

        switch(arr[i]) {

            case '--discard-next':
                i += 2; 
                break;

            case '--discard-prev':
                if(i != 0) {
                    transformed.pop(); 
                }
                i++;
                break;

            case '--double-next':
                if(i != arr.length - 1) {
                    transformed.push(arr[i + 1]);
                } 
                i++;
                break;
                
            case '--double-prev':
                if(i != 0) {
                    transformed.push(arr[i - 1]);  
                }
                i++;
                break;

            default: 
                transformed.push(arr[i]);
                i++;    
        }   
    } 

    return transformed;
};
