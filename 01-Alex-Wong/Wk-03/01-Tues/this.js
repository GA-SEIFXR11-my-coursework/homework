const users = {
  theresa: {
    fullName: "Theresa Smith",
    admin: true,
    age: 45,
    friends: ["freddie", "meredith"],
  },
  freddie: {
    fullName: "Frederick Jones",
    admin: false,
    age: 32,
    friends: ["meredith"],
  },
  meredith: {
    fullName: "Meredith Johnson",
    admin: false,
    age: 56,
    friends: ["freddie", "sally", "theresa"],
  },
  sally: {
    fullName: "Sally Brown",
    admin: false,
    age: 28,
    friends: ["meredith"],
  },
};

// 1. How would you access theresa's full name (i.e. the string "Theresa Smith")?
console.log(
  users.theresa.fullName
);

// 2. How would you access Freddie's age?
console.log(
  users.freddie.age
);

// 3. Create a variable `username` and set it to `sally`
let username = "sally";


// Write an `if` to see if `username` is an admin or not. It should output either "Is an Admin" or "Not an admin"
// (try it out with different values for the `username` variable to check it works)

//breaks if username is not in $users. Not writing an assert for that.
let test_usernames = ["theresa", "freddie", "meredith", "sally"];
for(let user of test_usernames){
  users[user].admin
    ? console.log(`${user} Is an Admin`)
    : console.log(`${user} Not an admin`)
}

// 4. How would you add a new friend "sally" to Freddie's list of friends?
users.freddie.friends.push("sally");

// 5. How would you add yourself to the users object? (fill out the same info as everyone else).
// ideally this should be a class with a constructor or setter scaling up higher...
const alex = {
  fullName: "Alex Wong",
  admin: true,
  age: 28,
  friends: ["we made along the way"],
}
users.alex = alex;

// 6. Write a loop that outputs the full names of each of Meredith's friends.

for(friend of users.meredith.friends){
  console.log(friend);
}