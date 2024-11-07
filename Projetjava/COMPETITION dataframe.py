import pandas as pd
from datetime import date

# Exemple de données pour la création du DataFrame (remplacez cela par vos propres données)
HistoriqueLiga = {
    2010: 'Barcelona',
    2011: 'Barcelona',
    2012: 'Real Madrid',
    2013: 'Barcelona',
    2014: 'Atletico Madrid',
    2015: 'Barcelona',
    2016: 'Barcelona',
    2017: 'Real Madrid',
    2018: 'Barcelona',
    2019: 'Barcelona',
    2020: 'Real Madrid',
    2021: 'Atletico Madrid',
    2022: 'Real Madrid',
    2023: 'Barcelone'
    }
HistoriqueLDC = {
    2010: 'Inter Milan',
    2011: 'Barcelona',
    2012: 'Chelsea',
    2013: 'Bayern Munich',
    2014: 'Real Madrid',
    2015: 'Barcelona',
    2016: 'Real Madrid',
    2017: 'Real Madrid',
    2018: 'Real Madrid',
    2019: 'Liverpool',
    2020: 'Bayern Munich',
    2021: 'Chelsea',
    2022: 'Real Madrid',
    2023: 'Manchester City'
}
HistoriqueCDM = {
    1970: 'Brazil',
    1974: 'West Germany',
    1978: 'Argentina',
    1982: 'Italy',
    1986: 'Argentina',
    1990: 'West Germany',
    1994: 'Brazil',
    1998: 'France',
    2002: 'Brazil',
    2006: 'Italy',
    2010: 'Spain',
    2014: 'Germany',
    2018: 'France',
    2022: 'Argentine'
    
}
HistoriqueSERIEA = {
    2010: 'AC Milan',
    2011: 'AC Milan',
    2012: 'Juventus',
    2013: 'Juventus',
    2014: 'Juventus',
    2015: 'Juventus',
    2016: 'Juventus',
    2017: 'Juventus',
    2018: 'Juventus',
    2019: 'Juventus',
    2020: 'Juventus',
    2021: 'Inter Milan',
    2022: 'AC Milan',
    2023: 'SC Napoli'
}
    

HistoriqueLIGUE1 = {
    2010: 'Marseille',
    2011: 'Lille',
    2012: 'Montpellier',
    2013: 'Paris Saint-Germain',
    2014: 'Paris Saint-Germain',
    2015: 'Paris Saint-Germain',
    2016: 'Paris Saint-Germain',
    2017: 'Monaco',
    2018: 'Paris Saint-Germain',
    2019: 'Paris Saint-Germain',
    2020: 'Paris Saint-Germain',
    2021: 'Lille',
    2022: 'Paris Saint-Germain',
    2023: 'Paris Saint-Germain'
    
}

HistoriqueBUNDES = {
    2010: 'Bayern Munich',
    2011: 'Borussia Dortmund',
    2012: 'Bayern Munich',
    2013: 'Bayern Munich',
    2014: 'Bayern Munich',
    2015: 'Bayern Munich',
    2016: 'Bayern Munich',
    2017: 'Bayern Munich',
    2018: 'Bayern Munich',
    2019: 'Bayern Munich',
    2020: 'Bayern Munich',
    2020: 'Bayern Munich',
    2020: 'Bayern Munich',
    2020: 'Bayern Munich'
}

HistoriquePL = {
    2010: 'Chelsea',
    2011: 'Manchester United',
    2012: 'Manchester City',
    2013: 'Manchester United',
    2014: 'Manchester City',
    2015: 'Chelsea',
    2016: 'Leicester City',
    2017: 'Chelsea',
    2018: 'Manchester City',
    2019: 'Manchester City',
    2020: 'Liverpool',
    2021: 'Manchester City',
    2022: 'Manchester City',
    2023: 'Manchester City'
    
}
HistoriqueCAN = {
    2000: 'Cameroon',
    2002: 'Cameroon',
    2004: 'Tunisia',
    2006: 'Egypt',
    2008: 'Egypt',
    2010: 'Egypt',
    2012: 'Zambia',
    2013: 'Nigeria',
    2015: 'Ivory Coast',
    2017: 'Cameroon',
    2019: 'Algeria',
    2021: 'Senegal'
    
}

HistoriqueCopaAmerica = {
    2000: 'Colombia',
    2001: 'Colombia',
    2004: 'Brazil',
    2007: 'Brazil',
    2011: 'Uruguay',
    2015: 'Chile',
    2016: 'Chile',
    2019: 'Brazil',
    2021: 'Argentine'
    
}

HistoriqueEURO = {
    2000: 'France',
    2004: 'Greece',
    2008: 'Spain',
    2012: 'Spain',
    2016: 'Portugal',
    2020: 'Italy',  
}



data = {
    'Competition': ['League des champions', 'Coupe du monde', 'Liga Santander', 'Bundesliga', 'Série A', 'Ligue 1', 'Première League', 'EURO', 'COPA AMERICA', 'CAN'],
    'Nombre de Participants': [32, 32, 20, 18, 20, 20, 20, 24, 14, 24],
    'Date de Creation': [date(1955, 4, 1), date(1930, 6, 1), date(1929, 2, 10), date(1963, 11, 11), date(1898, 2, 1 ), date(1932, 2, 1), date(1888, 2, 1), date(1956, 6, 1), date(1916, 6, 1), date(1957, 1, 1)],
    'Equipe concerné': ['Club', 'Selection', 'Club', 'Club', 'Club', 'Club', 'Club', 'Selection', 'Selection', 'Selection'],
    'Systeme': ['Coupe', 'Coupe', 'Championnat', 'Championnat', 'Championnat', 'Championnat', 'Championnat', 'Coupe', 'Coupe', 'Coupe'],
    'Niveau': ['Continental', 'Mondial', 'National', 'National', 'National', 'National', 'National', 'Continental', 'Continental', 'Continental'],
    'Historique': [HistoriqueLDC, HistoriqueCDM, HistoriqueLiga, HistoriqueBUNDES, HistoriqueSERIEA, HistoriqueLIGUE1, HistoriquePL, HistoriqueEURO, HistoriqueCopaAmerica, HistoriqueCAN]
}

# Création du DataFrame à partir des données
COMPETITION = pd.DataFrame(data)

# Affichage du DataFrame
print(COMPETITION)
