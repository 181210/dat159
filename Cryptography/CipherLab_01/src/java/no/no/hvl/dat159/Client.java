package no.hvl.dat159;

import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.net.Socket;
import java.net.UnknownHostException;
import java.io.*;


public class Client implements IParent {

    static Utility ut = new Utility();

    public static void main(String[] args){
        Client client = new Client();
        client.sendAndReceice();


        System.out.println("Write in the text that you want crypted: ");
        InputStreamReader keyboard = new InputStreamReader(System.in);
        BufferedReader inputMsg = new BufferedReader(keyboard);

        String message = null;
        try {
            message = inputMsg.readLine();
        } catch (IOException e) {
            e.printStackTrace();
        }

        ut.byteArrayToString(encryptMessage(message.toUpperCase().getBytes()));

    }

    public void sendAndReceice() {
        Socket client;
        ObjectOutputStream oos;
        ObjectInputStream ois;

        try {
            client = new Socket("localhost",PORT);

            System.out.println("Connected to Server on "+ client.getInetAddress());

            oos = new ObjectOutputStream(client.getOutputStream());
            ois = new ObjectInputStream(client.getInputStream());

            // send a plaintext message to server
            String plaintxt = "Hello from client";

            // send message to server
            oos.writeObject(plaintxt.getBytes());
            oos.flush();

            // receive response from server
            byte[] response = (byte[]) ois.readObject();

            System.out.println("Response from server: "+ new String(response, "ASCII"));

            // close cliet socket
            client.close();
            ois.close();
            oos.close();

        } catch (UnknownHostException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }

    }


    public static byte[] encryptMessage(byte[] inputArray) {


        byte[] cryptedMsg = ut.affineEncryption(inputArray);

        System.out.println("Kryptert tekst: " + ut.byteArrayToString(cryptedMsg));

        return cryptedMsg;
    }


    public static byte[] decryptMessage(byte[] ciphertext) {

        return null;
    }
}
