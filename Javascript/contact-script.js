// Create input element for testing
let input = document.createElement('input');

// Create the supports object

let supports = {};

supports.autofocus = 'autofocus' in input;
supports.required = 'required' in input;
supports.placeholder = 'placeholder' in input;

// Fallback for autofocus attribute

if(!supports.autofocus) {
    // No Support
} 

// Fallback for required attribute

if(!supports.required) {
    // No Support
}

//Fallback for placeholder attribute

if(!supports.placeholder) {
    // No support
}