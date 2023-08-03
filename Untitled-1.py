def square_number(x):
    # Calculate the square of a number
    result = x ** 2
    return result

def factorial(n):
    # Calculate the factorial of a number
    if n == 0 or n == 1:
        return 1
    else:
        result = 1
        for i in range(1, n + 1):
            result *= i
        return result

# Test the methods
num = 5
print(f"The square of {num} is: {square_number(num)}")

num = 6
print(f"The factorial of {num} is: {factorial(num)}")
