package java.no;

public interface IParent {

    public static final int PORT = 9090;

    public  byte[] encryptMessage(byte[] plaintext);

    public byte[] decryptMessage(byte[] ciphertext);

}
