from pwn import *

# Simply send the hardcoded password, including non-standard characters
r = remote('54.89.22.85', 10001)
r.recvuntil('Enter the password:', drop=True)
r.send('supe\x07r_s3cret')
r.interactive()