// gcc pwn-printf.c -o pwn-printf -fno-stack-protector -m32

#include <stdio.h>
#include <string.h>

void printFlag(void) {
	printf("The flag is: xxxxxxxxxxxxxxxxxxx\n");
	fflush(stdout);
}

void authenticate() {
	char buf[200];
	char isAllowed = 0;

	printf("%p\n", &isAllowed);

	fflush(stdout);

	fgets(buf, 200, stdin);

	printf(buf);
	fflush(stdout);

	if (isAllowed) {
		printFlag();
	}
}

int main(void) {

	authenticate();

	printf("Hit <Enter> to close.\n");
	fflush(stdout);

  	return 0;
}