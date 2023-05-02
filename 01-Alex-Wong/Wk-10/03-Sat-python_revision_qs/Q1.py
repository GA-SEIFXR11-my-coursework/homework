data = {
  "town": {
    "residents": ["Maurice", "Belle", "Gaston"],
    "castle": {
      "num_rooms": 47,
      "residents": [
        {
          "name": "Robby Benson",
          "year_of_birth": 1956
        }
      ],
      "guests": ["birds"]
    }
  }
}


# 1. Print the number of rooms in the castle
print(data["town"]["castle"]["num_rooms"])

# Extension: Write helper functions for tasks 2, 3, and 4
# so that they can be called with different arguments

# 2. Add "Belle" to the beginning of the guests list
def add_to_guests_front(data, guest):
  guest_list = data["town"]["castle"]["guests"]
  data["town"]["castle"]["guests"] = [guest, *guest_list]
  return

add_to_guests_front(data, "Belle")
print(data)

# 3. Print Robby's birth year
# print(data["town"]["castle"]["residents"][0]["year_of_birth"])
def print_castle_resident_info(data):
  for resident in data["town"]["castle"]["residents"]:
    print(f"Name: {resident['name']}, BirthYear: {resident['year_of_birth']}")
  return

print_castle_resident_info(data)

# 4. Add a new key-value pair to the castle to make "Mrs Potts" the cook
# print(data["town"]["castle"]["residents"][0]["year_of_birth"])
def add_role_to_castle(data, role, name):
  data["town"]["castle"][role] = name
  return
add_role_to_castle(data, "cook", "Mrs Potts")
print(data)