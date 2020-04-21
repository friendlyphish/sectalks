# Floppy

## Challenge

Hey, I found this floppy disk in the car park, but I can't seem to make sense of it! It looks pretty old... Maybe one of the bits flipped or something.

I made a forensic image of it, maybe you can figure it out?

Author: Jason

## Solution

Trying to open the file in Autopsy, we can see the image doesn't look quite right with lots of incomplete flag folders.  Tons of flag files.  A "which_one" file that doesn't seem to make much sense.

The challenge indicates "bit flipped", so we have a look at the file in a hex editor.  We can see "SECTALKS FAT12" which gives us the hint this is a FAT12 volume.

We look up the FAT12 header details, but nothing obvious jumped out to "bit flip" that wouldn't break the volume completely.

First hint, tells us FAT12 which we already know.  Second hint tells us we're on the right track and need to look in the FAT Partition Boot Sector.

We find better [reference materials](http://www.ntfs.com/fat-partition-sector.htm) which show us typical sample values.  Byte 0x10 has value 0x03 which is different from the typical value of 0x02, (and it's also a single bit flip as per the challenge description).

We change the hex, open the file in Autopsy again, and we get a much cleaner looking filesystem.  The "which_one" file shows the value 64.  We check the "flag_64" file and voila, we have our flag.