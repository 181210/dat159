package no.hvl.refactoring;

public class Movie {

    public static final int CHILDRENS = 2;
    public static final int REGULAR = 0;
    public static final int NEW_RELEASE = 1;

    /**
     * Made _title var final
     */
    private final String _title;
    private int _priceCode;

    public Movie(String title, int priceCode) {
        _title = title;
        _priceCode = priceCode;
    }

    public int getPriceCode() {
        return _priceCode;
    }

    public void set_priceCode(int priceCode){
        this._priceCode = priceCode;
    }

    public String getTitle() {
        return _title;
    }
}
