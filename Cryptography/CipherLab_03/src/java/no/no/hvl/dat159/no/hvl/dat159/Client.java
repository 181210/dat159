package no.hvl.dat159;

import javax.crypto.BadPaddingException;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.net.Socket;
import java.net.UnknownHostException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;

import static no.hvl.dat159.Utility.asciiToHex;


public class Client {



    public static void main(String[] args){
        Client client = new Client();
        client.sendAndReceice();
    }

    public void sendAndReceice() {
        Socket client;
        ObjectOutputStream oos;
        ObjectInputStream ois;
        DES des;
        try {
            client = new Socket("localhost",9090);

            System.out.println("Connected to Server on "+ client.getInetAddress());

            oos = new ObjectOutputStream(client.getOutputStream());
            ois = new ObjectInputStream(client.getInputStream());
            des = new DES();
            // send a plaintext message to server
            String plaintxt = "Hello from client";

            // send message to server
            oos.writeObject(des.encryptDes(asciiToHex(plaintxt)));
            oos.flush();

            // receive response from server
            byte[] response = (byte[]) ois.readObject();
            System.out.println("Response from server: "+ new String(response, "ASCII"));

            // close client socket
            client.close();
            ois.close();
            oos.close();

        } catch (UnknownHostException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        } catch (InvalidKeyException e) {
            e.printStackTrace();
        } catch (NoSuchPaddingException e) {
            e.printStackTrace();
        } catch (BadPaddingException e) {
            e.printStackTrace();
        } catch (IllegalBlockSizeException e) {
            e.printStackTrace();
        }

    }
}
