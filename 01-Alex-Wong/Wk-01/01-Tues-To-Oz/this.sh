#!/bin/zsh
# switch above to "#!/usr/bin/bash" for other *nix

mkdir stuff
cd ./stuff

# 1. No place like home
# Create directory "House" with files "Dorothy" and "Toto"
# Create directory "Oz" with files for the 4 Witches:
#     Good Witch of the North
#     Wicked Witch of the East
#     Good Witch of the South
#     Wicked Witch of the West

mkdir House
touch ./House/Dorothy
touch ./House/Toto

mkdir Oz
cd ./Oz
touch "Good Witch of the North"
touch "Wicked Witch of the East"
touch "Good Witch of the South"
touch "Wicked Witch of the West"
cd ../


# 2. Ding! Dong! The Witch is Dead
#     Delete: "Wicked Witch of the East"
#     Move "Dorothy" from "House" to "Oz"

rm "./Oz/Wicked Witch of the East"
mv "./House/Dorothy" "./Oz/"


# 3. Follow the Yellow Brick Road
#     Add file for "Scarecrow", "Tin Man" and "Cowardly Lion"
#     Create directory "Emerald City"
#     Move 'the gang' to "Emerald City"

touch "Scarecrow"
touch "Tin Man"
touch "Cowardly Lion"
mkdir "Emerald City"
mv "Scarecrow" "./Emerald City/"
mv "Tin Man" "./Emerald City/"
mv "Cowardly Lion" "./Emerald City/"


# 4. You Must Kill the Witch
# Add "Flying Monkeys" to "Oz"
# Remove "Wicked Witch of the West"
# Give the gifts (add the text to the files):
#     Give Scarecrow a diploma
#     Give Tin Man a heart shaped watch
#     Give Lion a medal

touch "./Oz/Flying Monkeys"
rm "./Oz/Wicked Witch of the West"
echo "diploma" > "./Emerald City/Scarecrow"
echo "heart shaped watch" > "./Emerald City/Tin Man"
echo "medal" > "./Emerald City/Cowardly Lion"

# "I hereby confer upon you the honorary degree of TH.D."