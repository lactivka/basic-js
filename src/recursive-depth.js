module.exports = class DepthCalculator {

    calculateDepth(arr) {

        let depth = 0;
 
        for (let i = 0; i < arr.length; i++) {

            if(Array.isArray(arr[i])) {

                let currentDepth = this.calculateDepth(arr[i]);
                depth = (depth <  currentDepth) ? (currentDepth) : depth; 
            } 
        }

        return ++depth;
    }
};