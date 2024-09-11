#Understanding URL Matching with Regex

Regular expressions (Regex) are powerful tools for pattern matching in strings. Lets break down the components of a regex desing to match URLs, explaning each part's role in the process.

### The regex pattern for matching URLs is:
```
/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/
```
this pattern checks for valid URLs, whichmay or may not include http, https, varius domains, and paths.

## Table of contents
1. [Protocol](#protocol)
2. [Domain Name](#domain-name)
3. [Top-Level Domain](#top-level-domain) 
4. [Path](#path)
5. [About the author](#About-the-author)

## Protocol
### Regex component:
```
^(https?:\/\/)?
```
### Explanation:
This part of the regex is responsible for matching the protocol of the URL, which is either http or https. The `s` in the htttps id optional, as denoted by the `?` following it. This component is not mandatory in URLs, so the entire group followed by `?` maks it optional. 

#### Examples:
* http://
* https://

## Domain Name:

###Regex Component:
```
([\da-z\.-]+)
```
### Explanation:
This section matches the domain name, which can include any alphanumeric character (`\d` for digits and `a-z` for lettes), hyphens, and periods. The `+` ensures that one or more characters must be present.

#### Examples:
* example
* test-site

##Top-Level Domain

### Regex Component:
``` 
([a-z\.]{2,6})
```

### Explanation:
This part matches the top-level doamin of a URL, which must be between `2` and `6` tetters loong. It includes domains such as `.com`, `.org`, `.info`, etc.

#### Examples:
* .com
* .gov

## Path
### Regex Component:
```
([\/\w \.-]*)*\/?$
```
### Explanation: 
The path component matches any sequence of alphanumeric characters, underscores, periodes,  and hyphens that form the path in a URL. It's followed by an optional `/`, and  the entire pattern can appear zero or more times as indicated by the outer `*`.

#### Examples:
* ./folder/page
* /image.png
* /

## About the Author

For any questions, please contact me with the information below:

- GitHub: [Robert-Ulloa](https://github.com/Robert-Ulloa)
- Email: roanuc8@gmail.com
- LinkedIn: [Roberto Ulloa](https://www.linkedin.com/in/roberto-ulloa/)












