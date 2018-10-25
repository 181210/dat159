package no.hvl.dat159;

public class Output implements Comparable<Output> {

    //Simplified compared to Bitcoin - The address should be a script
    private long value;
    private String address;

    public Output(long value, String address) {
        this.value = value;
        this.address = HashUtil.base64Encode(HashUtil.sha256Hash(address));
    }

    public long getValue() {
        return value;
    }

    public void setValue(long value) {
        this.value = value;
    }

    public String getOutputAddress() {
        return address;
    }

    public void setOutputAddress(String address) {
        this.address = address;
    }

    @Override
    public String toString() {
        return "Output{" +
                "value=" + value +
                ", address='" + address + '\'' +
                '}';
    }
}
