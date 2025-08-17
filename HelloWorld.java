// Java Example
public class HelloWorld {
    private String message;
    
    public HelloWorld(String message) {
        this.message = message;
    }
    
    public void displayMessage() {
        System.out.println(this.message);
    }
    
    public static void main(String[] args) {
        HelloWorld hello = new HelloWorld("Hello from Java!");
        hello.displayMessage();
        
        // Simple calculation
        int sum = addNumbers(15, 25);
        System.out.println("Sum: " + sum);
    }
    
    public static int addNumbers(int a, int b) {
        return a + b;
    }
}
