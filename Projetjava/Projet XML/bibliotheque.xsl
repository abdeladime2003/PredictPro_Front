<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:xs="http://www.w3.org/2001/XMLSchema"
    exclude-result-prefixes="xs"
    version="1.0">

    <!-- Définir les couleurs pour chaque catégorie -->
    <xsl:variable name="couleurs">
        <couleur nom="Fiction Generale" code="#ff0000"/>
        <couleur nom="Aventure" code="#00ff00"/>
        <couleur nom="Drame" code="#0000ff"/>
        <couleur nom="Science-Fiction" code="#ffff00"/>
        <couleur nom="Romance" code="#ff00ff"/>
    </xsl:variable>

    <!-- Template pour la racine -->
    <xsl:template match="/">
        <html>
            <head>
                <title>Liste des documents par catégorie et table des auteurs</title>
                <style>
                    table {
                        border-collapse: collapse;
                        width: 100%;
                    }
                    th, td {
                        border: 1px solid black;
                        padding: 8px;
                        text-align: left;
                    }
                    th {
                        background-color: #f2f2f2;
                    }
                    .francais {
                        color: blue;
                    }
                    .red {
                        color: red;
                    }
                </style>
            </head>
            <body>
                <h2>Liste des documents par catégorie</h2>
                <table>
                    <xsl:apply-templates select="Bibliotheque/Categories/Categorie"/>
                </table>
                <h2>Table des auteurs</h2>
                <table>
                    <tr>
                        <th>Nom</th>
                        <th>Date de naissance</th>
                        <th>Nationalité</th>
                    </tr>
                    <xsl:apply-templates select="Bibliotheque/Auteurs/Auteur"/>
                </table>
                <h2>Liste des emprunts</h2>
                <table>
                    <tr>
                        <th>Emprunteur</th>
                        <th>Document</th>
                        <th>Date d'emprunt</th>
                        <th>Date de retour</th>
                    </tr>
                    <xsl:apply-templates select="Bibliotheque/Emprunts/Emprunt"/>
                </table>
            </body>
        </html>
    </xsl:template>

    <!-- Template pour chaque catégorie -->
    <xsl:template match="Categorie">
        <xsl:variable name="cat_nom" select="Nom"/>
        <xsl:variable name="cat_code" select="$couleurs/couleur[@nom=$cat_nom]/@code"/>
        <xsl:variable name="documents" select="//Documents/Document[Categorie=$cat_nom]"/>
        <tr>
            <th colspan="2" style="background-color:{$cat_code};">Catégorie: <xsl:value-of select="$cat_nom"/></th>
        </tr>
        <xsl:apply-templates select="$documents"/>
    </xsl:template>

    <!-- Template pour chaque document -->
    <xsl:template match="Document">
        <tr>
            <td><xsl:value-of select="Titre"/></td>
            <td><xsl:value-of select="Auteur"/></td>
        </tr>
    </xsl:template>

    <!-- Template pour chaque auteur -->
    <xsl:template match="Auteur">
        <xsl:variable name="nom" select="Nom"/>
        <xsl:variable name="dateNaissance" select="DateNaissance"/>
        <xsl:variable name="nationalite" select="Nationalite"/>
        <tr>
            <td>
                <xsl:if test="$nationalite = 'Francaise'">
                    <span class="francais"><xsl:value-of select="$nom"/></span>
                </xsl:if>
                <xsl:if test="$nationalite != 'Francaise'">
                    <xsl:value-of select="$nom"/>
                </xsl:if>
            </td>
            <td><xsl:value-of select="$dateNaissance"/></td>
            <td><xsl:value-of select="$nationalite"/></td>
        </tr>
    </xsl:template>

    <!-- Template pour chaque emprunt -->
    <xsl:template match="Emprunt">
        <xsl:variable name="dateRetour" select="DateRetour"/>
        <tr>
            <td><xsl:value-of select="Emprunteur"/></td>
            <td><xsl:value-of select="Document"/></td>
            <td><xsl:value-of select="DateEmprunt"/></td>
            <xsl:choose>
                <xsl:when test="$dateRetour &lt; current-date()">
                    <td class="red"><xsl:value-of select="$dateRetour"/></td>
                </xsl:when>
                <xsl:otherwise>
                    <td><xsl:value-of select="$dateRetour"/></td>
                </xsl:otherwise>
            </xsl:choose>
        </tr>
    </xsl:template>

</xsl:stylesheet>
