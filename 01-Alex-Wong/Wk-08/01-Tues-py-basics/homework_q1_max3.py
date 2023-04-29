# 1. Write a Python function to find the maximum of three numbers.
def max_of_3(num1: int, num2: int, num3: int) -> int:
    # return max([num1, num2, num3])
    # Re-write for aptitude exercise
    if(num1 >= num2 and num1 >= num3):
        return num1
    
    if(num2 >= num2 and num2 >= num3):
        return num2
    
    if(num3 >= num2 and num3 >= num1):
        return num3   
    
if __name__ == "__main__":
    print(max_of_3(10,8,-4))
    print(max_of_3(-10,8,4))
    print(max_of_3(10,-8,40))
