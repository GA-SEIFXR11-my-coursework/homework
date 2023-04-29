lost_boys = [
  {"name": "Tootles", "age": "11"},
  {"name": "Nibs", "age": "9"},
  {"name": "Slightly", "age": "10"},
  {"name": "Curly", "age": "8"},
  {"name": "The Twins", "age": "9"}
]

# Find the total age of all the lost boys
total_age = 0
for lost_boy in lost_boys:
  total_age += int(lost_boy["age"])

print(f"Total age: {total_age}")

# Extension: Find the average age of the lost boys
average_age = float(total_age) / float(len(lost_boys))

print(f"Average age: {average_age}")