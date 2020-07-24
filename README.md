# jsontostringtable
Convert your JSON Object Arrays to a String represented in a Table form that can be printed on Console.

## Install with npm
`npm install jsontostringtable --save`

## Usage
**Sample Code**
```javascript
const tablize = require('jsontostringtable');
let people = [
    {
        name: "Jeetu",
        email: "jeetu@doodl.in",
        location: "Bangalore"
    },
    {
        name: "Gujju Bhai",
        email: "gjcool@doodl.in",
        location: "Surat"
    },
    {
        name: "Naman",
        email: "upsc@doodl.in",
        location: "Jhansi"
    },
    {
        name: "Takla",
        email: "taklu@doodl.in",
        location: "Orchha"
    }
];
console.log(tablize(people));
```

**Output**
```
--------------------------------------------
| name       | email           | location  |
--------------------------------------------
| Jeetu      | jeetu@doodl.in  | Bangalore |
| Gujju Bhai | gjcool@doodl.in | Surat     |
| Naman      | upsc@doodl.in   | Jhansi    |
| Takla      | taklu@doodl.in  | Orchha    |
--------------------------------------------
```
