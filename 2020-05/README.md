# Hosting a JS Deobfuscation CTF

## Challenge

Reverse engineer the JavaScript code.  Simplify it to the point you can actually understand what's going on.

Hint: use a good code editor that can intelligently rename JavaScript variables!

## Concepts

Introduces the following concepts:

* Minification... replace var names, remove comments
* Compression... string, decompress, eval
* Obfuscate... use encodings e.g. escape/unescape, encryption, object vs array notation, multiple script parts, dead code, reusing same variable names

* Anti-emulation... detect debugger, DOM events, elapsed time, emulation limits, exception handling, parent/child pages, 

* Suble JS comparison issues (https://dorey.github.io/JavaScript-Equality-Table/)
* Subtle JS behaviours (https://www.smashingmagazine.com/2011/10/lessons-from-a-review-of-javascript-code/)... uncommon radix, 

## Run

docker build -t sectalks:easy . && docker run -p 9080:9080 -ti --rm=false -e FLAG="insert_flag_here" sectalks:easy

docker build -t sectalks:hard . && docker run -p 9080:9080 -ti --rm=false -e FLAG="insert_flag_here" sectalks:hard