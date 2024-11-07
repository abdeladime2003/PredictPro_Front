import pandas as pd
from datetime import datetime
joueurs_tarsnférés = ['Cristiano Ronaldo', 'Lionel Messi', 'Neymar', 'Kylian Mbappe', 'Eden Hazard', 'Philippe Coutinho', 'Luis Suarez', 'Antoine Griezmann', 'Paul Pogba', 'Virgil Van Dijk', 'Kevin De Bruyne', 'Erling Haaland', 'Harry Kane', 'Jude Bellingham', 'Zinedine Zidane', 'Gareth Bale', 'Cristiano Ronaldo', 'Ousamne Dembele', 'Gvardiol', 'Neymar']
Equipe_avant_transfert = ['Real Madrid', 'Barcelona', 'Barcelona' , 'Monaco', 'Chelsea', 'Liverpool', 'Barcelona', 'Atletico Madrid', 'Juventus', 'Southampton', 'Wolfsburg', 'Borussia Dortmund', 'Tottenham', 'Borussia Dortmund', 'Juventus', 'Tottenham', 'Manchester United', 'Borussia Dortmund', 'RB Leipzig', 'Paris Saint-Germain'],
Equipe_apres_transfert = ['Juventus', 'Paris Saint-Germain', 'Paris Saint-Germain', 'Paris Saint-Germain', 'Real Madrid', 'Barcelona', 'Atletico Madrid', 'Barcelona', 'Manchester United', 'Liverpool' , 'Manchester City', 'Manchester City' , 'Bayern Munich', 'Real Madrid', 'Real Madrid', 'Real madrid', 'Real Madrid', 'Barcelone', 'Manchester City', 'Al Ahly']
Date_des_transferts = [datetime(2018, 7, 10), datetime(2021, 8, 5), datetime(2017, 8, 3), datetime(2018, 9, 1), datetime(2019, 6, 13), datetime(2018, 1, 6), datetime(2014, 7, 11), datetime(2019, 7, 12), datetime(2016, 8, 9), datetime(2018, 1, 1), datetime(2015, 8, 30), datetime(2022, 6, 1), datetime(2023, 8 ,12), datetime(2023, 6 ,1), datetime(2001, 6 ,9), datetime(2013, 9, 1), datetime(2009, 7 ,6), datetime(2017, 8, 25), datetime(2023, 8, 5), datetime(2023, 8 ,15) ]
Montants_des_transfert = [117, 0, 222, 180, 115, 145, 81, 120, 105, 84, 76, 60, 95, 103, 77, 101, 94, 135, 90, 90]
# Exemple de données fictives des transferts
data = {
    'Nom et Prenom': joueurs_tarsnférés,
    'Transféré de': Equipe_avant_transfert,
    'Transféré vers': Equipe_apres_transfert,
    'Date_Transfert': Date_des_transferts,
    'Prix du Transfert (en millions)':Montants_des_transfert
}
df = pd.DataFrame(data)

# Affichage du DataFrame
print(df)