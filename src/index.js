/* eslint-disable no-console */
import cipher from './cipher.js';

console.log(cipher);

//Cipher Section//

const cipherOffset1 = document.getElementById("thisIsN1");
cipherOffset1.addEventListener("input", () => {
  const string = document.getElementById('ciphertext').value;
  const offset = document.getElementById('thisIsN1').value;
  const resultSpan = document.getElementById('result1');

  resultSpan.textContent = cipher.encode (offset, string);
});

//Decipher Section//

const cipherOffset2 = document.getElementById("thisIsN2");
cipherOffset2.addEventListener("input", () => {
  const string = document.getElementById('deciphertext').value;
  const offset = document.getElementById('thisIsN2').value;
  const resultSpan = document.getElementById('result2');

  resultSpan.textContent = cipher.decode (offset, string);
});

//Buttons//

const info = document.getElementById ('instructions');
info.addEventListener ("click", () => {
  console.log('click');
  alert("To cipher: Write your message in the first text area, choose an offset by scrolling through the bar, copy the message and paste wherever you'd like to use it. \n\nTo decipher: Paste your secret message in the second text area, choose the same offset by scrolling through the bar and uveil the secret message.")
});

const sugg = document.getElementById ('suggestions');
sugg.addEventListener ("click", () => {
  console.log('click');
  alert("You can use this page to cipher and decipher secret messages with friends and family. \nHowever if you are in danger and in real need of help, we suggest you contact any of these emergency numbers (Mexico): \n\n911 - Emergency \n089 - Anonymous report \n088 - Federal Police \n*765 - Women SOS Line")
});
