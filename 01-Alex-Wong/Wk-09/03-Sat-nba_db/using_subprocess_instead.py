import subprocess

class Query_psql():
    def __init__(self):
        self.password = open(".password").read().strip()
        self.db_name = "nba_db"
        self.sh_command = f"PGPASSWORD={self.password} psql -U postgres -d {self.db_name} -w"
        return
    
    def psql_query(self, desc, query):
        proc = subprocess.Popen(self.sh_command, shell=True, stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
        stdout, stderr = proc.communicate(input=sql_command.encode())
        print(query_desc)
        print(stdout.decode())
        print(stderr.decode())
        proc.terminate()
        return


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

query = Query_psql()

query_desc = '1. All columns for all players from the Indiana Packers (IND) who are under 26 years old'
sql_command = """
    SELECT * FROM players
    WHERE team = 'IND'
    AND age < 26
    ;
"""
query.psql_query(query_desc,sql_command)

query_desc = '2. All columns for all players, ordered from least points scored to most points scored'
sql_command = """
    SELECT * FROM players
    ORDER BY points ASC
    ;
"""
query.psql_query(query_desc,sql_command)

query_desc = '3. The name and team of the players with the top 20 average points per game'
sql_command = """
    SELECT name, team, points/games AS Avg_score
    FROM players
    WHERE games > 0
    ORDER BY Avg_score DESC
    LIMIT 20
    ;
"""
query.psql_query(query_desc,sql_command)

query_desc = '4. The average age for all players'
sql_command = """
    SELECT AVG(age)
    FROM players
    ;
"""
query.psql_query(query_desc,sql_command)

query_desc = '5. The average age for all players who played more than 40 games'
sql_command = """
    SELECT AVG(age)
    FROM players
    WHERE games > 40
    ;
"""
query.psql_query(query_desc,sql_command)

query_desc = '6. The total points for each team, ordered from most total team points to least'
sql_command = """
    SELECT team, SUM(points) AS Total
    FROM players
    GROUP BY team
    ORDER BY Total DESC
    ;
"""
query.psql_query(query_desc,sql_command)
