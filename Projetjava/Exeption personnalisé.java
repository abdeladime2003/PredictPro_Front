// Exception pour les informations manquantes
public class InformationManquanteException extends Exception {
    public InformationManquanteException(String message) {
        super(message);
    }
}

// Exception pour le joueur non trouvé dans l'équipe précédente
public class JoueurNonTrouveException extends Exception {
    public JoueurNonTrouveException(String message) {
        super(message);
    }
}

// Exception pour le dépassement du budget de la nouvelle équipe
public class BudgetInsuffisantException extends Exception {
    public BudgetInsuffisantException(String message) {
        super(message);
    }
}
