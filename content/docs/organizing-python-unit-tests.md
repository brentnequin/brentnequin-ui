---
title: Organizing Python Unit Tests
---

Here I will propose a way to organize unit tests with the use of a base test class that other test classes will inherit.

<!--more-->

## Organizing Unit Tests for Class Methods

Suppose the following class is to be tested:

```py
# my_class.py

class MyClass():
    
    def my_first_method(self):
        
        print("First")

    def my_second_method(self):
        
        print("Second")
```

One way to setup module for testing the class is by using a single class starting with a `setUp` method that instantiates the class being tests proceeded by all the test methods.

```py
# test_my_class.py

import unittest

from path.to.my_class import MyClass

class TestMyClassMethods(unittest.TestCase):

	def setUp(self):

		self.my_class = MyClass()

	def test_my_first_print_method(self):

		self.my_class.my_first_print_method()

	def test_my_second_print_method(self):

		self.my_class.my_second_print_method()
```

Of course this works and may pass for a class with just a few methods, but let's recognize the possible disadvantages:
* Test method names can get pretty long especially when there are a large number of methods to be tested and test method names need to be unique.
* Organizing and ordering tests...
* Setup logic before each test may vary - adding the setup logic specific to one test in the `setUp` method could interfere with the expected outcome of other tests. Alternatively we could just add the additional setup logic at the very beginning of the test method using it, but if we want another class to use that setup logic as well we will have to copy/paste wherever we need it which leads to repetitive, likely more illegible, and ultimately a ton of lines of code.

```py
# test_my_class.py

import unittest

from path.to.my_class import MyClass

class TestMyClassMethod(unittest.TestCase): # abstract test class

	def setUp(self):

		self.my_class = MyClass()

class TestMyFirstMethod(TestMyClassMethod): # test class

	def test_the_method(self):

		self.my_class.my_first_print_method()

class TestMySecondMethod(TestMyClassMethod): # test class

	def test_the_method(self):

		self.my_class.my_second_print_method()
```