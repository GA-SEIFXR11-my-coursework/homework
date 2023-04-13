# 2. Write a Python program to reverse a string.
def reverse_string(instr: str) -> str:
    # return instr[::-1]
    # Re-write for aptitude excercise
    index = len(instr) - 1
    retstr: str = ""
    while index >= 0:
        retstr += instr[index]
        index -= 1
    return retstr

# 3. Write a Python program to check if a string value reversed is same as it was when not reversed.
def is_palindrome_nospace(phrase: str) -> bool:
    if(phrase == reverse_string(phrase)):
        return True
    return False

if __name__ == "__main__":
    print(reverse_string("asdf"))
    print(is_palindrome_nospace("asdf"))
    print(is_palindrome_nospace("asdfdsa"))
    