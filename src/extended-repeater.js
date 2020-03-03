module.exports = function repeater(str, options) {
    
    let myRepeatTimes = options.repeatTimes === undefined ? 0 : options.repeatTimes;
    let mySeparator = options.separator === undefined ? "+" : options.separator;
    let myAddition = options.addition === undefined ? "" : String(options.addition);
    let myAdditionRepeatTimes = options.additionRepeatTimes === undefined ? 0 : options.additionRepeatTimes;
    let myAdditionSeparator = options.additionSeparator === undefined ? "|" : options.additionSeparator;
    let repeatedAddition = "";
    
    if(myAdditionRepeatTimes > 1) {
       repeatedAddition = (myAddition + myAdditionSeparator).repeat(myAdditionRepeatTimes - 1) + myAddition; 
    } else repeatedAddition = myAddition;
    

    if(myRepeatTimes > 1) {
       return (String(str) + repeatedAddition + mySeparator).repeat(myRepeatTimes - 1) + String(str) + repeatedAddition; 
    } else 
        return String(str) + repeatedAddition;
     
};
  