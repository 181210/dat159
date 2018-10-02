package java.no;

public class Utility {

    int keyAlfa = 5;
    int keyBeta = 7;

    // implement your Affine encryption/decryption function here

    /**
     *
     * @param input
     * @return byte Array
     */
    public byte[] affineEncryption(byte[] input){

        byte[] output = new byte[input.length];

        int[] tmp = new int[input.length];

        for(int i = 0; i < input.length; i++){
            tmp[i] = input[i] - 65;
        }

        int[] shuffled =  shuffle(tmp);

        for(int i = 0; i < tmp.length; i++){
            output[i] = (byte) shuffled[i];
        }

        return output;
    }

    /**
     *
     * @param input
     * @return
     */
    public byte[] affineDecryption(byte[] input){

        byte[] output = new byte[input.length];





        return output;
    }


    // implement your Hill enryption/decryption function here

    /**
     *
     * @param input
     * @return
     */
    public int[] shuffle(int[] input){
        int[] output = new int[input.length];

        for(int i = 0; i < input.length; i++){
            int tmp = input[i];
            tmp = calc(tmp);
            output[i] = tmp;
        }

        return output;
    }

    /**
     *
     * @param i
     * @return int
     */
    public int calc(int i){
        return (i * keyAlfa + keyBeta) % 26;
    }

    public String byteArrayToString(byte[] cryptedMsg){

        String s = "";

        char[] newMessage = new char[cryptedMsg.length];

        for(int i = 0; i < cryptedMsg.length; i++){

            newMessage[i] = (char)(cryptedMsg[i] + 65);
            s = s + newMessage[i];
        }

        return s;
    }

}
