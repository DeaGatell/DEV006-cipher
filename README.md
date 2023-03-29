# Text Cipher - Caesar Cipher

This is thought to be an entertaiment app, for
ciphering a deciphering short texts, looking for cool
combinations, copying and pasting them whenever the
user desires.

## About Caesar Cipher

To encrypt means to hide the contents of a message
from the naked eye, so that only authorised parties
can decrypt a cipher text. The Caesar cipher is one of
the earliest known encryption methods. The Roman
Emperor Julius Caesar used it to send secret orders to
his generals on the battlefield.
<br>
The Caesar cipher is one of the simplest techniquer
for encrypting a message. It is a type of substitution
cipher, i.e. each letter of the original text is
replaced by another letter that is a fixed number of
positions (shift) further on in the same alphabet.

![Offset preview](thumb.png)

For example, if we use an offset of 3 positions:

- The letter A is coded as D.
- The word CASA is encrypted as FDVD.
- Unencrypted alphabet: A B C D E F G H I J K L M N O
P Q R S S T U V W X Y Z
- Encrypted alphabet: D E F G H I J K L M N O P Q R S
T U V W X Y Z A B C
<br>
Today, all simple substitution ciphers are very easily
decrypted and, although in practice they do not offer
much security in communication on their own, the
Caesar cipher can be part of more complex encryption
systems, such as the Vigenère cipher, and even has
application in the ROT13 system.

## Features

- Two text boxes, one for cipher and the other for
decipher. Including Upper and Lower Case.
- A range bar for selecting the offset for each
function (cipher and decipher). Going up to 100.
- An instructions button (How does it work?).
- A suggestions button (When can I use this?).

## First draft

![First draft](src/Screenshot%20(558).png)

At first, the app was going to center in women who need
to communicate safely and secretly whenever they are in
distress and don't want to get caught in their
messaging. 
<br>
However, the interface was getting a bit too 
complicated for the task and it was taking too 
much time to be done. 
<br>
The only concept remainging from that initial 
idea is the one of suggesting emergency numbers
in case the user feels like communicating an
urgent situation. 

## Final draft

![Final draft](src/Screenshot%20(559).png)

In order to simplify the app, this was the idea behind
its design. As I figured out how to take the value
directly from scrolling the range input, the 'Cipher' 
and 'Decipher' buttons were not extrictly necessary.
Although they might be needed for a more intuitive 
User Experience. Expect a review for further
app improvement.