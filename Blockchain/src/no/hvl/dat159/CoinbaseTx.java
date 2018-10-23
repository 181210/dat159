package no.hvl.dat159;

public class CoinbaseTx {

    //Simplified compared to Bitcoin (nothing significant missing)
    private String coinbase; // "The Times 03/Jan/2009 Chancellor
    //  on brink of second bailout for banks"
    // coinbase = message on transaction
    private Output output;
    private String txHash;

    public CoinbaseTx(String coinbase, int value, String address) {
        this.txHash = HashUtil.base64Encode(HashUtil.sha256Hash(coinbase));
        this.output = new Output(value, address);
        //Remember to calculate txHash
    }

    @Override
    public String toString() {
        return "CoinbaseTx{" +
                "coinbase='" + coinbase + '\'' +
                '}';
    }


//TODO Getters?

    public String getCoinbase() {
        return coinbase;
    }

    public Output getOutput() {
        return output;
    }

    public String getTxHash() {
        return txHash;
    }
}