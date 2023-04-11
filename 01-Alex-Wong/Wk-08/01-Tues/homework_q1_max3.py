# 1. Write a Python function to find the maximum of three numbers.
def max_of_3(num1: int, num2: int, num3: int) -> int:
    return max([num1, num2, num3])

if __name__ == "__main__":
    print(max_of_3(-10,8,4))