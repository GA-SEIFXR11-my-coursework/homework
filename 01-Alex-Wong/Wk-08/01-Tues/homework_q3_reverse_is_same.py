# 3. Write a Python program to check if a string value reversed is same as it was when not reversed.
def is_palindrome_nospace(phrase: str) -> bool:
    if(phrase == phrase[::-1]):
        return True
    return False

if __name__ == "__main__":
    print(is_palindrome_nospace("asdf"))
    print(is_palindrome_nospace("asdfdsa"))