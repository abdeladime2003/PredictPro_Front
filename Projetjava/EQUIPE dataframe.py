import pandas as pd
Nom=['FC BARCELONA','REAL MADRID','ATLETICO MADRID','LIVERPOOL','ARSENAL','MAN CITY','BAYERN MUNICH','PSG','JUVENTUS','AC MILAN']
effectif=[' Marc-André ter Stegen - Iñaki Peña - Joao Cancelo - Baldé - Inigo Martinez - Christensen - Marcos Alonso - S.Roberto - Koundé -Gvai - Romeu - De Jong - Fermin - Gundogan - Pedri - Torres - Lewandowski - Raphinha - Joao Felix - Lamine Yamal - Vitor Roque','Arrizabalaga Kepa -  Lunin Andriy - Alaba David -  Carvajal Daniel - Fernandez Nacho - Garcia Fran - Mendy Ferland -  Militao Eder -  Rudiger Antonio - Bellingham Jude - Camavinga Eduardo -  Ceballos Dani - Diaz Brahim -  Kroos Toni - Modric Luka - Paz Nico - Tchouameni Aurelien - Garcia Gonzalo -  Joselu -  Rodrygo - Vinicius Junior ','Jan Oblak -  Ivo Grbić - Nahuel Molina - Axel Witsel - M. Hermoso - J. Giménez - Stefan Savić - C. Azpilicueta - Koke - R. De Paul - M. Llorente - Samuel Lino - Thomas Lemar - Saúl - A. Griezmann - Á. Morata - Memphis - Ángel Correa','Alisson - Kelleher Caoimhin - Alexander-Arnold Trent -  Gomez Joe - Konate Ibrahima - Matip Joel - Quansah Jarell - Robertson Andrew - Elliott Harvey - Endo Wataru - Gravenberch Ryan - Jones Curtis - Mac Allister Alexis - McConnell James - Diaz Luis - Diogo Jota - Doak Ben - Gakpo Cody - Nunez Darwin - Salah Mohamed','Mathew Ryan - Aaron Ramsdale - David Raya - William Saliba - Gabriel Magalhães - Jurrien Timbe - Oleksandr Zinchenko - Ben White - Takehiro Tomiyasu - Cédric Soares - Declan Rice - Thomas Partey - Jorginho - Elneny - Odegaard - Kai Havertz - Rowe - Martinelli - Trossard - Saka - Jesus - Nketiah','Zack Steffen - Stefan Ortega - Ederson - Scott Carson - True Grant - Kyle Walker - Rúben Dias - John Stones - Nathan Aké - Josko Gvardiol - Manuel Akanji - Max Alleyne - Rico Lewis - Kalvin Phillips - Mateo Kovacic - Jack Grealish - Rodri - Kevin De Bruyne - Bernardo Silva - Sergio Gómez - Matheus Nunes - Phil Foden - Oscar Bobb - Jacob Wright - Mahamadou Susoho - Micah Hamilton - Slobodan Tedic - Erling Haaland - Jérémy Doku - Julián Álvarez','Manuel Neuer - Daniel Peretz - Sven Ulreich - Tom Hülsmann - Matthijs de Ligt - Dayot Upamecano - Min-jae Kim - Tarek Buchmann - Alphonso Davies - Raphaël Guerreiro - Frans Krätzig - Noussair Mazraoui - Bouna Sarr - Joshua Kimmich - Aleksandar Pavlovic - Leon Goretzka - Konrad Laimer - Jamal Musiala - Kingsley Coman - Leroy Sané - Serge Gnabry - Thomas Müller - Harry Kane - Mathys Tel - Eric Maxim Choupo-Moting','Gianluigi Donnarumma - Arnau Tenas - Keylor Navas - Sergio Rico - Alexandre Letellier - Marquinhos - Milan Skriniar - Presnel Kimpembe - Lucas Beraldo - Danilo Pereira - Nuno Mendes - Lucas Hernández - Layvin Kurzawa - Achraf Hakimi - Nordi Mukiele - Manuel Ugarte - Warren Zaïre-Emery - Vitinha - Fabián Ruiz - Carlos Soler - Cher Ndour - Ethan Mbappé - Kang-in Lee - Kylian Mbappé - Marco Asensio - Ousmane Dembélé - Bradley Barcola - Randal Kolo','Wojciech Szczesny - Mattia Perin - Carlo Pinsoglio - Bremer - Federico Gatti - Danilo - Daniele Rugani - Andrea Cambiaso - Alex Sandro - Mattia De Sciglio - Manuel Locatelli - Adrien Rabiot - Weston McKennie - Fabio Miretti - Nicolò Fagioli - Hans Nicolussi Caviglia - Paul Pogba - Timothy Weah - Filip Kostic - Federico Chiesa - Samuel Iling-Junior - Kenan Yıldız - Dusan Vlahovic - Moise Kean - Arkadiusz Milik','Mike Maignan - Marco Sportiello - Lapo Nava - Antonio Mirante - Fikayo Tomori - Malick Thiaw - Pierre Kalulu - Matteo Gabbia - Marco Pellegrino - Simon Kjaer - Mattia Caldara - Theo Hernández - Davide Calabria - Alessandro Florenzi - Ismaël Bennacer - Rade Krunic - Ruben Loftus-Cheek - Tijjani Reijnders - Yunus Musah - Tommaso Pobega - Filippo Terracciano - Yacine Adli - Rafael Leão - Chaka Traorè - Christian Pulisic - Samuel Chukwueze - Luka Romero - Noah Okafor - Luka Jović - Olivier Giroud']
stade=['Camp Nou','Santiago Bernabeu','Wanda Metropolitano ','Anfield','Emirates Stadium ' ,' Ettihad Stadium' ,'Alianz Arena ',' Parc des Princes','Alianz Stadium' , 'San Siro']
entraineur=['Xavi' , 'Ancelloti' , 'Simeone' , 'Klup' , 'Arteta ' , ' Pep ' , 'Tuchel', ' Luis Enrique ' , ' Allegri ' ,' Pioli']
pd.DataFrame({'Effectif':effectif , 'Stade':stade , 'Entraineur':entraineur} , index=Nom)