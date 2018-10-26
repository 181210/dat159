package no.hvl.dat159;



import kotlin.jvm.internal.markers.KMutableMap;

import java.security.KeyPair;
import java.security.KeyStore;
import java.security.PublicKey;
import java.util.*;
import java.util.stream.Collectors;
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


    public Transaction createTransaction(long value, String address) throws Exception {

        //TODO - This is a big one

        // 1. Collect all UTXO for this wallet and calculate balance
        // 2. Check if there are sufficient funds --- Exception?

        try{
            if (getBalance() >= value){
                System.out.println("Sufficient funds");
                // 3. Choose a number of UTXO to be spent --- Strategy?


                // 4. Calculate change
                // 5. Create an "empty" transaction
                Transaction transaction = new Transaction(getPublicKey());
                // 6. Add chosen inputs
                // 7. Add 1 or 2 outputs, depending on change
                // 8. Sign the transaction
                // 9. Calculate the hash for the transaction
                // 10. return
                return transaction;
                    }




        } catch (Exception e) {
            System.out.println("Insufficient funds in wallet. The transaction is terminated " + "e");
        }

        // PS! We have not updated the UTXO yet. That is normally done
        // when appending the block to the blockchain, and not here!
        // Do that manually from the Application-main.
        return null;
    }

    public String getWalletAddress() {
        return HashUtil.addressFromPublicKey(getPublicKey());
    }

    public PublicKey getPublicKey() {
        keyPair.getPublic();
        return null;
    }

    public long getBalance() {
        return calculateBalance(collectMyUtxo().values());
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

        return outputs.stream().filter(x ->x.getValue() > 0).collect(Collectors.summingLong(x -> x.getValue()));
    }

    private Map<Input,Output> collectMyUtxo() {

        Map<Input,Output> collect = utxoMap.entrySet().stream()
                .filter(map -> map.getValue().getOutputAddress().matches(getWalletAddress()))
                .collect(Collectors.toMap(Map.Entry::getKey, Map.Entry::getValue));
        return collect;
    }
//
     private Map<Input, Output> utxoToSpend(long value){

         Map<Input, Output> unsortMap = new HashMap<>();

         unsortMap = collectMyUtxo();

         //Arrange the map ascending by value
         Map<Input, Output> result = unsortMap.entrySet().stream()
                 .sorted(x -> x.getValue().compareTo(x.getValue()))
//                 .sorted(Map.Entry.<Input, Output>comparingByValue())
                 .collect(Collectors.toMap(Map.Entry::getKey, Map.Entry::getValue,
                         (oldValue, newValue) -> oldValue, LinkedHashMap::new));

         //TODO Output must be defined with getValue for comparison.

//




//

        //Add getValue() until the sum is >= value.
        //Add all instances to the map


        return result;
    }

    private long calcChange(long value, long sum){
        return value - sum;
    }

}
