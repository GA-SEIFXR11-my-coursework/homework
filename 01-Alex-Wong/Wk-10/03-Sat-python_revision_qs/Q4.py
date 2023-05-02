import re

# Write a function to reverse the word of each sentence
# E.g. reverse_words("hello world") gives "olleh dlrow"

# Short pythonic version
def reverse_1_word(word) -> str:
    return word[::-1]

# Less 'cheaty' method
def reverse_1_word_harder(word) -> str:
    ret = ""
    index = len(word) - 1
    while index > 0:
        ret += word[index]
        index -= 1
    return ret

def reverse_words(words:str):
    return " ".join([ reverse_1_word(x) for x in words.split() ])

# Extension: cater for punctuation
# E.g. reverse_words("hello, world!") gives "olleh, dlrow!"

def reverse_words_2(words:str):
    # (\w+) is a word (1+ word chars)
    # (\W+) is a non-word (1+ non word chars)
    # * is 0 or more (greedy)
    # () makes capture groups
    regex = re.compile( r'(\w+)*(\W+)*' )
    matched = regex.findall(words)
    # "hello, world!" -> matched:
    # [('hello', ', '), ('world', '!'), ('', '')]
    ret = ""
    for word, non_word in matched[:-1]:
        ret += word[::-1]
        ret += non_word
    return ret
    
if __name__ == "__main__":
    print(reverse_words_2("hello, world!"))
    
    