package no.hvl.dat159;

import java.security.KeyPair;
import java.security.PublicKey;
import java.util.Collection;
import java.util.Map;

import java.util.*;
import java.util.stream.Stream;

public class Wallet {

    private String id;
    private KeyPair keyPair;

    //A refererence to the "global" complete utxo-set
    private Map<Input, Output> utxoMap;

    public Wallet(String id, UTXO utxo) {
        this.id = id;
        utxoMap = utxo.getMap();
        keyPair = DSAUtil.generateRandomDSAKeyPair();
    }

    public String getWalletAddress() {
        return HashUtil.addressFromPublicKey(getPublicKey());
    }

    public PublicKey getPublicKey() {
        keyPair.getPublic();
        return null;
    }

    public Transaction createTransaction(long value, String address) throws Exception {

        //TODO - This is a big one

        // 1. Collect all UTXO for this wallet and calculate balance
        // 2. Check if there are sufficient funds --- Exception?
        // 3. Choose a number of UTXO to be spent --- Strategy?
        // 4. Calculate change
        // 5. Create an "empty" transaction
        // 6. Add chosen inputs
        // 7. Add 1 or 2 outputs, depending on change
        // 8. Sign the transaction
        // 9. Calculate the hash for the transaction
        // 10. return
        return null;

        // PS! We have not updated the UTXO yet. That is normally done
        // when appending the block to the blockchain, and not here!
        // Do that manually from the Application-main.
    }

    public long getBalance() {
        //TODO
        // Get collectMyUtxo first --> Match with address after
        return 0;
    }

    public String getId() {
        return id;
    }

    public KeyPair getKeyPair() {
        return keyPair;
    }

    public Map<Input, Output> getUtxoMap() {
        return utxoMap;
    }

    @Override
    public String toString() {
        return "Wallet{" +
                "id='" + id + '\'' +
                '}';
    }

    private long calculateBalance(Collection<Output> outputs) {
        //TODO
        return 0;
    }

    private Map<Input, Output> collectMyUtxo() {

        utxoMap

        //utxoMap = Stream.
        //getUtxoMap().values().iterator().next().getOutputAddress().equals(getWalletAddress()); //TODO add user and traverse global UTXO
        //TODO
        return null;
    }

}
