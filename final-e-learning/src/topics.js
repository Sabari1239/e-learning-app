const allTopics = {
  
 
    "Python Introduction": {
      content: `
        Python is a high-level, interpreted programming language created by Guido van Rossum and released in 1991. It is known for its simplicity, readability, and wide applicability in fields like web development, data science, automation, and more.
      `,
      syntax: `
        # Print "Hello, World!" to the console
        print("Hello, World!")
      `,
      questions: [
        '1. What are some of the key features of Python?',
        '2. Write a Python program that prints "Hello, Python!" to the console.'
      ]
    },
    "Python Data Types": {
      content: `
        Python supports several built-in data types:
        - str: Textual data
        - int, float, complex: Numeric types
        - list, tuple, range: Sequence types
        - dict: Mapping type
        - set, frozenset: Set types
        - bool: Boolean type (True/False)
      `,
      syntax: `
        # Examples of different data types in Python
        text = "Hello"
        number = 42
        decimal = 3.14
        is_true = True
        items = [1, 2, 3]
      `,
      questions: [
        '1. Write a Python program to demonstrate each data type.',
        '2. Explain the difference between a list and a tuple in Python.'
      ]
    },
    "Python Control Structures": {
      content: `
        Python provides control structures for decision making and iteration:
        - if, if-else, elif: for branching
        - for, while: for looping
        - break, continue, pass: for jump control
      `,
      syntax: `
        # Example of if-else statement
        age = 18
        if age >= 18:
            print("You are an adult.")
        else:
            print("You are a minor.")
      `,
      questions: [
        '1. Write a Python program that prints numbers from 1 to 10 using a for loop.',
        '2. Explain the use of the "break" statement with an example in Python.'
      ]
    },
    "Python Functions": {
      content: `
        Functions in Python are reusable blocks of code that perform specific tasks. Functions can be defined using the def keyword and can take parameters and return values.
      `,
      syntax: `
        # Define a function
        def greet(name):
            return "Hello, " + name
    
        print(greet("Alice"))
      `,
      questions: [
        '1. Write a function that calculates the factorial of a number.',
        '2. Explain the concept of default parameters in Python functions.'
      ]
    },
    "Python Modules and Packages": {
      content: `
        A module in Python is a file containing Python code, such as functions and variables, which can be imported and used in other Python files. A package is a directory containing multiple modules, providing organized code.
      `,
      syntax: `
        # Importing a module
        import math
        print(math.sqrt(16))  # Output: 4.0
      `,
      questions: [
        '1. Write a Python program that uses the math module to find the square root of a number.',
        '2. Explain the difference between a module and a package in Python.'
      ]
    },
    "Python File Handling": {
      content: `
        File handling in Python enables reading from and writing to files. Common file operations include open, read, write, and close.
      `,
      syntax: `
        # Writing to a file
        with open("example.txt", "w") as file:
            file.write("Hello, File Handling!")
      `,
      questions: [
        '1. Write a Python program that opens a file and reads its contents.',
        '2. Explain the purpose of the "with" statement in file handling.'
      ]
    },
    "Python Exception Handling": {
      content: `
        Exception handling in Python allows programs to handle errors gracefully. Common exceptions include SyntaxError, TypeError, ValueError, IndexError, and KeyError.
      `,
      syntax: `
        # Example of exception handling
        try:
            x = 1 / 0
        except ZeroDivisionError:
            print("Cannot divide by zero!")
      `,
      questions: [
        '1. Write a program that handles a division by zero error.',
        '2. List and explain three common exceptions in Python.'
      ]
    },
    "Python Object-Oriented Programming": {
      content: `
        Python supports object-oriented programming (OOP) concepts like classes, objects, inheritance, encapsulation, and polymorphism.
      `,
      syntax: `
        # Define a class in Python
        class Animal:
            def __init__(self, name):
                self.name = name
    
            def speak(self):
                return f"{self.name} makes a sound"
    
        dog = Animal("Dog")
        print(dog.speak())
      `,
      questions: [
        '1. Write a class in Python that represents a Car with attributes make, model, and year.',
        '2. Explain the concept of inheritance with an example.'
      ]
    },
    "Python Web Development with Flask": {
      content: `
        Flask is a lightweight web framework in Python that allows for the quick development of web applications. Flask is often used for small projects and is easy to learn and set up.`,

      
      syntax: `
        # Flask application example
        from flask import Flask
        app = Flask(__name__)
    
        @app.route("/")
        def home():
            return "Hello, Flask!"
      `,
      questions: [
        '1. Set up a basic Flask application that displays "Hello, World!" on the home page.',
        '2. Explain what Flask is used for in web development.'
      ]
    },
    
      
      "C Introduction": {
        content: `
          C is a general-purpose programming language created by Dennis Ritchie in 1972. It is widely used for system programming and operating systems.
        `,
        syntax: `
          #include <stdio.h>
          int main() {
              printf("Hello, World!");
              return 0;
          }
        `,
        questions: [
          '1. Write a C program that prints "Hello, World!" to the console.',
          '2. Describe the role of C in operating system development.'
        ]
      },
      "C Data Types": {
        content: `
          C supports several data types:
          - int: Integer
          - float: Floating point
          - double: Double-precision floating point
          - char: Character
        `,
        syntax: `
          int age = 25;
          float price = 9.99;
          char grade = 'A';
        `,
        questions: [
          '1. Write a C program to declare variables of different data types and print their values.',
          '2. Explain the difference between int and float data types in C.'
        ]
      },
      "C Control Structures": {
        content: `
          Control structures in C include:
          - if, if-else: Branching statements
          - for, while, do-while: Looping statements
          - switch-case: Multi-way branching
        `,
        syntax: `
          int number = 10;
          if (number > 0) {
              printf("Positive number");
          } else {
              printf("Non-positive number");
          }
        `,
        questions: [
          '1. Write a C program to check if a number is positive, negative, or zero using if-else.',
          '2. Write a C program that prints numbers from 1 to 10 using a for loop.'
        ]
      },
      "C Functions": {
        content: `
          Functions in C are reusable blocks of code. Functions can be built-in (like printf) or user-defined.
        `,
        syntax: `
          int add(int a, int b) {
              return a + b;
          }
    
          int main() {
              int sum = add(3, 4);
              printf("Sum: %d", sum);
              return 0;
          }
        `,
        questions: [
          '1. Write a function in C to find the maximum of two numbers.',
          '2. Explain the purpose of a function prototype in C.'
        ]
      },
      "C Pointers": {
        content: `
          Pointers in C store the memory address of another variable. They are used for dynamic memory management, arrays, and functions.
        `,
        syntax: `
          int var = 20;
          int *ptr = &var;
          printf("Value of var: %d", *ptr);
        `,
        questions: [
          '1. Write a C program to demonstrate pointer arithmetic.',
          '2. Explain the significance of null pointers in C.'
        ]
      },
      "C Structures": {
        content: `
          Structures in C allow grouping of variables of different data types under a single name.
        `,
        syntax: `
          struct Student {
              char name[50];
              int age;
              float gpa;
          };
    
          int main() {
              struct Student student1 = {"Alice", 20, 3.8};
              printf("Name: %s, Age: %d, GPA: %.2f", student1.name, student1.age, student1.gpa);
              return 0;
          }
        `,
        questions: [
          '1. Write a C program to create a structure for an Employee and display the details.',
          '2. Explain the concept of nested structures in C with an example.'
        ]
      },
      "C File Handling": {
        content: `
          File handling in C allows you to read and write files using functions like fopen, fprintf, fscanf, and fclose.
        `,
        syntax: `
          FILE *file = fopen("test.txt", "w");
          fprintf(file, "Hello, World!");
          fclose(file);
        `,
        questions: [
          '1. Write a C program to read contents from a file and display it on the console.',
          '2. Explain the difference between text mode and binary mode in file handling.'
        ]
      },
      "C Dynamic Memory Allocation": {
        content: `
          Dynamic memory allocation in C allows you to allocate memory at runtime using functions like malloc, calloc, realloc, and free.
        `,
        syntax: `
          int *ptr = (int*)malloc(5 * sizeof(int));
          for (int i = 0; i < 5; i++) {
              ptr[i] = i;
          }
          free(ptr);
        `,
        questions: [
          '1. Write a C program to dynamically allocate memory for an array and initialize it.',
          '2. Explain the difference between malloc and calloc functions.'
        ]
      },
      "C Preprocessor Directives": {
        content: `
          Preprocessor directives in C are instructions given to the compiler. Common directives are #include, #define, #ifdef, etc.
        `,
        syntax: `
          #define PI 3.14159
          #include <stdio.h>
    
          int main() {
              printf("Value of PI: %f", PI);
              return 0;
          }
        `,
        questions: [
          '1. Write a C program using #define to declare a constant.',
          '2. Explain the use of conditional compilation with #ifdef.'
        ]
      },
      "C Basic Algorithms": {
        content: `
          Basic algorithms in C include sorting and searching. Examples are bubble sort, selection sort, linear search, and binary search.
        `,
        syntax: `
          void bubbleSort(int arr[], int n) {
              for (int i = 0; i < n-1; i++) {
                  for (int j = 0; j < n-i-1; j++) {
                      if (arr[j] > arr[j+1]) {
                          int temp = arr[j];
                          arr[j] = arr[j+1];
                          arr[j+1] = temp;
                      }
                  }
              }
          }
        `,
        questions: [
          '1. Write a C program to implement bubble sort on an array of integers.',
          '2. Explain the difference between linear search and binary search algorithms.'
        ]
      },
    
    "C++ Introduction": {
      content: `
        C++ is a general-purpose programming language created as an extension of C by Bjarne Stroustrup. It supports object-oriented, procedural, and generic programming, and is widely used for system programming, game development, and high-performance applications.
      `,
      syntax: `
        #include <iostream>
        using namespace std;
    
        int main() {
            cout << "Hello, World!" << endl;
            return 0;
        }
      `,
      questions: [
        '1. What are the main features of C++?',
        '2. Write a C++ program that prints "Hello, World!" to the console.'
      ]
    },
    "C++ Data Types": {
      content: `
        C++ supports several data types:
        - int: Integer numbers
        - float: Floating-point numbers
        - double: Double-precision floating-point numbers
        - char: Single characters
        - bool: Boolean values
      `,
      syntax: `
        int age = 25;
        float price = 9.99;
        char grade = 'A';
        bool isStudent = true;
      `,
      questions: [
        '1. Write a program to declare variables of different data types and print their values.',
        '2. Explain the difference between float and double data types in C++.'
      ]
    },
    "C++ Control Structures": {
      content: `
        Control structures in C++ allow you to dictate the flow of your program. Common control structures include:
        - if, if-else, and switch: For decision making
        - for, while, and do-while loops: For iteration
      `,
      syntax: `
        int number = 10;
        if (number > 0) {
            cout << "Positive number" << endl;
        } else {
            cout << "Non-positive number" << endl;
        }
      `,
      questions: [
        '1. Write a C++ program to check if a number is even or odd.',
        '2. Write a program that uses a for loop to print numbers from 1 to 10.'
      ]
    },
    "C++ Functions": {
      content: `
        Functions in C++ are reusable blocks of code that perform a specific task. Functions can take parameters and return values. C++ also supports function overloading, allowing multiple functions with the same name but different parameters.
      `,
      syntax: `
        int add(int a, int b) {
            return a + b;
        }
    
        int main() {
            int sum = add(3, 4);
            cout << "Sum: " << sum << endl;
            return 0;
        }
      `,
      questions: [
        '1. Write a function that calculates the factorial of a number.',
        '2. Explain function overloading with an example.'
      ]
    },
    "C++ Pointers": {
      content: `
        Pointers are variables that store the memory address of another variable. They are useful for dynamic memory management and can be used to work with arrays and functions.
      `,
      syntax: `
        int var = 20;
        int *ptr = &var;
        cout << "Value of var: " << *ptr << endl;
      `,
      questions: [
        '1. Write a C++ program to demonstrate pointer arithmetic.',
        '2. Explain the concept of nullptr in C++.'
      ]
    },
    "C++ Classes and Objects": {
      content: `
        C++ is an object-oriented language where classes are blueprints for objects. A class can have attributes (data) and methods (functions). Objects are instances of classes.
      `,
      syntax: `
        class Student {
        public:
            string name;
            int age;
        };
    
        int main() {
            Student student1;
            student1.name = "Alice";
            student1.age = 20;
            cout << "Name: " << student1.name << ", Age: " << student1.age << endl;
            return 0;
        }
      `,
      questions: [
        '1. Define a class called Car with attributes for make, model, and year.',
        '2. Explain the difference between public and private access specifiers in classes.'
      ]
    },
    "C++ Operator Overloading": {
      content: `
        Operator overloading allows you to redefine the behavior of operators for user-defined types. This feature enhances the usability of classes and structures by allowing custom behavior with standard operators.
      `,
      syntax: `
        class Complex {
        public:
            float real, imag;
    
            Complex operator + (const Complex &c) {
                Complex result;
                result.real = real + c.real;
                result.imag = imag + c.imag;
                return result;
            }
        };
      `,
      questions: [
        '1. Write a C++ program to overload the "+" operator for a custom class.',
        '2. What are the benefits of operator overloading?'
      ]
    },
    "C++ Inheritance": {
      content: `
        Inheritance in C++ allows a class to inherit attributes and methods from another class. The base class provides properties to derived classes, promoting code reusability.
      `,
      syntax: `
        class Animal {
        public:
            void speak() {
                cout << "Animal speaks" << endl;
            }
        };
    
        class Dog : public Animal {
        public:
            void bark() {
                cout << "Dog barks" << endl;
            }
        };
      `,
      questions: [
        '1. Define a base class Shape and derive classes Circle and Rectangle with area calculation methods.',
        '2. Explain the use of the "public", "protected", and "private" inheritance modes.'
      ]
    },
    "C++ Polymorphism": {
      content: `
        Polymorphism allows C++ functions and operators to work in different ways based on the context. It can be achieved through function overloading, operator overloading, and inheritance.
      `,
      syntax: `
        class Animal {
        public:
            virtual void sound() {
                cout << "Some sound" << endl;
            }
        };
    
        class Dog : public Animal {
        public:
            void sound() override {
                cout << "Bark" << endl;
            }
        };
      `,
      questions: [
        '1. Write a program demonstrating function overriding in C++.',
        '2. Explain the difference between compile-time and run-time polymorphism.'
      ]
    },
    "C++ File Handling": {
      content: `
        C++ provides file handling capabilities through libraries like <fstream>. You can create, read, write, and close files using classes such as ifstream, ofstream, and fstream.
      `,
      syntax: `
        #include <fstream>
        using namespace std;
    
        int main() {
            ofstream file("example.txt");
            file << "Hello, C++ File Handling!" << endl;
            file.close();
    
            ifstream readFile("example.txt");
            string line;
            while (getline(readFile, line)) {
                cout << line << endl;
            }
            readFile.close();
            return 0;
        }
      `,
      questions: [
        '1. Write a C++ program to write data to a file and then read it.',
        '2. Explain the difference between text mode and binary mode in file handling.'
      ]
    },
    
    "Java Introduction": {
      content: `
        Java is a high-level, object-oriented programming language developed by Sun Microsystems in 1995. It is platform-independent due to the Java Virtual Machine (JVM) and is widely used for building web, desktop, and mobile applications.
      `,
      syntax: `
        public class HelloWorld {
            public static void main(String[] args) {
                System.out.println("Hello, World!");
            }
        }
      `,
      questions: [
        '1. What are the key features of Java?',
        '2. Explain the concept of "Write Once, Run Anywhere" in Java.'
      ]
    },
    "Java Data Types": {
      content: `
        Java supports several data types, including:
        - int: Integer numbers
        - double: Double-precision floating-point numbers
        - char: Single characters
        - boolean: Boolean values (true/false)
      `,
      syntax: `
        int age = 25;
        double salary = 45000.50;
        char grade = 'A';
        boolean isEmployed = true;
      `,
      questions: [
        '1. Write a Java program that declares variables of different data types and prints their values.',
        '2. Explain the difference between primitive and reference data types in Java.'
      ]
    },
    "Java Control Structures": {
      content: `
        Control structures in Java manage the flow of the program, including:
        - Conditional statements: if, else if, else, switch
        - Looping statements: for, while, do-while
      `,
      syntax: `
        int number = 10;
        if (number > 0) {
            System.out.println("Positive");
        } else {
            System.out.println("Non-positive");
        }
        
        for (int i = 1; i <= 5; i++) {
            System.out.println("Iteration: " + i);
        }
      `,
      questions: [
        '1. Write a Java program that finds the largest of three numbers using if-else.',
        '2. Write a Java program to print the multiplication table of a number using a for loop.'
      ]
    },
    "Java Object-Oriented Programming": {
      content: `
        Java is an object-oriented programming language, which means it is based on the concepts of objects and classes.
        Key OOP principles include:
        - Encapsulation
        - Inheritance
        - Polymorphism
        - Abstraction
      `,
      syntax: `
        class Animal {
            String name;
            
            Animal(String name) {
                this.name = name;
            }
            
            void speak() {
                System.out.println(name + " makes a sound.");
            }
        }
        
        public class Main {
            public static void main(String[] args) {
                Animal dog = new Animal("Dog");
                dog.speak();
            }
        }
      `,
      questions: [
        '1. Define a class "Car" with attributes brand, model, and year, and a method to display details.',
        '2. Explain the concept of inheritance with an example in Java.'
      ]
    },
    "Java Exception Handling": {
      content: `
        Exception handling in Java allows programmers to manage runtime errors, ensuring normal flow of the application. Common exception handling keywords are try, catch, finally, throw, and throws.
      `,
      syntax: `
        public class ExceptionExample {
            public static void main(String[] args) {
                try {
                    int result = 10 / 0; // This will throw an exception
                } catch (ArithmeticException e) {
                    System.out.println("Cannot divide by zero!");
                } finally {
                    System.out.println("Execution completed.");
                }
            }
        }
      `,
      questions: [
        '1. Write a Java program that handles an ArrayIndexOutOfBoundsException.',
        '2. Explain the difference between checked and unchecked exceptions in Java.'
      ]
    },
    "Java Collections Framework": {
      content: `
        The Java Collections Framework provides classes and interfaces for storing and manipulating groups of data as a single unit. Common interfaces include List, Set, and Map.
      `,
      syntax: `
        import java.util.ArrayList;
    
        public class CollectionsExample {
            public static void main(String[] args) {
                ArrayList<String> list = new ArrayList<>();
                list.add("Apple");
                list.add("Banana");
                System.out.println(list);
            }
        }
      `,
      questions: [
        '1. Write a Java program that creates an ArrayList, adds elements, and iterates over them.',
        '2. Explain the differences between List, Set, and Map interfaces in Java.'
      ]
    },
    "Java File I/O": {
      content: `
        Java provides classes for reading from and writing to files. Common classes include FileReader, FileWriter, BufferedReader, and BufferedWriter.
      `,
      syntax: `
        import java.io.*;
    
        public class FileIOExample {
            public static void main(String[] args) {
                try {
                    FileWriter writer = new FileWriter("output.txt");
                    writer.write("Hello, File I/O!");
                    writer.close();
                    
                    BufferedReader reader = new BufferedReader(new FileReader("output.txt"));
                    System.out.println(reader.readLine());
                    reader.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
      `,
      questions: [
        '1. Write a Java program to read data from a file and print it to the console.',
        '2. Explain the purpose of BufferedReader and BufferedWriter in file operations.'
      ]
    },
    "Java GUI Programming": {
      content: `
        Java provides the Swing and AWT libraries for creating graphical user interfaces (GUIs). A JFrame is a basic window that can hold components like buttons, text fields, and labels.
      `,
      syntax: `
        import javax.swing.*;
    
        public class GUIExample {
            public static void main(String[] args) {
                JFrame frame = new JFrame("Hello World");
                JButton button = new JButton("Click Me");
                frame.add(button);
                frame.setSize(300, 200);
                frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
                frame.setVisible(true);
            }
        }
      `,
      questions: [
        '1. Write a Java program that creates a simple GUI with a button that displays a message when clicked.',
        '2. Explain the event handling mechanism in Java GUI programming.'
      ]
    },
    "Java Networking": {
      content: `
        Java provides networking capabilities through the java.net package, enabling the creation of client-server applications. Commonly used classes include Socket and ServerSocket.
      `,
      syntax: `
        import java.io.*;
        import java.net.*;
    
        public class Client {
            public static void main(String[] args) {
                try {
                    Socket socket = new Socket("localhost", 8080);
                    PrintWriter out = new PrintWriter(socket.getOutputStream(), true);
                    out.println("Hello Server!");
                    socket.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
      `,
      questions: [
        '1. Write a Java program to create a simple client-server application using sockets.',
        '2. Explain the differences between TCP and UDP protocols in Java networking.'
      ]
    },
    "Java Database Connectivity (JDBC)": {
      content: `
        Java Database Connectivity (JDBC) is an API for connecting and executing queries on databases from Java applications. It provides methods for querying and updating data in a database.
      `,
      syntax: `
        import java.sql.*;
    
        public class JDBCExample {
            public static void main(String[] args) {
                try {
                    Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/testdb", "user", "password");
                    Statement statement = connection.createStatement();
                    ResultSet resultSet = statement.executeQuery("SELECT * FROM users");
                    while (resultSet.next()) {
                        System.out.println("User: " + resultSet.getString("name"));
                    }
                    connection.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }
      `,
      questions: [
        '1. Write a Java program to connect to a MySQL database and retrieve data from a table.',
        '2. Explain the roles of Connection, Statement, and ResultSet in JDBC.'
      ]
    },
    
    "JavaScript Introduction": {
      content: `
        JavaScript is a high-level, interpreted programming language that is a core technology of the web. It enables interactive web pages and is essential for front-end development. JavaScript is event-driven, functional, and imperative.
      `,
      syntax: `
        // A simple JavaScript program
        console.log("Hello, World!");
      `,
      questions: [
        '1. What is the role of JavaScript in web development?',
        '2. Write a program that prints "Hello, JavaScript!" to the console.'
      ]
    },
    "JavaScript Variables and Data Types": {
      content: `
        JavaScript supports various data types, including:
        - Number: for integers and floating-point numbers
        - String: for sequences of characters
        - Boolean: for true/false values
        - Object: for structured data
        - Array: for lists of values
      `,
      syntax: `
        let age = 25;          // Number
        let name = "Alice";    // String
        let isStudent = true;  // Boolean
        let person = {         // Object
            firstName: "John",
            lastName: "Doe"
        };
      `,
      questions: [
        '1. Declare variables of each data type in JavaScript and log their values to the console.',
        '2. Write a program to check if a number is positive, negative, or zero.'
      ]
    },
    "JavaScript Control Structures": {
      content: `
        Control structures in JavaScript manage the flow of the program, including:
        - Conditional statements: if, else if, else, switch
        - Looping statements: for, while, do-while
      `,
      syntax: `
        let number = 10;
    
        if (number > 0) {
            console.log("Positive");
        } else {
            console.log("Non-positive");
        }
    
        for (let i = 1; i <= 5; i++) {
            console.log("Iteration: " + i);
        }
      `,
      questions: [
        '1. Write a JavaScript program that finds the largest of three numbers using if-else.',
        '2. Write a program to print the numbers from 1 to 10 using a for loop.'
      ]
    },
    "JavaScript Functions": {
      content: `
        Functions are reusable blocks of code in JavaScript that perform specific tasks. Functions can be defined using function declarations, expressions, or arrow functions.
      `,
      syntax: `
        // Function declaration
        function greet(name) {
            return "Hello, " + name;
        }
    
        // Arrow function
        const greetArrow = (name) => "Hello, " + name;
        
        console.log(greet("Alice")); // Output: Hello, Alice!
      `,
      questions: [
        '1. Write a function that takes two numbers as parameters and returns their sum.',
        '2. Explain the difference between function declarations and arrow functions in JavaScript.'
      ]
    },
    "JavaScript DOM Manipulation": {
      content: `
        The Document Object Model (DOM) represents the HTML structure of a webpage. JavaScript can be used to manipulate the DOM, allowing dynamic changes to the page content, structure, and style.
      `,
      syntax: `
        // Changing the content of an element
        document.getElementById("myElement").innerHTML = "New Content!";
        
        // Creating a new element
        const newElement = document.createElement("div");
        newElement.innerHTML = "Hello, World!";
        document.body.appendChild(newElement);
      `,
      questions: [
        '1. Write a JavaScript program to change the text of an HTML element with a specific id.',
        '2. Explain how to create and append a new element to the DOM in JavaScript.'
      ]
    },
    "JavaScript Event Handling": {
      content: `
        JavaScript enables event-driven programming by allowing code to respond to user interactions, such as clicks, keyboard inputs, and form submissions. Event listeners can be attached to HTML elements to execute JavaScript functions.
      `,
      syntax: `
        const button = document.getElementById("myButton");
        
        button.addEventListener("click", function() {
            alert("Button clicked!");
        });
      `,
      questions: [
        '1. Write a JavaScript program that displays an alert when a button is clicked.',
        '2. Explain the concept of event delegation in JavaScript.'
      ]
    },
    "JavaScript AJAX and Fetch API": {
      content: `
        AJAX (Asynchronous JavaScript and XML) allows web pages to communicate with a server asynchronously, updating data without reloading the page. The Fetch API is a modern way to make network requests in JavaScript.
      `,
      syntax: `
        fetch('https://api.example.com/data')
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error('Error:', error));
      `,
      questions: [
        '1. Write a JavaScript program that fetches data from a public API and logs it to the console.',
        '2. Explain the difference between XMLHttpRequest and the Fetch API.'
      ]
    },
    "JavaScript ES6 Features": {
      content: `
        ECMAScript 6 (ES6) introduced many new features to JavaScript, including:
        - let and const: for variable declaration
        - Arrow functions
        - Template literals
        - Destructuring assignment
        - Modules
      `,
      syntax: `
        let name = "Alice";
        const greeting = \`Hello, \${name}!\`;
        console.log(greeting); // Output: Hello, Alice!
      `,
      questions: [
        '1. Write a program that uses arrow functions and template literals.',
        '2. Explain the purpose of destructuring assignment with an example.'
      ]
    },
    "JavaScript Frameworks": {
      content: `
        JavaScript frameworks, such as React, Angular, and Vue.js, provide a structured way to build dynamic web applications. They help developers create interactive, component-based UIs and manage application state more effectively.
      `,
      syntax: `
        // Example using React
        import React from 'react';
    
        function App() {
            return <h1>Hello, World!</h1>;
        }
    
        export default App;
      `,
      questions: [
        '1. Explain the main differences between React and Angular.',
        '2. Write a simple component in Vue.js that displays a message.'
      ]
    },
    "JavaScript Node.js Basics": {
      content: `
        Node.js is a JavaScript runtime built on Chrome's V8 engine, enabling JavaScript to run on the server side. It is widely used for creating scalable, real-time network applications.
      `,
      syntax: `
        const http = require('http');
    
        const server = http.createServer((req, res) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Hello, World!');
        });
    
        server.listen(3000, () => {
            console.log('Server running at http://localhost:3000/');
        });
      `,
      questions: [
        '1. Write a Node.js program that creates a basic HTTP server.',
        '2. Explain the role of npm in Node.js development.'
      ]
    }
    
    };

    export default allTopics;