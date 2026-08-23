export type CodingTask = {
  starter: string;
  hint: string;
  validate: (code: string) => boolean[];
};

const mainShell = (inside = "    // Write code here") => `#include <iostream>\n\nint main() {\n${inside}\n\n    return 0;\n}`;
const stringShell = (inside = "    // Write code here") => `#include <iostream>\n#include <string>\n\nint main() {\n${inside}\n\n    return 0;\n}`;
const hasMain = (code: string) => /int\s+main\s*\(\s*\)/.test(code);
const hasReturn = (code: string) => /return\s+0\s*;/.test(code);
const out = (pattern: RegExp) => (code: string) => pattern.test(code);

export const taskGroups: CodingTask[][] = [
  [
    { starter: mainShell(), hint: `std::cout << "Hello, C++!";`, validate: code => [hasMain(code), out(/std::cout\s*<<\s*"Hello,\s*C\+\+!"\s*;/)(code), hasReturn(code)] },
    { starter: mainShell(), hint: `std::cout << "My first program";`, validate: code => [hasMain(code), out(/std::cout\s*<<\s*"My first program"\s*;/)(code), hasReturn(code)] },
    { starter: mainShell(), hint: `std::cout << "Score: " << 10;`, validate: code => [out(/std::cout\s*<</)(code), /"Score:\s*"\s*<<\s*10/.test(code), /;/.test(code)] },
    { starter: mainShell(), hint: `std::cout << "Line 1\\nLine 2";`, validate: code => [out(/std::cout\s*<</)(code), /"Line 1\\nLine 2"/.test(code), hasReturn(code)] },
    { starter: mainShell(), hint: `std::cout << "A";\n    std::cout << "B";`, validate: code => [(code.match(/std::cout/g) || []).length >= 2, /"A"\s*;/.test(code), /"B"\s*;/.test(code)] },
    { starter: mainShell(), hint: `std::cout << 42;`, validate: code => [out(/std::cout\s*<</)(code), /std::cout\s*<<\s*42\s*;/.test(code), !/"42"/.test(code)] },
    { starter: mainShell(), hint: `std::cout << 2 + 3;`, validate: code => [out(/std::cout\s*<</)(code), /2\s*\+\s*3/.test(code), hasReturn(code)] },
    { starter: mainShell(), hint: `std::cout << "Cars: " << 3;`, validate: code => [out(/std::cout\s*<</)(code), /"Cars:\s*"\s*<<\s*3/.test(code), /;/.test(code)] },
    { starter: mainShell(), hint: `std::cout << "Ready" << std::endl;`, validate: code => [out(/std::cout\s*<</)(code), /"Ready"\s*<<\s*std::endl/.test(code), hasReturn(code)] },
    { starter: `// Build the complete program here`, hint: `#include <iostream>\n\nint main() {\n    std::cout << "I can code!";\n    return 0;\n}`, validate: code => [/#include\s*<iostream>/.test(code) && hasMain(code), /std::cout\s*<<\s*"I can code!"\s*;/.test(code), hasReturn(code)] },
  ],
  [
    { starter: mainShell(), hint: `int age = 20;\n    std::cout << age;`, validate: code => [/int\s+age\s*=\s*20\s*;/.test(code), /std::cout\s*<<\s*age\s*;/.test(code), hasReturn(code)] },
    { starter: mainShell(), hint: `double price = 4.5;\n    std::cout << price;`, validate: code => [/double\s+price\s*=\s*4\.5\s*;/.test(code), /std::cout\s*<<\s*price\s*;/.test(code), hasReturn(code)] },
    { starter: mainShell(), hint: `bool open = true;\n    std::cout << open;`, validate: code => [/bool\s+open\s*=\s*true\s*;/.test(code), /std::cout\s*<<\s*open\s*;/.test(code), hasReturn(code)] },
    { starter: stringShell(), hint: `std::string name = "Alex";\n    std::cout << name;`, validate: code => [/#include\s*<string>/.test(code), /std::string\s+name\s*=\s*"Alex"\s*;/.test(code), /std::cout\s*<<\s*name\s*;/.test(code)] },
    { starter: mainShell(), hint: `int score = 10;\n    score = 15;\n    std::cout << score;`, validate: code => [/int\s+score\s*=\s*10\s*;/.test(code), /score\s*=\s*15\s*;/.test(code), /std::cout\s*<<\s*score\s*;/.test(code)] },
    { starter: mainShell(), hint: `const int seats = 24;\n    std::cout << seats;`, validate: code => [/const\s+int\s+seats\s*=\s*24\s*;/.test(code), /std::cout\s*<<\s*seats\s*;/.test(code), hasReturn(code)] },
    { starter: mainShell(), hint: `int a = 7;\n    int b = 5;\n    std::cout << a + b;`, validate: code => [/int\s+a\s*=\s*7\s*;/.test(code) && /int\s+b\s*=\s*5\s*;/.test(code), /std::cout\s*<<\s*a\s*\+\s*b\s*;/.test(code), hasReturn(code)] },
    { starter: mainShell(), hint: `double total = 10.0;\n    int count = 4;\n    std::cout << total / count;`, validate: code => [/double\s+total\s*=\s*10(?:\.0)?\s*;/.test(code), /int\s+count\s*=\s*4\s*;/.test(code), /std::cout\s*<<\s*total\s*\/\s*count\s*;/.test(code)] },
    { starter: mainShell(), hint: `int points = 5;\n    points += 3;\n    std::cout << points;`, validate: code => [/int\s+points\s*=\s*5\s*;/.test(code), /points\s*\+=\s*3\s*;/.test(code), /std::cout\s*<<\s*points\s*;/.test(code)] },
    { starter: mainShell(), hint: `int visitors = 12;\n    double price = 2.5;\n    std::cout << visitors * price;`, validate: code => [/int\s+visitors\s*=\s*12\s*;/.test(code), /double\s+price\s*=\s*2\.5\s*;/.test(code), /std::cout\s*<<\s*visitors\s*\*\s*price\s*;/.test(code)] },
  ],
  [
    { starter: mainShell(`    int age = 20;\n\n    // Add an if statement`), hint: `if (age >= 18) {\n        std::cout << "Adult";\n    }`, validate: code => [/if\s*\(\s*age\s*>=\s*18\s*\)/.test(code), /std::cout\s*<<\s*"Adult"/.test(code), /\{[\s\S]*\}/.test(code)] },
    { starter: mainShell(`    int score = 65;\n\n    // Add if and else`), hint: `if (score >= 50) {\n        std::cout << "Pass";\n    } else {\n        std::cout << "Fail";\n    }`, validate: code => [/if\s*\(\s*score\s*>=\s*50\s*\)/.test(code), /else\s*\{/.test(code), /"Pass"/.test(code) && /"Fail"/.test(code)] },
    { starter: mainShell(`    int secret = 7;\n\n    // Check equality`), hint: `if (secret == 7) {\n        std::cout << "Correct";\n    }`, validate: code => [/if\s*\(\s*secret\s*==\s*7\s*\)/.test(code), /"Correct"/.test(code), hasReturn(code)] },
    { starter: mainShell(`    int age = 14;\n    int height = 150;\n\n    // Check both conditions`), hint: `if (age >= 12 && height >= 140) {\n        std::cout << "Allowed";\n    }`, validate: code => [/age\s*>=\s*12/.test(code), /&&\s*height\s*>=\s*140/.test(code), /"Allowed"/.test(code)] },
    { starter: mainShell(), hint: `for (int car = 1; car <= 3; ++car) {\n        std::cout << car;\n    }`, validate: code => [/for\s*\(\s*int\s+car\s*=\s*1\s*;/.test(code), /car\s*<=\s*3\s*;\s*(?:\+\+car|car\+\+)/.test(code), /std::cout\s*<<\s*car/.test(code)] },
    { starter: mainShell(), hint: `for (int i = 0; i < 5; ++i) {\n        std::cout << i;\n    }`, validate: code => [/for\s*\(\s*int\s+i\s*=\s*0\s*;/.test(code), /i\s*<\s*5\s*;\s*(?:\+\+i|i\+\+)/.test(code), /std::cout\s*<<\s*i/.test(code)] },
    { starter: mainShell(`    int count = 0;\n\n    // Add a while loop`), hint: `while (count < 3) {\n        std::cout << count;\n        ++count;\n    }`, validate: code => [/while\s*\(\s*count\s*<\s*3\s*\)/.test(code), /std::cout\s*<<\s*count/.test(code), /(?:\+\+count|count\+\+)/.test(code)] },
    { starter: mainShell(`    int sum = 0;\n\n    // Add numbers 1 through 5`), hint: `for (int i = 1; i <= 5; ++i) {\n        sum += i;\n    }\n    std::cout << sum;`, validate: code => [/for\s*\(\s*int\s+i\s*=\s*1/.test(code) && /i\s*<=\s*5/.test(code), /sum\s*\+=\s*i\s*;/.test(code), /std::cout\s*<<\s*sum/.test(code)] },
    { starter: mainShell(), hint: `for (int i = 1; i <= 5; ++i) {\n        if (i == 3) continue;\n        std::cout << i;\n    }`, validate: code => [/for\s*\(/.test(code), /if\s*\(\s*i\s*==\s*3\s*\)\s*continue\s*;/.test(code), /std::cout\s*<<\s*i/.test(code)] },
    { starter: mainShell(), hint: `for (int count = 3; count >= 1; --count) {\n        std::cout << count;\n    }`, validate: code => [/int\s+count\s*=\s*3/.test(code), /count\s*>=\s*1/.test(code) && /--count|count--/.test(code), /std::cout\s*<<\s*count/.test(code)] },
  ],
  [
    { starter: `#include <iostream>\n\n// Create greet here\n\nint main() {\n    greet();\n}`, hint: `void greet() {\n    std::cout << "Hi";\n}`, validate: code => [/void\s+greet\s*\(\s*\)/.test(code), /std::cout\s*<<\s*"Hi"/.test(code), /greet\s*\(\s*\)\s*;/.test(code)] },
    { starter: `#include <iostream>\n#include <string>\n\n// Create greet here\n\nint main() {\n    greet("Alex");\n}`, hint: `void greet(std::string name) {\n    std::cout << name;\n}`, validate: code => [/void\s+greet\s*\(\s*std::string\s+name\s*\)/.test(code), /std::cout\s*<<\s*name/.test(code), /greet\s*\(\s*"Alex"\s*\)/.test(code)] },
    { starter: `#include <iostream>\n\n// Create doubleNumber here\n\nint main() {\n    std::cout << doubleNumber(4);\n}`, hint: `int doubleNumber(int number) {\n    return number * 2;\n}`, validate: code => [/int\s+doubleNumber\s*\(\s*int\s+number\s*\)/.test(code), /return\s+number\s*\*\s*2\s*;/.test(code), /doubleNumber\s*\(\s*4\s*\)/.test(code)] },
    { starter: `#include <iostream>\n\n// Create add here\n\nint main() {\n    std::cout << add(3, 5);\n}`, hint: `int add(int a, int b) {\n    return a + b;\n}`, validate: code => [/int\s+add\s*\(\s*int\s+a\s*,\s*int\s+b\s*\)/.test(code), /return\s+a\s*\+\s*b\s*;/.test(code), /add\s*\(\s*3\s*,\s*5\s*\)/.test(code)] },
    { starter: `#include <iostream>\n\n// Create isAdult here\n\nint main() {\n    std::cout << isAdult(20);\n}`, hint: `bool isAdult(int age) {\n    return age >= 18;\n}`, validate: code => [/bool\s+isAdult\s*\(\s*int\s+age\s*\)/.test(code), /return\s+age\s*>=\s*18\s*;/.test(code), /isAdult\s*\(\s*20\s*\)/.test(code)] },
    { starter: `#include <iostream>\n\n// Create square here\n\nint main() {\n    int result = square(6);\n    std::cout << result;\n}`, hint: `int square(int value) {\n    return value * value;\n}`, validate: code => [/int\s+square\s*\(\s*int\s+value\s*\)/.test(code), /return\s+value\s*\*\s*value\s*;/.test(code), /int\s+result\s*=\s*square\s*\(\s*6\s*\)/.test(code)] },
    { starter: `#include <iostream>\n\n// Add a declaration here\n\nint main() {\n    std::cout << triple(3);\n}\n\n// Add the definition here`, hint: `int triple(int value);\n\n// ...\n\nint triple(int value) {\n    return value * 3;\n}`, validate: code => [/int\s+triple\s*\(\s*int\s+value\s*\)\s*;/.test(code), /int\s+triple\s*\(\s*int\s+value\s*\)\s*\{/.test(code), /return\s+value\s*\*\s*3\s*;/.test(code)] },
    { starter: `#include <iostream>\n#include <string>\n\n// Create lengthOf here\n\nint main() {\n    std::cout << lengthOf("coaster");\n}`, hint: `int lengthOf(const std::string& text) {\n    return text.size();\n}`, validate: code => [/int\s+lengthOf\s*\(\s*const\s+std::string\s*&\s*text\s*\)/.test(code), /return\s+text\.size\s*\(\s*\)\s*;/.test(code), /lengthOf\s*\(\s*"coaster"\s*\)/.test(code)] },
    { starter: `#include <iostream>\n\nint add(int a, int b) {\n    return a + b;\n}\n\n// Create addThree here\n\nint main() {\n    std::cout << addThree(1, 2, 3);\n}`, hint: `int addThree(int a, int b, int c) {\n    return add(add(a, b), c);\n}`, validate: code => [/int\s+addThree\s*\(\s*int\s+a\s*,\s*int\s+b\s*,\s*int\s+c\s*\)/.test(code), /return\s+add\s*\(\s*add\s*\(\s*a\s*,\s*b\s*\)\s*,\s*c\s*\)\s*;/.test(code), /addThree\s*\(\s*1\s*,\s*2\s*,\s*3\s*\)/.test(code)] },
    { starter: `#include <iostream>\n\n// Create seatsLeft here\n\nint main() {\n    std::cout << seatsLeft(24, 19);\n}`, hint: `int seatsLeft(int total, int occupied) {\n    return total - occupied;\n}`, validate: code => [/int\s+seatsLeft\s*\(\s*int\s+total\s*,\s*int\s+occupied\s*\)/.test(code), /return\s+total\s*-\s*occupied\s*;/.test(code), /seatsLeft\s*\(\s*24\s*,\s*19\s*\)/.test(code)] },
  ],
  [
    { starter: mainShell(`    int value = 10;\n\n    // Create and change a reference`), hint: `int& alias = value;\n    alias = 20;\n    std::cout << value;`, validate: code => [/int\s*&\s*alias\s*=\s*value\s*;/.test(code), /alias\s*=\s*20\s*;/.test(code), /std::cout\s*<<\s*value/.test(code)] },
    { starter: `#include <iostream>\n\n// Create increment here\n\nint main() {\n    int value = 5;\n    increment(value);\n    std::cout << value;\n}`, hint: `void increment(int& value) {\n    ++value;\n}`, validate: code => [/void\s+increment\s*\(\s*int\s*&\s*value\s*\)/.test(code), /(?:\+\+value|value\+\+)/.test(code), /increment\s*\(\s*value\s*\)/.test(code)] },
    { starter: `#include <iostream>\n\n// Create swapValues here\n\nint main() {\n    int a = 1, b = 2;\n    swapValues(a, b);\n    std::cout << a << b;\n}`, hint: `void swapValues(int& a, int& b) {\n    int temp = a;\n    a = b;\n    b = temp;\n}`, validate: code => [/void\s+swapValues\s*\(\s*int\s*&\s*a\s*,\s*int\s*&\s*b\s*\)/.test(code), /int\s+temp\s*=\s*a\s*;/.test(code), /a\s*=\s*b\s*;/.test(code) && /b\s*=\s*temp\s*;/.test(code)] },
    { starter: mainShell(`    int value = 42;\n\n    // Create a pointer`), hint: `int* ptr = &value;\n    std::cout << ptr;`, validate: code => [/int\s*\*\s*ptr\s*=\s*&\s*value\s*;/.test(code), /std::cout\s*<<\s*ptr/.test(code), hasReturn(code)] },
    { starter: mainShell(`    int value = 42;\n    int* ptr = &value;\n\n    // Print the pointed value`), hint: `std::cout << *ptr;`, validate: code => [/int\s*\*\s*ptr\s*=\s*&\s*value/.test(code), /std::cout\s*<<\s*\*\s*ptr\s*;/.test(code), hasReturn(code)] },
    { starter: mainShell(`    int value = 10;\n    int* ptr = &value;\n\n    // Change value through ptr`), hint: `*ptr = 25;\n    std::cout << value;`, validate: code => [/\*\s*ptr\s*=\s*25\s*;/.test(code), /std::cout\s*<<\s*value/.test(code), hasReturn(code)] },
    { starter: mainShell(`    int* ptr = nullptr;\n\n    // Check ptr before dereferencing`), hint: `if (ptr != nullptr) {\n        std::cout << *ptr;\n    }`, validate: code => [/int\s*\*\s*ptr\s*=\s*nullptr\s*;/.test(code), /if\s*\(\s*ptr\s*!=\s*nullptr\s*\)/.test(code), /std::cout\s*<<\s*\*\s*ptr/.test(code)] },
    { starter: `#include <iostream>\n#include <string>\n\n// Create printName here\n\nint main() {\n    std::string name = "Ada";\n    printName(name);\n}`, hint: `void printName(const std::string& name) {\n    std::cout << name;\n}`, validate: code => [/void\s+printName\s*\(\s*const\s+std::string\s*&\s*name\s*\)/.test(code), /std::cout\s*<<\s*name/.test(code), /printName\s*\(\s*name\s*\)/.test(code)] },
    { starter: mainShell(`    int numbers[3] = {4, 5, 6};\n    int* ptr = numbers;\n\n    // Print the second element through ptr`), hint: `std::cout << *(ptr + 1);`, validate: code => [/int\s+numbers\s*\[\s*3\s*\]/.test(code), /int\s*\*\s*ptr\s*=\s*numbers\s*;/.test(code), /std::cout\s*<<\s*\*\s*\(\s*ptr\s*\+\s*1\s*\)/.test(code)] },
    { starter: `#include <iostream>\n\n// Create addPassenger here\n\nint main() {\n    int passengers = 7;\n    addPassenger(passengers);\n    std::cout << passengers;\n}`, hint: `void addPassenger(int& count) {\n    ++count;\n}`, validate: code => [/void\s+addPassenger\s*\(\s*int\s*&\s*count\s*\)/.test(code), /(?:\+\+count|count\+\+)/.test(code), /addPassenger\s*\(\s*passengers\s*\)/.test(code)] },
  ],
  [
    { starter: `#include <iostream>\n\n// Create class Greeter here\n\nint main() {\n    Greeter g;\n    g.sayHi();\n}`, hint: `class Greeter {\npublic:\n    void sayHi() { std::cout << "Hi"; }\n};`, validate: code => [/class\s+Greeter\s*\{/.test(code), /public\s*:/.test(code), /void\s+sayHi\s*\(\s*\)[\s\S]*"Hi"/.test(code)] },
    { starter: `#include <iostream>\n\n// Create class Ride here\n\nint main() {\n    Ride ride;\n    std::cout << ride.speed();\n}`, hint: `class Ride {\npublic:\n    int speed() const { return speed_; }\nprivate:\n    int speed_ = 10;\n};`, validate: code => [/class\s+Ride\s*\{/.test(code), /private\s*:[\s\S]*int\s+speed_\s*=\s*10/.test(code), /int\s+speed\s*\(\s*\)\s*const/.test(code)] },
    { starter: `#include <iostream>\n\n// Create class Ride here\n\nint main() {\n    Ride ride(24);\n}`, hint: `class Ride {\npublic:\n    Ride(int seats) { seats_ = seats; }\nprivate:\n    int seats_;\n};`, validate: code => [/class\s+Ride/.test(code), /Ride\s*\(\s*int\s+seats\s*\)/.test(code), /seats_\s*=\s*seats\s*;/.test(code)] },
    { starter: `#include <iostream>\n\n// Create class Ride here\n\nint main() {\n    Ride ride(24);\n}`, hint: `class Ride {\npublic:\n    Ride(int seats) : seats_(seats) {}\nprivate:\n    int seats_;\n};`, validate: code => [/class\s+Ride/.test(code), /Ride\s*\(\s*int\s+seats\s*\)\s*:\s*seats_\s*\(\s*seats\s*\)/.test(code), /private\s*:[\s\S]*int\s+seats_/.test(code)] },
    { starter: `#include <iostream>\n\n// Create class Ride here\n\nint main() {\n    Ride ride(24);\n    std::cout << ride.capacity();\n}`, hint: `class Ride {\npublic:\n    Ride(int seats) : seats_(seats) {}\n    int capacity() const { return seats_; }\nprivate:\n    int seats_;\n};`, validate: code => [/Ride\s*\(\s*int\s+seats\s*\)\s*:\s*seats_/.test(code), /int\s+capacity\s*\(\s*\)\s*const/.test(code), /return\s+seats_\s*;/.test(code)] },
    { starter: `#include <iostream>\n\n// Create class Counter here\n\nint main() {\n    Counter counter;\n    counter.increment();\n    std::cout << counter.value();\n}`, hint: `class Counter {\npublic:\n    void increment() { ++value_; }\n    int value() const { return value_; }\nprivate:\n    int value_ = 0;\n};`, validate: code => [/class\s+Counter/.test(code), /void\s+increment\s*\(\s*\)[\s\S]*\+\+value_/.test(code), /int\s+value\s*\(\s*\)\s*const[\s\S]*return\s+value_/.test(code)] },
    { starter: `#include <iostream>\n\n// Create class Ride here\n\nint main() {\n    Ride ride;\n    ride.setSpeed(25);\n    std::cout << ride.speed();\n}`, hint: `class Ride {\npublic:\n    void setSpeed(int speed) { speed_ = speed; }\n    int speed() const { return speed_; }\nprivate:\n    int speed_ = 0;\n};`, validate: code => [/void\s+setSpeed\s*\(\s*int\s+speed\s*\)/.test(code), /speed_\s*=\s*speed\s*;/.test(code), /int\s+speed\s*\(\s*\)\s*const/.test(code)] },
    { starter: `#include <iostream>\n\n// Create class Ride here\n\nint main() {\n    Ride slow(10);\n    Ride fast(30);\n    std::cout << slow.speed() << fast.speed();\n}`, hint: `class Ride {\npublic:\n    Ride(int speed) : speed_(speed) {}\n    int speed() const { return speed_; }\nprivate:\n    int speed_;\n};`, validate: code => [/Ride\s+slow\s*\(\s*10\s*\)/.test(code) && /Ride\s+fast\s*\(\s*30\s*\)/.test(code), /Ride\s*\(\s*int\s+speed\s*\)\s*:\s*speed_/.test(code), /slow\.speed\s*\(\s*\)[\s\S]*fast\.speed\s*\(\s*\)/.test(code)] },
    { starter: `#include <iostream>\n\n// Create class Rectangle here\n\nint main() {\n    Rectangle shape(4, 5);\n    std::cout << shape.area();\n}`, hint: `class Rectangle {\npublic:\n    Rectangle(int width, int height) : width_(width), height_(height) {}\n    int area() const { return width_ * height_; }\nprivate:\n    int width_;\n    int height_;\n};`, validate: code => [/Rectangle\s*\(\s*int\s+width\s*,\s*int\s+height\s*\)/.test(code), /width_\s*\(\s*width\s*\)[\s\S]*height_\s*\(\s*height\s*\)/.test(code), /return\s+width_\s*\*\s*height_\s*;/.test(code)] },
    { starter: `#include <iostream>\n\n// Create class Ride here\n\nint main() {\n    Ride coaster(24);\n    std::cout << coaster.capacity();\n}`, hint: `class Ride {\npublic:\n    Ride(int seats) : seats_(seats) {}\n    int capacity() const { return seats_; }\nprivate:\n    int seats_;\n};`, validate: code => [/class\s+Ride\s*\{[\s\S]*public\s*:/.test(code), /Ride\s*\(\s*int\s+seats\s*\)\s*:\s*seats_\s*\(\s*seats\s*\)/.test(code), /int\s+capacity\s*\(\s*\)\s*const\s*\{\s*return\s+seats_\s*;\s*\}/.test(code)] },
  ],
];

export const taskCheckHints: string[][][] = [
  [
    [`int main()`, `std::cout << "Hello, C++!";`, `return 0;`],
    [`int main()`, `std::cout << "My first program";`, `return 0;`],
    [`std::cout <<`, `"Score: " << 10`, `;`],
    [`std::cout <<`, `"Line 1\\nLine 2"`, `return 0;`],
    [`std::cout × 2`, `std::cout << "A";`, `std::cout << "B";`],
    [`std::cout <<`, `std::cout << 42;`, `42 ≠ "42"`],
    [`std::cout <<`, `2 + 3`, `return 0;`],
    [`std::cout <<`, `"Cars: " << 3`, `;`],
    [`std::cout <<`, `"Ready" << std::endl`, `return 0;`],
    [`#include <iostream>\nint main()`, `std::cout << "I can code!";`, `return 0;`],
  ],
  [
    [`int age = 20;`, `std::cout << age;`, `return 0;`],
    [`double price = 4.5;`, `std::cout << price;`, `return 0;`],
    [`bool open = true;`, `std::cout << open;`, `return 0;`],
    [`#include <string>`, `std::string name = "Alex";`, `std::cout << name;`],
    [`int score = 10;`, `score = 15;`, `std::cout << score;`],
    [`const int seats = 24;`, `std::cout << seats;`, `return 0;`],
    [`int a = 7;\nint b = 5;`, `std::cout << a + b;`, `return 0;`],
    [`double total = 10.0;`, `int count = 4;`, `std::cout << total / count;`],
    [`int points = 5;`, `points += 3;`, `std::cout << points;`],
    [`int visitors = 12;`, `double price = 2.5;`, `std::cout << visitors * price;`],
  ],
  [
    [`if (age >= 18)`, `std::cout << "Adult";`, `{ ... }`],
    [`if (score >= 50)`, `else { ... }`, `"Pass" + "Fail"`],
    [`if (secret == 7)`, `std::cout << "Correct";`, `return 0;`],
    [`age >= 12`, `&& height >= 140`, `std::cout << "Allowed";`],
    [`for (int car = 1;`, `car <= 3; ++car`, `std::cout << car;`],
    [`for (int i = 0;`, `i < 5; ++i`, `std::cout << i;`],
    [`while (count < 3)`, `std::cout << count;`, `++count;`],
    [`for (int i = 1; i <= 5;`, `sum += i;`, `std::cout << sum;`],
    [`for (...)`, `if (i == 3) continue;`, `std::cout << i;`],
    [`int count = 3;`, `count >= 1; --count`, `std::cout << count;`],
  ],
  [
    [`void greet()`, `std::cout << "Hi";`, `greet();`],
    [`void greet(std::string name)`, `std::cout << name;`, `greet("Alex");`],
    [`int doubleNumber(int number)`, `return number * 2;`, `doubleNumber(4)`],
    [`int add(int a, int b)`, `return a + b;`, `add(3, 5)`],
    [`bool isAdult(int age)`, `return age >= 18;`, `isAdult(20)`],
    [`int square(int value)`, `return value * value;`, `int result = square(6);`],
    [`int triple(int value);`, `int triple(int value) { ... }`, `return value * 3;`],
    [`int lengthOf(const std::string& text)`, `return text.size();`, `lengthOf("coaster")`],
    [`int addThree(int a, int b, int c)`, `return add(add(a, b), c);`, `addThree(1, 2, 3)`],
    [`int seatsLeft(int total, int occupied)`, `return total - occupied;`, `seatsLeft(24, 19)`],
  ],
  [
    [`int& alias = value;`, `alias = 20;`, `std::cout << value;`],
    [`void increment(int& value)`, `++value;`, `increment(value);`],
    [`void swapValues(int& a, int& b)`, `int temp = a;`, `a = b; b = temp;`],
    [`int* ptr = &value;`, `std::cout << ptr;`, `return 0;`],
    [`int* ptr = &value;`, `std::cout << *ptr;`, `return 0;`],
    [`*ptr = 25;`, `std::cout << value;`, `return 0;`],
    [`int* ptr = nullptr;`, `if (ptr != nullptr)`, `std::cout << *ptr;`],
    [`void printName(const std::string& name)`, `std::cout << name;`, `printName(name);`],
    [`int numbers[3]`, `int* ptr = numbers;`, `std::cout << *(ptr + 1);`],
    [`void addPassenger(int& count)`, `++count;`, `addPassenger(passengers);`],
  ],
  [
    [`class Greeter { ... };`, `public:`, `void sayHi() { std::cout << "Hi"; }`],
    [`class Ride { ... };`, `private: int speed_ = 10;`, `int speed() const`],
    [`class Ride { ... };`, `Ride(int seats)`, `seats_ = seats;`],
    [`class Ride { ... };`, `Ride(int seats) : seats_(seats)`, `private: int seats_;`],
    [`Ride(int seats) : seats_(seats)`, `int capacity() const`, `return seats_;`],
    [`class Counter { ... };`, `void increment() { ++value_; }`, `int value() const { return value_; }`],
    [`void setSpeed(int speed)`, `speed_ = speed;`, `int speed() const`],
    [`Ride slow(10);\nRide fast(30);`, `Ride(int speed) : speed_(speed)`, `slow.speed() + fast.speed()`],
    [`Rectangle(int width, int height)`, `width_(width), height_(height)`, `return width_ * height_;`],
    [`class Ride { public: ... };`, `Ride(int seats) : seats_(seats)`, `int capacity() const { return seats_; }`],
  ],
];

export const taskOutputs: string[][] = [
  [
    "Hello, C++!", "My first program", "Score: 10", "Line 1\nLine 2", "AB",
    "42", "5", "Cars: 3", "Ready", "I can code!",
  ],
  [
    "20", "4.5", "1", "Alex", "15", "24", "12", "2.5", "8", "30",
  ],
  [
    "Adult", "Pass", "Correct", "Allowed", "123", "01234", "012", "15", "1245", "321",
  ],
  [
    "Hi", "Alex", "8", "8", "1", "36", "9", "7", "6", "5",
  ],
  [
    "20", "6", "21", "0x...", "42", "25", "", "Ada", "5", "8",
  ],
  [
    "Hi", "10", "", "", "24", "1", "25", "1030", "20", "24",
  ],
];
