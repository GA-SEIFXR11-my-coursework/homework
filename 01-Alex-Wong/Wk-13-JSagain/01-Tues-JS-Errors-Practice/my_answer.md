## 2. JS Errors Practice

Remember they're not error messages, just helpful hints :smile:

For each of the problems below, provide an:

- explanation and
- an example of code that would result in the error

---

1. `Uncaught SyntaxError: Unexpected token {`

    > Expected something else but got '{' instead. Eg. the following expects a closing '}' instead of another object element that starts with '{' due to the missing comma

    ```html
    <script>
        var asdf = [
            {"asdf": 1} // missing comma
            {"asdf": 1}
        ]
    </script>
    ```

    <br>
    <br>

2. `Uncaught ReferenceError: greeting is not defined`

    > greeting() hasn't been defined yet or simply hasnt been defined. Eg below calls greeting() before it is defined

    ```html
    <script>
        greeting()  // call before assignment
        function greeting(){
            console.log("hello)
        }
    </script>
    ```

    <br>
    <br>

3. `GET https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/1.0.0/js/bootstrap.min.js 404 (Not Found)`

    > No content to be found. 404 is a common api response or page response even for endpoints that do not have valid content or endpoints that are not made to be reached.

    <br>
    <br>

4. `Uncaught TypeError: "hello".push is not a function`

    > string object "hello" does not have .push attribute nor .push() method. Use str concats instead.

    ```html
    <script>
        "hello".push()  // not defined
    </script>
    ```

    <br>
    <br>

5. `Uncaught TypeError: str.join is not a function`

    > str is not a js type. str.join exists in python but not js

    ```html
    <script>
        str.join() // Uncaught ReferenceError: str is not defined
        "asdf".join() // TypeError: "asdf".join is not a function
    </script>
    ```

    <br>
    <br>

6. `Uncaught TypeError: Cannot read properties of undefined (reading 'name')`

    > Attempt to access an object property with key: 'name' when the object does not have that key

    ```html
    <script>
        var asdf = {
            "id": 10
        }
        console.log(asdf["id"])
        console.log(asdf["name"]) // accessing undefined property
    </script>
    ```

    <br>
    <br>

7. `Uncaught SyntaxError: missing ) after argument list`

    > Missing bracket after args list in function call

    ```html
    <script>
        function add(x,y){
            return x + y
        }
        add(1,2 ; //missing bracket

    </script>
    ```

    <br>
    <br>

8. `Uncaught ReferenceError: Invalid left-hand side in assignment`

    > Assignment used where it's invalid. Assigments are = or += or -=, etc.

    ```html
    <script>
        if(myVar = 2){  // Expect == or ===, but assignment was found
            // do stuff 
        }
        let myStr = "foo " 
        += "bar "   // Expect + instead of +=
        += "foo "   // Expect + instead of +=
    </script>
    ```

    <br>
    <br>

9. `Uncaught SyntaxError: Unexpected number`

    > Used commas instead of dots. Some locales use that syntax.

    ```html
    <script>
        var some_number = 12,234 // unexpected number
    </script>
    ```

    <br>
    <br>

10. `Uncaught SyntaxError: Unexpected string`

    > Using . instead of + is a PHP style concat that JS does not support. This can lead to unexpected string. Another way to cause an unexpected string is by missing comma in object assignment

    ```html
    <script>
        console.log("asdf" . "qwer") // unexpected string. Use + instead

        var asdf = {
            "id": 1     //missing comma also causes unexpected string
            "name": "foo"
        }
    </script>
    ```

    <br>
    <br>

11. `Uncaught SyntaxError: Unexpected identifier`

    > unexpected variable parsed

    ```html
    <script>
        function foo(a, b) {
            return a b;  // Fix by adding the missing operator
        }
    </script>
    ```

    <br>
    <br>

12. `Uncaught RangeError: Maximum call stack size exceeded`

    > Too many function calls, the allowed function call limit has been reached. This can be due to bad recursions.

    ```html
    <script>
        // example bad recursion that causes "Maximum call stack size exceeded"
        function bad_recursion(num){
            return(bad_recursion(num))
        }
        bad_recursion(5)
    </script>
    ```
