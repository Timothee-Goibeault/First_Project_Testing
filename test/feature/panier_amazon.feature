Feature: Gestion du panier

    Scenario: ajouter un article au panier depuis la page produit
       Given  un client avec 0 article dans son panier recherchant le premier article dans la catégorie Bagage des Meilleures ventes
        When   il clique sur le bouton Ajouter au panier
        Then   le nombre d'article dans le panier est égale à 1
 
    Scenario: Mettre un article du panier de côté
       Given  un client avec 1 article dans son panier
       When   il clique sur le bouton Mon panier
       And    qu'il clique sur le bouton Mettre de côté
       Then   le nombre d'article dans le panier est égale à 0

    Scenario: Enlever un article du panier
        Given  un client avec 1 article dans son panier
        When   il clique sur le bouton Mon panier
        And    qu'il clique sur le bouton Supprimer
        Then   le nombre d'article dans le panier est égale à 0
    
    Scenario: Mettre un article de côté dans le panier
        Given  un client avec 1 article de côté et 0 article dans son panier
        When   il clique sur le bouton Mon panier
        And    qu'il clique sur le bouton Déplacer dans le panier
        Then   le nombre d'article dans le panier est égale à 1