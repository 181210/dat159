package no.hvl.refactoring;

import java.util.ArrayList;
import java.util.List;

public class Customer {
    private final String name;
    private final List<Rental> rentals = new ArrayList<>() {

    };

    public Customer(String name) {
        this.name = name;
    }

    public void addRental(Rental rental) {
        rentals.add(rental);
    }

    private String getName() {
        return name;
    }

    public String statement() {
        double totalAmount = 0;
        int frequentRenterPoints = 0;
        StringBuilder result = new StringBuilder("Rental Record for " + getName() + "\n");

        for (Rental rental : rentals) {
            double thisAmount = 0;
            thisAmount = getThisAmount(rental, thisAmount);

            frequentRenterPoints++;

            frequentRenterPoints = getFrequentRenterPoints(frequentRenterPoints, rental);

            totalAmount = getTotalAmount(totalAmount, result, rental, thisAmount);

        }

        return getResult(totalAmount, frequentRenterPoints, result);
    }

    /**
     * Extracted Method from Statement
     * @param totalAmount
     * @param frequentRenterPoints
     * @param result
     * @return String result
     */
    private String getResult(double totalAmount, int frequentRenterPoints, StringBuilder result) {
        result.append("You owed ").append(String.valueOf(totalAmount)).append("\n");
        result.append("You earned ").append(String.valueOf(frequentRenterPoints)).append(" frequent renter points\n");

        return result.toString();
    }

    /**
     * Extracted Method from Statement
     * @param totalAmount
     * @param result
     * @param rental
     * @param thisAmount
     * @return double totalAmount
     */
    private double getTotalAmount(double totalAmount, StringBuilder result, Rental rental, double thisAmount) {
        result.append("\t").append(rental.getMovie().getTitle()).append("\t").append(String.valueOf(thisAmount)).append("\n");
        totalAmount += thisAmount;
        return totalAmount;
    }

    /**
     * Extracted Method from Statement
     * @param frequentRenterPoints
     * @param rental
     * @return int frequentRenterPoints
     */
    private int getFrequentRenterPoints(int frequentRenterPoints, Rental rental) {
        if (rental.getMovie().getPriceCode() == Movie.NEW_RELEASE
                && rental.getDaysRented() > 1)
            frequentRenterPoints++;
        return frequentRenterPoints;
    }

    /**
     * Extracted Method from Statement
     * @param rental
     * @param thisAmount
     * @return double thisAmount
     */
    private double getThisAmount(Rental rental, double thisAmount) {
        // determines the amount for each line
        switch (rental.getMovie().getPriceCode()) {
            case Movie.REGULAR:
                thisAmount = getRegularAmount(rental, thisAmount);
                break;
            case Movie.NEW_RELEASE:
                thisAmount += rental.getDaysRented() * 3;
                break;
            case Movie.CHILDRENS:
                thisAmount = getChildrenAmount(rental, thisAmount);
                break;
        }
        return thisAmount;
    }

    /**
     * Extracted from getThisAmount
     * @param rental
     * @param thisAmount
     * @return double thisAmount
     */
    private double getRegularAmount(Rental rental, double thisAmount) {
        thisAmount += 2;
        if (rental.getDaysRented() > 2)
            thisAmount += (rental.getDaysRented() - 2) * 1.5;
        return thisAmount;
    }

    /**
     * Extracted from getThisAmount
     * @param rental
     * @param thisAmount
     * @return double thisAmount
     */
    private double getChildrenAmount(Rental rental, double thisAmount) {
        thisAmount += 1.5;
        if (rental.getDaysRented() > 3)
            thisAmount += (rental.getDaysRented() - 3) * 1.5;
        return thisAmount;
    }
}
