# jsontostringtable
Convert your JSON Object Arrays to a String represented in a Table form that can be printed on Console.
## Usage
**Install the package**
`npm install jsontostringtable --save`

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
