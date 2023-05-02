friends = ["Chip Potts", "Cogsworth", "Lumière", "Mrs. Potts"]

# Print "Belle is friends with <friend_name>" for each of the friends in the above list
for friend in friends:
    print(f"Belle is friends with {friend}")

# Extension: Add "Belle" to the friends list and then print "X is friends with Y" for each combination possible
# Note: X and Y should be distinct :)
friends.append("Belle")
rem = friends
for x in rem:
    person_a = x
    rem = rem[1:]
    for person_b in rem:
        print(f"{person_a} is friends with {person_b}")

