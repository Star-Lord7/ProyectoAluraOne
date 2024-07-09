const shift = 3; // Shift for Caesar Cipher

function encrypt() {
    const input = document.getElementById('textInput').value;
    const encrypted = caesarCipher(input, shift);
    document.getElementById('encryptedText').value = encrypted;
    clearFields('textInput');
}

function decrypt() {
    const input = document.getElementById('decryptInput').value;
    const decrypted = caesarCipher(input, -shift);
    document.getElementById('decryptedText').value = decrypted;
    clearFields('decryptInput');
}

function caesarCipher(str, shift) {
    return str.split('').map(char => {
        if (char.match(/[a-z]/i)) {
            const code = char.charCodeAt(0);
            let newCode = code + shift;

            if (code >= 65 && code <= 90) {
                newCode = ((newCode - 65) % 26) + 65;
            } else if (code >= 97 && code <= 122) {
                newCode = ((newCode - 97) % 26) + 97;
            }

            return String.fromCharCode(newCode);
        }
        return char;
    }).join('');
}

function copyText() {
    const encryptedText = document.getElementById('encryptedText');
    encryptedText.select();
    encryptedText.setSelectionRange(0, 99999); // For mobile devices
    document.execCommand('copy');
    alert('Texto encriptado copiado');
    clearFields('encryptedText');
}

function clearFields(fieldId) {
    document.getElementById(fieldId).value = '';
}