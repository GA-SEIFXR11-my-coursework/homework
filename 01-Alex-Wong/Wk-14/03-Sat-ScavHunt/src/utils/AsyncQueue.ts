type Foo = {
    // Type definition for Foo
    // ...
  };
  
  function myFun<T>(value: T): T {
    if (value instanceof Foo ) {
      // Value is of type Foo
      console.log("Value is of type Foo:", value);
      // Perform specific actions for Foo
    } else {
      // Value is not of type Foo
      console.log("Value is not of type Foo");
      // Perform actions for other types
    }
  
    return value;
  }