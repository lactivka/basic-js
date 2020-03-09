class VigenereCipheringMachine {

    constructor(bool) {
        
       this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
       this.reverse = bool === false ? false : true;
    }
   

    encrypt(message, key) {
        

        if(message && key) {

            let encrypted = [];
            for(let i = 0, j = 0; i < message.length; i++) {

                let messageInd = this.alphabet.indexOf(message[i].toUpperCase());
                let keyInd = this.alphabet.indexOf(key[j].toUpperCase());

                if(messageInd >= 0) {

                   encrypted.push(this.alphabet[((messageInd + keyInd) % this.alphabet.length)]); 
                    j = ++j > key.length - 1 ? 0 : j++;
                } else {

                    encrypted.push(message[i]);
                }   
            }
            
            return this.reverse === true ? encrypted.join('') : encrypted.reverse().join('');
        }

        throw new Error();
    }

    decrypt(encryptedMessage, key) {

        if(encryptedMessage && key) {
        
            let decrypted = [];
            for(let i = 0, j = 0; i < encryptedMessage.length; i++) {
                
                let decMessageInd = this.alphabet.indexOf(encryptedMessage[i].toUpperCase());
                let decKeyInd = this.alphabet.indexOf(key[j].toUpperCase());

                if(decMessageInd >= 0) {

                   decrypted.push(this.alphabet[((decMessageInd + this.alphabet.length - decKeyInd) % this.alphabet.length)]); 
                   j = ++j > key.length - 1 ? 0 : j++;
                } else {

                    decrypted.push(encryptedMessage[i]);
                }   
            }
            
            return this.reverse === true ? decrypted.join('') : decrypted.reverse().join('');
        }

        throw new Error();
    }
}

module.exports = VigenereCipheringMachine;
