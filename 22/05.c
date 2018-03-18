// gcc pwn-memory.c -o pwn-memory -fno-stack-protector -m32

#include <stdio.h>
#include <string.h>

void printFlag() {
	char *flag = "the flag is xxxxxxxxxxxxxxxxxxx";
	printf(flag);
	fflush(stdout);
}

void printHelp() {
	printf("Commands:\n");
	printf("\thelp: Display commands\n");
	printf("\tget <address>: get the value at address\n");
	printf("\tset <address> <VALUE>: set the value at address\n");
	printf("\tdead: view a list of people who are dead to us\n");
	fflush(stdout);
}

int main() {
	printf("The address of printFlag %i\n", printFlag);
	fflush(stdout);
	char buf[20];

	// printf("%u", buf);

	while (1) {
		printf(">> ");
		fflush(stdout);

		fgets(buf, 20, stdin);

		if (strstr(buf, "help") != NULL) {
			printHelp();
		} else if (strstr(buf, "dead") != NULL) {
			printf("alex stamos\n");
			fflush(stdout);
		} else if (strstr(buf, "get") != NULL) {
			unsigned int index;
			sscanf(buf, "get %i\n", &index);

			char *offset = index;

			char value = *offset;
			printf("[%i] = 0x%x\n", index, (unsigned char)value);
			fflush(stdout);
		} else if (strstr(buf, "set") != NULL) {
			unsigned char value;
			unsigned int index;
			sscanf(buf, "set %i %i\n", &index, &value);

			printf("%i %i", index, value);
			fflush(stdout);

			unsigned int *offset = index;
			*offset = value;
		}
	}

  	return 0;
}