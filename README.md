# Unexpected Type Coercion in JavaScript

This example demonstrates a common JavaScript error caused by loose typing and automatic type coercion.  When adding a number and a string, JavaScript concatenates them as strings rather than performing numerical addition.  This can lead to unexpected results and errors in your code.

## Bug Report

The provided code defines a simple function `foo` that adds two arguments. However, if one of the arguments is a string, the result is unexpected.  See the `bug.js` file for details.