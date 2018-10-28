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

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        map.forEach((key, value) -> sb.append("\nInput:  ").append(key.toString()).append("\n         --> Output: ").append(value.toString()));
        return sb.toString();
    }

    /**
     * Add output from Coinbase
     * @param ctx
     */
    public void addOutputFrom(CoinbaseTx ctx) {
        map.put(new Input(ctx.getTxHash(), 0), ctx.getOutput());
    }

    /**
     * Add and remove output from UTXO map
     * @param tx
     */
    public void addAndRemoveOutputsFrom(Transaction tx) {
        tx.getOutputs().forEach(output -> map.put(new Input(tx.getTxHash(), tx.getOutputs().indexOf(output)), output));
        tx.getInputs().forEach(input -> map.remove(input));
    }

    public Map<Input, Output> getMap() {
        return map;
    }

    /**
     * Validates sum Input -> Output
     * @param tx
     * @return
     */
    public boolean validateSumInputAndOutput(Transaction tx) {
        long sumInputs, sumOutputs;
        sumInputs = tx.getInputs().stream().mapToLong(in -> map.get(in).getValue()).sum();
        sumOutputs = tx.getOutputs().stream().mapToLong(in -> in.getValue()).sum();
        return sumInputs == sumOutputs;
    }

    /**
     * Validates owner of Inputs to Transaction
     * @param tx
     * @return
     */
    public boolean verifyUnspentTxOwner(Transaction tx) {
        return tx.getInputs().stream().anyMatch(input -> map.get(input).getAddress().equals(HashUtil.addressFromPublicKey(tx.getSenderPublicKey())));
    }
}