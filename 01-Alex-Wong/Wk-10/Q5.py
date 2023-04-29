# Write a function scream that has the following behaviour:
# scream(0) -> "*crickets*"
# scream(1) -> "argh!"
# scream(2) -> "arghh!"
# scream(5) -> "arghhhhh!"
# etc.

# Extension: add an extra optional argument to allow the user to scream in uppercase

# Extension 2: add another optional argument to allow the user to define their own scream
# E.g. scream(5, "no") gives "nooooo!"
import warnings

def scream(num:int, word:str, upper:bool=None):
    """
    Screams a string, repeating the last character N times and adds an exclamation mark!
    :param num: 
        number of repeats, 
        0 gives crickets, 
        1 simply adds !, 
        2 onwards repeats the last char as well by that many times
    :param word:
        The word to be screamed
    :param upper:
        flag to set to upper
    Examples:
        >>> scream(0, "no") 
        *crickets*
        
        >>> scream(1, "no") 
        no!
        
        >>> scream(5, "no") 
        nooooo!
        
        >>> scream(2, "no", True) 
        NOO!
        
    """
    printable = ""
    if num < 0:
        warnings.warn("Num less than 0. Readjusted to 0")
        num = 0
    
    if num == 0:
        printable = "*crickets*"
    elif num:
        printable = word + "!"
    else:
        printable = word[0:-1] + word[-1]*num + "!"
    
    if(upper != None and upper):
        printable = printable.upper()
    
    print(printable)
    
    return

if __name__ == "__main__":
    scream(0, "yes")
    scream(1, "no")
    scream(5, "why")
    scream(7, "omg", True)