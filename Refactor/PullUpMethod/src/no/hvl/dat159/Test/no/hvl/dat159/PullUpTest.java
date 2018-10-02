package no.hvl.dat159;

import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;

public class PullUpTest {
	
    private final int X = 1;
    private no.hvl.dat159.GrandParentClass gprnt;
    private no.hvl.dat159.BrotherClass br;
    private ParentClass sis;

    @Before
    public void setUp() throws Exception {
        gprnt = new no.hvl.dat159.GrandParentClass();
        br = new no.hvl.dat159.BrotherClass();
        sis = new no.hvl.dat159.SisterClass();
    }

    @Test
    public void calcGrandParent() {
        assertEquals(2, gprnt.calc(X));
    }

    @Test
    public void calcBrother() {
        assertEquals(2, br.calc(X));
    }

    @Test
    public void calcSister() {
        assertEquals(4, sis.calc(X));
    }
}