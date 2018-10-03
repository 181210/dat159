package no.hvl.dat159;

public class Utility {

    private int keyAlfa = 5;
    private int keyBeta = 7;
    private int maxRange = 26;


    // implement your Affine encryption/decryption function here

    /**
     * Method to apply affine encryption on a Byte Array
     * @param input
     * @return byte Array
     */
    public byte[] affineEncryption(byte[] input){

        byte[] output = new byte[input.length];

        int[] tmp = new int[input.length];

        for(int i = 0; i < input.length; i++){
            tmp[i] = input[i] - 65;
        }

        int[] shuffled =  shuffleAffEncrypt(tmp);

        for(int i = 0; i < input.length; i++){
            output[i] = (byte) shuffled[i];
        }

        return output;
    }

    /**
     * Method to apply affine decryption on a Byte Array
     * @param input byte[]
     * @return byte[]
     */
    public byte[] affineDecryption(byte[] input){

        byte[] output = new byte[input.length];

        int[] tmp = new int[input.length];

        int modInv = modInverse(keyAlfa,maxRange);

        for (int i = 0; i < input.length; i++){
            tmp[i] = modInv * (input[i] - keyBeta);
        }

        int[] shuffled = shuffleAffDecrypt(tmp);

        for(int i = 0; i < tmp.length; i++) {
            output[i] = (byte) shuffled[i];

        }

        return output;
    }


    // implement your Hill enryption/decryption function here

    public byte[] hillEncryption(byte[] input){

        byte[] output = new byte[input.length];


        return output;
    }

    public byte[] hillDecryption(byte[] input) {

        byte[] output = new byte[input.length];


        return output;


    }


    /**
     * Help Method for AffineDecrypt
     * Checks if decrypted value is in range
     * Calibrates the decrypted value to fit Alfabet
     *
     * @param input
     * @return int []
     */
    public int[] shuffleAffDecrypt(int[] input){
        //Control if the sum is above or below 0

        //Control if the number is within range of 0 - 25

        //Apply method for adding or subtracting 26
        int [] output = new int[input.length];

        for(int i = 0; i < input.length; i++){
            if(input[i] >= 0 && input[i] <= maxRange){
                output[i] = input[i];
            } else if(input[i] < 0){
                while(input[i] < 0){
                    input[i] = input[i] + maxRange;
                }
                output[i] = input[i];
            } else {
                while (input[i] > maxRange){
                    input[i] = input[i] - maxRange;
                }
                output[i] = input[i];
            }
        }

        return output;
    }

    /**
     * Help Method for AffineEncrypt
     * Uses method Calc
     * @param input
     * @return int[]
     */
    public int[] shuffleAffEncrypt(int[] input){
        int[] output = new int[input.length];

        for(int i = 0; i < input.length; i++){
            int tmp = input[i];
            tmp = calcAffineEncrypt(tmp);
            output[i] = tmp;
        }

        return output;
    }

    /**
     * Help Method for AffineEncrypt
     * Uses keys to apply mod sum
     * @param i int
     * @return int
     */
    public int calcAffineEncrypt(int i){
        return (i * keyAlfa + keyBeta) % 26;
    }

    /**
     * Help Method for Translating a Byte Array to String
     * @param cryptedMsg byte[]
     * @return String
     */
    public String byteArrayToString(byte[] cryptedMsg){

        String s = "";

        char[] newMessage = new char[cryptedMsg.length];

        for(int i = 0; i < cryptedMsg.length; i++){

            newMessage[i] = (char)(cryptedMsg[i] + 65);
            s = s + newMessage[i];
        }

        return s;
    }

    /**
     * Help Method for AffineDecrypt
     * Calculates the Mod-Inverse for keys
     * @param a int
     * @param m int
     * @return int
     */
    public int modInverse(int a, int m)
    {
        a = a % m;
        for (int x = 1; x < m; x++)
            if ((a * x) % m == 1)
                return x;
        return 1;
    }

}
