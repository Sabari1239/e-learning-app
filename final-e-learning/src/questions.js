// src/questions.js
const questions = [
    
    {
        question: "Which of the following is a valid C variable name?",
        options: [
            "a) 1variable",
            
            
            "b) variable_1",
            
            
            "c)variable 1",
            
            
            "d) variable-1"],
        correctAnswer: "b) variable_1",
      },
      {
        question: "Which of the following is not a valid C data type?",
        options: ["a) int",


            "b) float",
            
            
            "c) string",
            
            
            "d) char"],
        correctAnswer: "c) string",
      },
      {
        question: "What is the output of the following code: printf(\"%d\",5 + 3)?",
        options: ["a) 5",


            "b) 8",
            
            
           " c) 53",
            
            
            "d) Error"],
        correctAnswer: "b) 8",
      },
      {
        question: "Which of the following operators is used for logical AND in C?",
        options: ["a) &",


            "b) &&",
            
            
            "c) ||",
            
            
            "d) !"],
        correctAnswer: "b) &&",
      },
      {
        question: "What is the correct way to declare a pointer in C?",
        options: ["a) int *ptr;",


            "b) int ptr*;",
            
            
            "c) *int ptr;",
            
            
            "d) ptr int*;"],
        correctAnswer: "a) int *ptr;",
      },
      {
        question: "Which of the following functions is used to allocate memory dynamically in C?",
        options: ["a) malloc()",


            "b) calloc()",
            
            
            "c) realloc()",
            
            
            "d) All of the above"],
        correctAnswer: "d) All of the above",
      },
      {
        question: "What will be the output of the following code: printf(\"%d\", 'A' + 1);?",
        options: ["a) A",


            "b) B",
            
            
            "c) C",
            
            
            "d) Error"],
        correctAnswer: "b) B",
      },
      {
        question: "What will be the output of the following code: printf(\"%d\", 10 / 2);?",
        options: ["a) 2",


          "b) 5",


         "c) 10",


         "d) Error"],
        correctAnswer: "b) 5",
      },
      {
        question: "Which of the following is a valid way to define a constant in C?",
        options: [
            "a) const int x = 10;",
            
            
            "b) #define x 10",
            
            
            "c) int const x = 10;",
            
            
            "d) All of the above"],
        correctAnswer: "d) All of the above",

      },
      {
        question: "What is the output of the following code: printf(\"%d\", Hello, World!);?",
        options: ["a) Hello",


            "b) Hello, World!",
            
            
            "c) Error",
            
            
            "d) World!"],
        correctAnswer: "b) Hello, World!",
      },
      {
        question: "Which of the following is the correct syntax to include a header file in C?",
        options: ["a) #include",


            "b) include",
            
            
            "c) #include 'stdio.h'",
            
            
           "d) Both a and c"],
        correctAnswer: "d) Both a and c",
      },
      {
        question: "What will be the output of the following code: printf(\"%d\", 3.14);?",
        options: ["a) 3.14",


            "b) 3.140000",
            
            
            "c) Error",
            
            
            "d) 3.1"],
        correctAnswer: "b) 3.140000",
      },
      {
        question: "Which of the following is used to terminate a string in C?",
        options: [
            "a) \n",
            
            
           "b) \0",
            
            
            "c) \t",
            
            
            "d) \r"],
        correctAnswer: "b) \0",
      },
      {
        question: "What will be the output of the following code: printf(\"%d\", 7 * 2)?",



        options: ["a) 14",


            "b) 12",
            
            
            "c) 72",
            
            
            "d) Error"],
        correctAnswer: "a) 14",
      },
      {
        question: "Which of the following is the correct way to define a structure in C?",
        options: ["a) struct { int x; };",


            "b) struct x { int x; };",
            
            
            "c) struct x { int x; } x;",
            
            
            "d) All of the above"],
        correctAnswer: "b) struct x { int x; };",
      },
      {
        question: "What is the output of the following code: printf('%f', 2.5 + 1.5);?",
        options: ["a) 4.0",


            "b) 4.000000",
            
            
            "c) 4.00",
            
            
            "d) Error"],
        correctAnswer: "b) 4.000000",
      },
      {
        question: "What will be the output of the following code: printf('%d', 3 * 4);?",
        options: ["a) 12",


           "b) 7",
            
            
            "c) 34",
            
            
            "d) Error"],
        correctAnswer: "a) 12",
      },
      {
        question: "Which of the following operators is used for bitwise OR in C?",
        options: ["a) |",


           " b) ||",
            
            
            "c) &",
            
            
            "d) ^"],
        correctAnswer: "a) |",
      },
      {
        question: "Which of the following is the correct way to declare an array in C?",
        options: ["a) int arr[];",


        "b) int arr[10];",
        
        
        "c) int arr(10);",
        
        
        "d) Both a and b"],
        correctAnswer: "d) Both a and b",
      },
      {
        question: "Which of the following is a valid C function declaration?",
        options: ["a) void function();",


            "b) function void();",
            
            
            "c) void function[];",
            
            
            "d) function();"],
        correctAnswer: "a) void function();",
      },
      {
        question: "What will be the output of the following code: printf('%d', 5 - 2);?",
        options: [
            "a) 3",
            
            
            "b) 2",
            
            
            "c) 7",
            
            
            "d) Error"],
        correctAnswer: "a)3",
      },
      {
        question: "Which of the following is the correct way to comment in C?",
        options: [
            "a) // This is a comment",
            
            
            "b) /* This is a comment */",
            
            
            "c) # This is a comment",
            
            
            "d) Both a and b"],
        correctAnswer: "d) Both a and b",
      },
      {
        question: "Which keyword is used to define a class in C++?",
        options: ["a) object",


           " b) struct",
            
            
            "c) class",
            
            
            "d) define"],
        correctAnswer: "c) class",
      },
      {
        question: "Which of these is not a type of constructor in C++?",
        options: ["a) Default constructor",


            "b) Copy constructor",
            
            
            "c) Static constructor",
            
            
            "d) Parameterized constructor"],
        correctAnswer: "c) Static constructor",
      },
      {
        question: "What is the operator used for dereferencing pointers in C++?",
        options: ["a) *",


            "b) &",
            
            
            "c) &&",
            
            
            "d) ->"],
        correctAnswer: "a) *",
      },
      {
        question: "Which keyword is used to make a member variable unmodifiable?",
        options: ["a) const",


           " b) static",
            
            
            "c) volatile",
            
            
            "d) readonly"],
        correctAnswer: "a) const",
      },
      {
        question: "In C++, cout and cin are defined in which header file?",
        options: ["a) iostream",


            "b) conio.h",
            
            
            "c) stdio.h",
            
            
            "d) stdlib.h"],
        correctAnswer: "a) iostream",
      },
      {
        question: "Which of these access specifiers allows access only within the same class?",
        options: ["a) public",


            "b) private",
            
            
            "c) protected",
            
            
            "d) extern"],
        correctAnswer: "b) private",
      },
      {
        question: "What will be the output of cout << (5 < 3 ? 5 : 3); in C++?",
        options: ["a) 5",


           " b) 3",
            
            
            "c) Error",
            
            
            "d) True"],
        correctAnswer: "b) 3",
      },
      {
        question: "In C++, what does the new keyword do?",
        options: ["a) Allocates memory on the stack",


            "b) Allocates memory on the heap",
            
            
            "c) Deallocates memory",
            
            
            "d) None of the above"],
        correctAnswer: "b) Allocates memory on the heap",
      },
      {
        question: "In C++, which function is used to release dynamically allocated memory?",
        options: [
            "a) delete",
            
            
            "b) free",
            
            
            "c) release",
            
            
            "d) remove"],
        correctAnswer: "a) delete",
      },
      {
        question: "What will be the output of cout << (int)'A'; in C++?",
        options: ["a) A",


            "b) 65",
            
            
            "c) a",
            
            
            "d) Error"],
        correctAnswer: "b) 65",
      },
      {
        question: "What will be the output of cout << 5 / 2; in C++?",
        options: [
            "a) 2.5",
            
            
            "b) 2",
            
            
            "c) 3",
            
            
            "d) Error"],
        correctAnswer: "b) 2",
      },
      {
        question: "What will be the output of cout << (10 % 3); in C++?",
        options: ["a) 1",


            "b) 3",
            
            
            "c) 10",
            
            
            "d) Error"],
        correctAnswer: "a) 1",
      },
      
      {
        question: "What is the capital of France?",
        options: ["a) ~ClassName()",


            "b) ClassName~()",
            
            
            "c) ClassName::()",
            
            
            "d) None of the above"],
        correctAnswer: "a) ~ClassName()",
      },
      {
        question: "What will be the output of the following code: printf('%d', 8 + 4 / 2);?",
        options: ["a) 10",


            "b) 12",
            
            
            "c) 8",
            
            
            "d) Error"],
        correctAnswer: "b) 12",
      },
      {
        question: "What will be the output of cout << (15 / 4); in C++?",
        options: ["a) 3",


            "b) 3.75",
            
            
            "c) 4",
            
            
            "d) Error"],
        correctAnswer: "a) 3",
      },
      {
        question: "Which of the following is a valid way to declare a pointer in C?",
        options: ["a) int *ptr;",


            "b) int ptr*;",
            
            
            "c) *int ptr;",
            
            
            "d) int &ptr;"],
        correctAnswer: "a) int *ptr;",
      }, {
        question: "What will be the output of the following code: printf('%d', 10 - 3);?",
        options: ["a) 7",


            "b) 10",
            
            
            "c) 3",
            
            
            "d) Error"],
        correctAnswer: "a)7",
      },
      {
        question: "Which of these features does C++ support that C does not?",
        options: ["a) Function overloading",


            "b) Operator overloading",
            
            
            "c) Classes and objects",
            
            
            "d) All of the above"],
        correctAnswer: "d) All of the above",
      },
      {
        question: "Which of the following is not a Java keyword?",
        options: ["a) static",


            "b) class",
            
            
            "c) try",
            
            
            "d) method"],
        correctAnswer: "d) method",
      },
      {
        question: "Which of the following data types is not primitive in Java?",
        options: ["a) int",


            "b) boolean",
            
            
            "c) String",
            
            
            "d) double"],
        correctAnswer: "c) String",
      },
      {
        question: "In Java, what will String s = 'Hello'; s.toUpperCase(); System.out.println(s); output?",
        options: ["a) HELLO",


            "b) Hello",
            
            
            "c) hello",
            
            
            "d) Error"],
        correctAnswer: "b) Hello",
      },
      {
        question: "The correct way to define a method in Java is:",
        options: [
            "a) void method()",
            
            
            "b) function method()",
            
            
            "c) define method()",
            
            
            "d) None of the above"],
        correctAnswer: "a) void method()",
      },
      {
        question: "Which of the following is a method that gets called automatically when an object is created in Java?",
        options: ["a) main",


            "b) run",
            
            
            "c) constructor",
            
            
            "d) new"],
        correctAnswer: "c) constructor",
      },
      {
        question: "Which method is used to find the length of a string in Java?",
        options: [
            "a) size()",
            
            
            "b) length()",
            
            
            "c) getLength()",
            
            
            "d) len()"],
        correctAnswer: "b) length()",
      },
      {
        question: "What is the correct way to start a thread in Java?",
        options: [
            "a) run()",
            
            
            "b) execute()",
            
            
            "c) start()",
            
            
            "d) begin()"],
        correctAnswer: "c) start()",
      },
      {
        question: "In Java, which keyword is used to inherit a class?",
        options: ["a) inherits",


            "b) extends",
            
            
            "c) implements",
            
            
            "d) inherits_from"],
        correctAnswer: "b) extends",
      },
      {
        question: "What will System.out.println('Java' + 10 + 20); output?",
        options: [
            "a) Java30",
            
            
            "b) Java1020",
            
            
            "c) Java 30",
            
            
            "d) Error"],
        correctAnswer: "b) Java1020",
      },
      {
        question: "Which method must be implemented by all Java threads?",
        options: ["a) run()",


            "b) execute()",
            
            
            "c) call()",
            
            
            "d) start()"],
        correctAnswer: "a) run()",
      },
      {
        question: "What is the result of 10 % 3 in Java?",
        options: ["a) 1",


            "b) 2",
            
            
            "c) 3",
            
            
            "d) 0"],
        correctAnswer: "a)1",
      },
      {
        question: "In Java, what does super() do?",
        options: ["a) Calls the parent class constructor",


            "b) Initializes a variable",
            
            
            "c) Calls a static method",
            
            
            "d) None of the above"],
        correctAnswer: "a) Calls the parent class constructor",
      },
      {
        question: "What will be the output of System.out.println(2 + 2 + '2');?",
        options: ["a) 22",


            "b) 42",
            
            
            "c) 24",
            
            
            "d) Error"],
        correctAnswer: "b)42",
      },
      {
        question: "Which of the following is a wrapper class in Java?",
        options: ["a) int",


            "b) Integer",
            
            
            "c) char",
            
            
            "d) double"],
        correctAnswer: "b) Integer",
      },
      {
        question: "Which of the following statements is true about Java?",
        options: ["a) Java is a platform-independent programming language.",


            "b) Java does not support object-oriented programming.",
            
            
            "c) Java is only used for web development.",
            
            
            "d) Java does not support multithreading."],
        correctAnswer: "a) Java is a platform-independent programming language.",
      },
      {
        question: "Which of the following is the correct way to declare a constant in Java?",
        options: [
            "a) final int x = 10;",
            
            
            "b) const int x = 10;",
            
            
            "c) static int x = 10;",
            
            
            "d) int const x = 10;"],
        correctAnswer: "a) final int x = 10;",
      },
      {
        question: "Which of the following is a valid way to create a loop in Java?",
        options: [
            "a) for(int i = 0; i < 10; i++) {}",
            
            
            "b) while(i < 10) {}",
            
            
            "c) do {} while(i < 10);",
            
            
            "d) All of the above"],
        correctAnswer: "d) All of the above",
      },
      {
        question: "Which of the following is the correct way to declare an array in Java?",
        options: ["a) int arr[];",


        "b) int[] arr;",
        
        
        "c) arr int[];",
        
        
        "d) Both a and b"],
        correctAnswer: "d) Both a and b",
      },
      {
        question: "What is the correct way to declare a pointer in C?",
        options: [
            "a) int *ptr;",
            
            
            "b) int ptr*;",
            
            
            "c) *int ptr;",
            
            
            "d) ptr int*;"],
        correctAnswer: "a) int *ptr;",
      },
      {
        question: "Which of the following is a valid way to create an array in C++?",
        options: [
            "a) int arr[10];",
            
            
            "b) int arr = new int[10];",
            
            
            "c) int arr(10);",
            
            
            "d) All of the above"],
        correctAnswer: "d) All of the above",
      },
      {
        question: "In Java, which keyword is used to create an interface?",
        options: ["a) interface",


            "b) abstract",
            
            
            "c) class",
            
            
            "d) implements"],
        correctAnswer: "a) interface",
      },
      {
        question: "JavaScript is a ___-side scripting language.",
        options: [
            "a) Client",
            
            
            "b) Server",
            
            
            "c) Both",
            
            
            "d) None"],
        correctAnswer: "c) Both",
      },
      {
        question: "Which of these is a JavaScript framework?",
        options: ["a) Django",


            "b) React",
            
            
            "c) Laravel",
            
            
            "d) Flask"],
        correctAnswer: "b) React",
      },
      {
        question: "Which method is used to find the length of a string in JavaScript?",
        options: [
            "a) length()",
            
            
            "b) strlen()",
            
            
            "c) size()",
            
            
            "d) .length"],
        correctAnswer: "d) .length",
      },
      {
        question: "What is the output of console.log(typeof null); in JavaScript?",
        options: ["a) null",


            "b) object",
            
            
            "c) undefined",
            
            
            "d) function"],
        correctAnswer: "b) object",
      },
      {
        question: "In JavaScript, how would you display Hello World! in an alert box?",
        options: ["a) alertBox('Hello World!');",


            "b) alert('Hello World!');",
            
            
            "c) msg('Hello World!');",
            
            
            "d) console.log('Hello World!');"],
        correctAnswer: "b) alert('Hello World!');",
      },
      {
        question: "Which of these is a valid way to declare a variable in JavaScript?",
        options: ["a) var name;",


            "b) let name;",
            
            
            "c) const name;",
            
            
            "d) All of the above"],
        correctAnswer: "d) All of the above",
      },
      {
        question: "In JavaScript, what is NaN?",
        options: [
            "a) A number",
            
            
            "b) Not a number",
            
            
            "c) An undefined variable",
            
            
            "d) None of the above"],
        correctAnswer: "b) Not a number",
      },
      {
        question: "Which of the following is not a JavaScript data type?",
        options: [
            "a) Boolean",
            
            
            "b) String",
            
            
            "c) Character",
            
            
            "d) Object"],
        correctAnswer: "c) Character",
      },
      {
        question: "Which symbol is used for single-line comments in JavaScript?",
        options: ["a) #",


            "b) //",
            
            
            "c) /*",
            
            
            "d) $"],
        correctAnswer: "b) //",
      },
      {
        question: "What is the output of console.log(2 + '2');?",
        options: ["a) 4",


            "b) 22",
            
            
            "c) Error",
            
            
            "d) Undefined"],
        correctAnswer: "b) 22",
      },
      {
        question: "In JavaScript, which of these is used to define a variable that cannot be reassigned?",
        options: [
            "a) const",
            
            
            "b) let",
            
            
            "c) var",
            
            
            "d) final"],
        correctAnswer: "a) const",
      },
      {
        question: "What will be the output of console.log('Hello' + ' World!');?",
        options: [
            "a) Hello World!",
            
            
            "b) Hello",
            
            
            "c) HelloWorld!",
            
            
            "d) Error"],
        correctAnswer: "a) Hello World!",
      },
      {
        question: "Which JavaScript function converts a JSON string into a JavaScript object?",
        options: [
            "a) JSON.stringify()",
            
            
            "b) JSON.parse()",
            
            
            "c) object()",
            
            
            "d) toObject()"],
        correctAnswer: "b) JSON.parse()",
      },
      {
        question: "Which method adds an element at the beginning of an array in JavaScript?",
        options: ["a) push()",


            "b) pop()",
            
            
            "c) unshift()",
            
            
            "d) concat()"],
        correctAnswer: "c) unshift()",
      },
      {
        question: "How can you define a function in JavaScript?",
        options: ["a) function myFunc() {}",


            "b) let myFunc() {}",
            
            
            "c) define myFunc() {}",
            
            
            "d) func myFunc() {}"],
        correctAnswer: "a) function myFunc() {}",
      },
      {
        question: "Which of the following is used to define a variable in JavaScript?",
        options: [
            "a) let",
            
            
            "b) var",
            
            
            "c) const",
            
            
            "d) All of the above"],
        correctAnswer: "d) All of the above",
      },
      {
        question: "What is the output of the following codeconsole.log('5' + 5);",
        options: [
            "a) 10",
            
            
            "b) 55",
            
            
            "c) Error",
            
            
            "d) 5 + 5"],
        correctAnswer: "b) 55",
      },
      {
        question: "Which method is used to parse a string and return an integer in JavaScript?",
        options: ["a) parseInt()",


            "b) parseFloat()",
            
            
            "c) toInteger()",
            
            
            "d) Number()"],
        correctAnswer: "a) parseInt()",
      },
      {
        question: "What does === operator in JavaScript check?",
        options: ["a) Equality of values only",


            "b) Equality of data types only",
            
            
            "c) Equality of both value and data type",
            
            
            "d) None of the above"],
        correctAnswer: "c) Equality of both value and data type",
      },
      {
        question: "How can you add an element to the end of an array in JavaScript?",
        options: ["a) push()",


            "b) pop()",
            
            
            "c) shift()",
            
            
            "d) unshift()"],
        correctAnswer: "a) push()",
      },
     
      {
        question: "Which of the following is NOT a JavaScript data type?",
        options: [
            "a) Number",
            
            
            "b) Boolean",
            
            
            "c) Element",
            
            
            "d) String"],
        correctAnswer: "c) Element",
      },
       {
        question: "Which of the following is the correct way to create an array in JavaScript?",
        options: ["a) var colors = 'red', 'green', 'blue';",


            "b) var colors = ['red', 'green', 'blue'];",
            
            
            "c) var colors = (1:'red', 2:'green', 3:'blue');",
            
            
            "d) var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue');"],
        correctAnswer: "b) var colors = ['red', 'green', 'blue'];",
      }, 
      {
        question: "What is the purpose of the map() method in JavaScript?",
        options: [
            "a) To combine two arrays",
            
            
            "b) To filter out elements in an array",
            
            
            "c) To execute a function on each array element and create a new array",
            
            
            "d) To sort the elements in an array"],
        correctAnswer: "c) To execute a function on each array element and create a new array",
      }, 
      {
        question: "What will console.log(typeof null); output in JavaScript?",
        options: ["a) null",


            "b) object",
            
            
            "c) undefined",
            
            
            "d) string"],
        correctAnswer: "b) object",
      }, 
      {
        question: "In Python, how do you create a list?",
        options: ["a) []",


        "b) ()",
        
        
        "c) {}",
        
        
        "d) <>"],
        correctAnswer: "a) []",
      }, 
      {
        question: "What is the output of print(type(10.5)) in Python?",
        options: ["a) int",


            "b) float",
            
            
            "c) double",
            
            
            "d) long"],
        correctAnswer: "b) float",
      },
       {
        question: "Which of the following functions converts a string to uppercase in Python?",
        options: ["a) toupper()",


            "b) toUpperCase()",
            
            
            "c) upper()",
            
            
            "d) uppercase()"],
        correctAnswer: "c) upper()",
      }, 
      {
        question: "In Python, what is the output of print(2 ** 3)?",
        options: ["a) 6",


            "b) 8",
            
            
            "c) 9",
            
            
            "d) 4"],
        correctAnswer: "b) 8",
      },
      {
        question: "Which of these functions can be used to take user input in Python?",
        options: [
            "a) read()",
            
            
            "b) input()",
            
            
            "c) scan()",
            
            
            "d) prompt()"],
        correctAnswer: "b) input()",
      }, 
      {
        question: "Which of the following is not a Python keyword?",



        options: ["a) try",


            "b) class",
            
            
            "c) define",
            
            
            "d) finally"],
        correctAnswer: "c) define",
      },
      {
        question: "In Python, what will print('Hello, World!'[1]) output?",
        options: ["a) H",


            "b) e",
            
            
            "c) Hello",
            
            
            "d) Error"],
        correctAnswer: "b) e",
      },
      {
        question: "Which of these will import the math module in Python?",
        options: ["a) import math",


            "b) include math",
            
            
            "c) math.import()",
            
            
            "d) import.math"],
        correctAnswer: "a) import math",
      },
      {
        question: "In Python, which of the following is used to check if two variables are equal?In Python, which of the following is used to check if two variables are equal?",
        options: ["a) =",


            "b) ==",
            
            
            "c) equals",
            
            
            "d) equal"],
        correctAnswer: "b) ==",
      },
      {
        question: "Which of the following statements correctly declares a Python dictionary?",
        options: ["a) my_dict = {'name': 'Alice', 'age': 25}",


            "b) my_dict = ('name': 'Alice', 'age': 25)",
            
            
            "c) my_dict = ['name': 'Alice', 'age': 25]",
            
            
            "d) my_dict = {'name', 'Alice', 'age', 25}"],
        correctAnswer: "a) my_dict = {'name': 'Alice', 'age': 25}",
      },
      {
        question: "What will be the output of the following code?print(type([]) is list)",
        options: ["a) True",


            "b) False",
            
            
            "c) list",
            
            
            "d) Error"],
        correctAnswer: "a) True",
      },
      {
        question: "Which of the following is the correct way to read a file in Python?",
        options: ["a) file.open('file.txt', 'r')",


            "b) open('file.txt', 'r')",
            
            
            "c) file.read('file.txt')",
            
            
            "d) open('file.txt')"],
        correctAnswer: "b) open(''file.txt', 'r')",
      },
      {
        question: "What will be the output of the following code?print(2 **3** 2)",
        options: ["a)64",


            "b)512",
            
            
            "c)16",
            
            
            "d)256"],
        correctAnswer: "b)512",
      },
      {
        question: "Which of the following data structures does NOT allow duplicate values in Python?",
        options: ["a) List",


            "b) Tuple",
            
            
            "c) Set",
            
            
            "d) Dictionary"],
        correctAnswer: "c) Set",
      },
      {
        question: "In Python, which operator is used to concatenate two strings?",
        options: ["a) +",


            "b) &",
            
            
            "c) *",
            
            
            "d) -"],
        correctAnswer: "a) +",
      },







  ];
  
  export default questions;
  