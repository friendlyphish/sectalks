# Hosting a JS Deobfuscation CTF

## Challenge

Reverse engineer the JavaScript code.  Simplify it to the point you can actually understand what's going on.

Hint: use [Chrome Devtools Local Overrides](https://developers.google.com/web/updates/2018/01/devtools#overrides) to be able to change the scripts.

Hint: use a code editor that can intelligently rename JavaScript variables, e.g. Visual Studio Code.

## Concept

Introduce the following techniques:

* Minification... replace var names, remove comments
* Compression... string, decompress, eval
* Obfuscate... use encodings e.g. escape/unescape, encryption, object vs array notation, multiple script parts, dead code, reusing same variable names

* Anti-emulation... detect debugger, DOM events, elapsed time, emulation limits, exception handling, parent/child pages, 

* Suble JS comparison issues (https://dorey.github.io/JavaScript-Equality-Table/)
* Subtle JS behaviours (https://www.smashingmagazine.com/2011/10/lessons-from-a-review-of-javascript-code/)... uncommon radix, 

## Run

docker build -t sectalks:easy . && docker run -p 9080:9080 -ti --rm=false -e FLAG="insert_credit_card_here" sectalks:easy

docker build -t sectalks:hard . && docker run -p 9081:9080 -ti --rm=false -e FLAG="skimmer_surcharge_applied" sectalks:hard