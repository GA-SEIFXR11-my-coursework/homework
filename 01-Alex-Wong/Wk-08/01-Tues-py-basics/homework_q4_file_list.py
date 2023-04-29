import os
import logging
# 4. Write a function to list all the files in a directory input by the user. Keep prompting the user for input until the user enters "End" as input.

# Extension (for Q.4)
# 4.1 Allow the user to select a file from the listed files from the directory selected by user.
# 4.2 Display the name, file extension, file size to the user.
# 4.3 Save all the inputs entered by the user since the beginning of the program into a new file called 'History.txt'.

def show_files():
    outfile = "History.txt"
    fp = open(outfile, "w")
    prompt = 'Input Directory to list files. Input "End" to terminate.\n: '
    while True:
        resp = input(prompt)
        fp.write(resp + "\n")
        if resp.lower() == "end":
            break
        try:
            dirs = os.listdir(resp)
        except:
            print("Invalid directory")
            continue
        dirs = [ os.path.abspath(resp+"/"+dir) for dir in dirs]
        for dir in dirs:
            name = os.path.basename(dir)
            if( os.path.isfile(dir) ):
                size_B = os.stat(dir).st_size
                print(name, "\t" f"size: {size_B} B")
            else:
                print(name, "\t", "directory")
    fp.close()
    return

if __name__ == "__main__":
    show_files()
    pass