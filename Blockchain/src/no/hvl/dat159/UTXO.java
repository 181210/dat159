package no.hvl.dat159;

import java.util.HashMap;
import java.util.Map;


public class UTXO {

    //Why is this a Map and not a Set?
    //  The values in this map are the UTXOs (unspent Outputs)
    //  When removing UTXOs, we need to identify which to remove.
    //  Since the Inputs are references to UTXOs, we can use those
    //  as keys.
    private Map<Input, Output> map = new HashMap<>();

    public void printUTXO() {
        map.entrySet().forEach(System.out::println);
    }

    public void addOutputFrom(CoinbaseTx ctx) {

        if (map.isEmpty()) {

            map.put(new Input(ctx.getTxHash(), 0), ctx.getOutput());
        } else {
            //map.put()

            //TODO find the reference to previous output
        }
    }

        //TODO Add check if Map is empty --> prevOut is 0, else prevOut ref output

    public void addAndRemoveOutputsFrom(Transaction tx) {
        //TODO
    }

    public Map<Input, Output> getMap() {
        return map;
    }
}