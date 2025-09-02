https://in.docworkspace.com/d/sIFH3uaTHAfTT3MUG?sa=601.1074   

Project Overview
• This project demonstrates a live, interactive
Basic Calculator.
• Built using Python's Tkinter library (GUI).
• Features:
• - Addition
• - Subtraction
• - Multiplication
• - Division (error handling for division by zero)
• - Clear button to reset input

Tools & Libraries
• - Python 3
• - Tkinter (Python's built-in GUI library)
• Why Tkinter?
• - Lightweight and simple
• - Comes pre-installed with Python
• - Easy to demonstrate live applications

Structure of Project
• 1. CalculatorApp class
• - Handles GUI layout
• - Manages button clicks and expressions
• 2. Buttons:
• - Digits (0-9)
• - Operations (+, -,
*
, /)
• - '
=
' to evaluate
• - 'C' to clear input
• 3. Error Handling
• - Displays 'Error' for invalid input or divide by zero
Code Example
• def click(self, item):
• if item ==
"
=
":
• try:
• result = str(eval(self.expression))
• self.input_text.set(result)
• self.expression = result
• except:
• self.input_text.set("Error")
• self.expression =
""
• else:
• self.expression += str(item)
• self.input_text.set(self.expression)

Live Demo Steps
• 1. Run the script: python calculator_gui.py
• 2. Calculator window opens
• 3. Enter numbers and choose operations
• 4. Press '
=
' to evaluate
• 5. Press 'C' to clear
• 6. Show divide by zero handling (e.g., 5 / 0)

Conclusion
• This live calculator project demonstrates:
• - GUI application development in Python
• - Real-time user interaction
• - Error handling in applications



• Extensions:
• - Add more functions (square root,
exponentiation)
• - Build a scientific calculator
• - Add modern GUI with libraries like PyQt or Kivy
