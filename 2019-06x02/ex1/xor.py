def xor_crypt_string(data, key='awesomepassword', encode=False, decode=False):
    from itertools import izip, cycle
    import base64
    if decode:
        data = base64.decodestring(data)
    xored = ''.join(chr(ord(x) ^ ord(y)) for (x,y) in izip(data, cycle(key)))
    if encode:
        return base64.encodestring(xored).strip()
    return xored


secret_data = "49c04f833bb9716b464288a599a693fcf75729348ac18ae40eca274eef813baba9e642f2c77ae6ca77515fa1d9583455cba64e1b6d24a36c207c8158edcf2ce901b994eb7f801e"
print xor_crypt_string(secret_data, key='6ecd45827ea9222f024389a5e6b684f6e904022fc2c1bbf415cd304ee597', encode=False)
#print xor_crypt_string(xor_crypt_string(secret_data, encode=True), decode=True)