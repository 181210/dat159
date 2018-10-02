package no.hvl.dat159;

public class SisterClass extends ParentClass{
	
	public SisterClass() {
		
	}
	
	/**
	 * Method for PullUp --> leads to test failure
	 */
	@Override
	public int calc(int a) {
		return super.calc(a) + 2;
	}
}
