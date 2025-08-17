# Welcome to VS Code-like Editor
def hello_world():
    """
    A simple hello world function
    """
    message = "Hello, World!"
    print(message)
    return message

def calculate_sum(a, b):
    """
    Calculate sum of two numbers
    """
    return a + b

if __name__ == "__main__":
    hello_world()
    result = calculate_sum(5, 3)
    print(f"Sum: {result}")
