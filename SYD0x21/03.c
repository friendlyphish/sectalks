// gcc pwn-jump.c -o pwn-jump -fno-stack-protector -m32
#include <stdio.h>
#include <string.h>

void printFlag(void) {
	printf("The flag is: xxxxxxxxxxxxxxxx\n");
	fflush(stdout);
}

void printName() {
	char buf[10];

	printf("Enter your name: ");
	fflush(stdout);

	gets(buf);

	printf("Your name is: %s\n", buf);
	fflush(stdout);
}

int main(void) {
	printf("The address of printFlag %p.\n", printFlag);
	fflush(stdout);

	printName();

	printf("Hit <Enter> to close.\n");
	fflush(stdout);

  	return 0;
}