import random

def prompt_positive_int(prompt: str) -> int:
    keep_asking = True
    while(keep_asking):
        try:
            ret = int( input(prompt) )
        except:
            print("Input must be an integer. (eg. 0, 1, 2 ...)")
            continue
        if( ret < 0 ):
            print("Input must be positive!")
            continue
        keep_asking = False
    return ret

class NumberGuesser:
    _max_number: int = None
    _secret_number: int = None
    
    def __init__(self, max_number:int = None, secret_number:int = None):
        if max_number != None:
            self._max_number = max_number
        if secret_number != None:
            self._secret_number = secret_number
        return
    
    def reroll_secret(self):
        if( self._max_number == None ):
            print("Max number must be set first.")
            return
        self._secret_number = random.randint(0, self._max_number )
        return
    
    def set_max(self, max_number: int = None):
        if( max_number == None):
            max_number = prompt_positive_int("Set the maximum number rollable. \n: ")
        self._max_number = max_number
        return
    
    def set_secret(self, secret_number: int = None):
        if( secret_number == None):
            secret_number = prompt_positive_int("Set a secret number. \n: ")
        self._secret_number = secret_number
        return
    
    
    def begin(self) -> bool:
        if self._secret_number == None:
            print("Set a secret before beginning new game.")
            return
        while( True ):
            guess: int = prompt_positive_int(f"Guess the secret number between 0 and {self._max_number}. \n: ")
            if( guess == self._secret_number ):
                print(f"WIN: You've guessed the secret number: {self._secret_number}")
                return
            if( guess < self._secret_number ):
                print("Wrong, guess higher!")
                continue
            elif( guess > self._secret_number ):
                print("Wrong, guess lower!")
                continue
        return
            
if __name__ == "__main__":
    myGame = NumberGuesser(10, None)
    myGame.set_max()
    myGame.reroll_secret()
    myGame.begin()
