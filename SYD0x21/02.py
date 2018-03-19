from pwn import *

import sys;
import numpy;
import io;

def generatePassword():
  password = [0] * 20;

  password[0] = 13;
  password[1] = 37;

  i = 0;
  for i in range(2, 19):
    #print password[i-1] * password[i-2];
    password[i] = (password[i-1] * password[i-2]) & 255;

  for i in range(0, 19):
    #print (password[i] % 26) + ord('a');
    password[i] = ((password[i] % 26) + ord('a')) & 255;

  password[19] = 0; #'\x00';
  chars = map(chr, password);
  pwd = ''.join(chars);
  return pwd;

# Run the generatePassword function from the c source code (converted to python)
pwd = generatePassword();
pprint(pwd);

pwnlib.context.log_level = 'debug'

# Simply send the generated password
r = remote('54.89.22.85', 10002)
r.recvuntil('Enter the password:', drop=True)
r.send(pwd)
r.interactive()
