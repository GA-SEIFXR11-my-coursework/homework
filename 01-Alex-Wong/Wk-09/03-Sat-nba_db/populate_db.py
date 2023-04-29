import psycopg2

# createdb nba_db first

password = open('.password').read().strip()
connection = psycopg2.connect(dbname="nba_db", user="postgres", password=password)
cursor = connection.cursor()

# this creates the table with the correct columns
cursor.execute(
    """
    CREATE TABLE players (
        id serial PRIMARY KEY,
        name varchar(50) NOT NULL,
        age integer NOT NULL,
        team varchar(50),
        games integer NOT NULL,
        points integer NOT NULL
    );
    """
)

# open .csv file and reads data into variables
for line in open('nba_data.csv'):
    # strip leading and trailing whitespaces and get each comma separated value as a list
    player_data = line.strip().split(',')

    # get all the data for each player and store as variables
    # note the conversion to the correct data types
    name = player_data[0]
    age = int(player_data[1])
    team = player_data[2]
    games = int(player_data[3])
    points = int(player_data[4])

    cursor.execute(
        """
        INSERT INTO players(name, age, team, games, points)
        VALUES (%s, %s, %s, %s, %s)
        """
        ,[name, age, team, games, points]
    )

connection.commit()
connection.close()
