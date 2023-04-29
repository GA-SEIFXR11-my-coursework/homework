import psycopg2

# Data looks like the following:
# table: players
#  id  |        name         | age | team | games | points 
# -----+---------------------+-----+------+-------+--------
#    1 | Jeff Adrien         |  25 | HOU  |     8 |     21
#    2 | Arron Afflalo       |  26 | DEN  |    62 |    943
#    3 | Blake Ahearn        |  27 | UTA  |     4 |     10
#    4 | Solomon Alabi       |  23 | TOR  |    14 |     33
#    5 | Cole Aldrich        |  23 | OKC  |    26 |     57
#    6 | LaMarcus Aldridge   |  26 | POR  |    55 |   1191
#    ...

password = open('.password').read().strip()
connection = psycopg2.connect(dbname="nba_db", user="postgres", password=password)
cursor = connection.cursor()

query_desc = '1. All columns for all players from the Indiana Packers (IND) who are under 26 years old'
cursor.execute(
    """
    SELECT * FROM players
    WHERE team = 'IND'
    AND age < 26
    ;
    """
)
results = cursor.fetchall()
print(query_desc)
print(results)
print()

query_desc = '2. All columns for all players, ordered from least points scored to most points scored'
cursor.execute(
    """
    SELECT * FROM players
    ORDER BY points ASC
    ;
    """
)
results = cursor.fetchall()
print(query_desc)
print(results)
print()

query_desc = '3. The name and team of the players with the top 20 average points per game'
cursor.execute(
    """
    SELECT name, team, points/games AS Avg_score
    FROM players
    WHERE games > 0
    ORDER BY Avg_score DESC
    LIMIT 20
    ;
    """
)
results = cursor.fetchall()
print(query_desc)
print(results)
print()

query_desc = '4. The average age for all players'
cursor.execute(
    """
    SELECT AVG(age)
    FROM players
    ;
    """
)
results = cursor.fetchall()
print(query_desc)
print(results)
print()

query_desc = '5. The average age for all players who played more than 40 games'
cursor.execute(
    """
    SELECT AVG(age)
    FROM players
    WHERE games > 40
    ;
    """
)
results = cursor.fetchall()
print(query_desc)
print(results)
print()

query_desc = '6. The total points for each team, ordered from most total team points to least'
cursor.execute(
    """
    SELECT team, SUM(points) AS Total
    FROM players
    GROUP BY team
    ORDER BY Total DESC
    ;
    """
)
results = cursor.fetchall()
print(query_desc)
print(results)
print()


connection.commit()
connection.close()
