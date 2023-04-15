from flask import Flask, render_template
app = Flask(__name__)

Error_Page = f"""
    <h1>Error: Invalid page. Check URL vals</h1>
"""
# A route that displays the name, age and favourite sports of a person. (Consume input using parameterized routes)

@app.route("/")
def html_root():
    return f"""
    <h1>Root </h1>
    <ul>
        <li><a href="/sports/John%20Doe/99/soccer"> Sports:</a></li>
        <li><a href="/reverse/example_string"> Reverse string: </a></li>
        <li><a href="/leap_year/1234"> Leap year:</a></li>
    <ul>
    """

@app.route("/sports/<name>/<age>/<sport>")
def html_sports(name, age, sport):
    return render_template("sports.html", name=name, age=age, sport=sport)

# A route that returns reversed string to the user on browser in upper case.
@app.route("/reverse/<in_str>")
def html_reverse(in_str):
    return render_template("reverse.html", orig_str=in_str, rev_str=in_str[::-1])

# A route that tells user if the given year is leap year or not. Take leap year as input from path.
def is_leap_year(year: int) -> bool:
    # Every year that is evenly divisible by 4 is leap year
    # Except if it is evenly divisible by 100... is not a leap year
    # Unless it is also divisible by 400 is a leap year
    if year % 400 == 0:
        return True
    if year % 100 == 0:
        return False
    if year % 4 == 0:
        return True
    return False

@app.route("/leap_year/<year>")
def html_leapyear(year):
    try:
        year = int(year)
    except:
        return Error_Page
    
    if(is_leap_year(year)):
        is_isnt = "IS"
    else:
        is_isnt = "is NOT"
    return render_template("leap_year.html", year=year, is_isnt=is_isnt)
    
if __name__ == "__main__":
    app.run(debug=True)