# 2. Write a Python program to reverse a string.
def reverse_string(instr: str) -> str:
    return instr[::-1]

if __name__ == "__main__":
    print(reverse_string("asdf"))