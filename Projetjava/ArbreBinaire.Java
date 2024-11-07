class ArbreBinaire {
    Object Valeur;
    ArbreBinaire ArborescenceG;
    ArbreBinaire ArborescenceD;

    public ArbreBinaire(Object Valeur, ArbreBinaire D, ArbreBinaire G){
        this.Valeur=Valeur;
        this.ArborescenceD=D;
        this.ArborescenceG=G;

    }
    public Object getValeur(){
        return Valeur;
    }
    public ArbreBinaire getArborescenceDroite(){
        return ArborescenceD;
    }
    public  ArbreBinaire getArborescenceGauche(){
        return ArborescenceG;
    }
    public void setValeur(Object a){
        this.Valeur=a;
    }
    public void setArborescenceG(ArbreBinaire G){
        this.ArborescenceG=G;
    }
    public void setArborescenceD(ArbreBinaire D){
        this.ArborescenceD=D;
    }

    
    int getHauteur(ArbreBinaire A){

    }
}