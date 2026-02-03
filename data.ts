import { Module, ContentType } from './types';

export const courseData: Module[] = [
  {
    id: 'unit-1',
    title: 'Web Architecture & Design',
    icon: 'Server',
    lessons: [
      {
        id: 'arch-basics',
        title: 'Architectures & Components',
        description: 'Deep dive into 2-Tier, N-Tier, Client-Side vs Server-Side.',
        blocks: [
          {
            type: ContentType.Text,
            title: "Web Application Components",
            content: "A web application consists of two main sides: Client-Side and Server-Side."
          },
          {
            type: ContentType.Table,
            title: "Client-Side vs Server-Side",
            content: `Feature|Client-Side|Server-Side
Execution|Runs in the User's Browser (Chrome, Firefox)|Runs on the Web Server (Apache, IIS, Node)
Languages|HTML, CSS, JavaScript|PHP, Java (JSP), Python, C#, Node.js
Responsibility|UI/UX, Presentation, User Input, Simple Validation|Business Logic, Database Access, Authentication, Security
Examples|Validation, Animations, Dynamic Menus|Login processing, Saving to Database, API handling`
          },
          {
            type: ContentType.Text,
            title: "2-Tier Architecture",
            content: "In a 2-Tier architecture, the client communicates directly with the database server. The business logic is often buried inside the user interface on the client or within the database as stored procedures.\n\n**Pros:** Simple to build.\n**Cons:** Hard to scale, security risks (direct DB access)."
          },
          {
            type: ContentType.Text,
            title: "N-Tier Architecture",
            content: "N-Tier (Multi-Tier) architecture separates the application into logical layers (tiers). The most common is the 3-Tier architecture:"
          },
          {
            type: ContentType.List,
            content: [
              "Presentation Tier (Client): User Interface.",
              "Application/Logic Tier (Server): Business rules, data processing.",
              "Data Tier (Database): Storing and retrieving data."
            ]
          },
          {
            type: ContentType.Note,
            content: "Exam Tip: N-Tier provides better scalability, security, and maintainability compared to 2-Tier because layers are decoupled."
          }
        ],
        quiz: [
          {
            id: 1,
            question: "Which component runs on the user's computer?",
            options: ["Server-side Script", "Database", "Client-side Script", "Operating System"],
            correctIndex: 2,
            explanation: "Client-side scripts (like JavaScript) run in the user's web browser."
          },
          {
            id: 2,
            question: "In a 3-tier architecture, where does the Business Logic reside?",
            options: ["Presentation Tier", "Data Tier", "Application Tier", "Client Tier"],
            correctIndex: 2,
            explanation: "The Application Tier (Middle Tier) handles business logic."
          }
        ]
      },
      {
        id: 'protocols-mvc',
        title: 'Protocols & MVC Pattern',
        description: 'HTTP, TCP/IP and the Model-View-Controller pattern.',
        blocks: [
          {
            type: ContentType.Text,
            title: "Networks & Protocols",
            content: "The web relies on standard protocols. **HTTP (HyperText Transfer Protocol)** is the foundation of data communication for the WWW. It is a stateless protocol."
          },
          {
            type: ContentType.List,
            content: [
              "HTTP: Transferring web pages.",
              "FTP: File Transfer Protocol (uploading/downloading files).",
              "SMTP: Simple Mail Transfer Protocol (sending emails).",
              "TCP/IP: Transmission Control Protocol/Internet Protocol (basic connectivity)."
            ]
          },
          {
            type: ContentType.Text,
            title: "MVC Pattern",
            content: "MVC is a design pattern that separates an application into three components to minimize dependencies."
          },
          {
            type: ContentType.Note,
            content: "Exam Definition: MVC stands for Model-View-Controller. It isolates the application logic from the user interface."
          },
          {
            type: ContentType.Table,
            title: "MVC Components",
            content: `Component|Function|Example
Model|Manages Data & Logic|Database code, Class definitions (User, Product)
View|Displays Data (UI)|HTML pages, JSP files, React Components
Controller|Handles Input & Interaction|Servlets, API endpoints, Event handlers`
          }
        ],
        quiz: [
          {
            id: 1,
            question: "Which protocol is stateless?",
            options: ["FTP", "HTTP", "TCP", "SMTP"],
            correctIndex: 1,
            explanation: "HTTP is stateless; the server does not remember previous requests from the same client."
          },
          {
            id: 2,
            question: "In MVC, what is the responsibility of the View?",
            options: ["Store data", "Process logic", "Present data to user", "Handle requests"],
            correctIndex: 2,
            explanation: "The View is responsible for the visualization of the data (User Interface)."
          }
        ]
      }
    ]
  },
  {
    id: 'unit-2',
    title: 'HTML5 Core',
    icon: 'Layout',
    lessons: [
      {
        id: 'html-structure',
        title: 'Structure & Text Formatting',
        description: 'Basic syntax, Document Structure, and Text tags.',
        blocks: [
          {
            type: ContentType.Text,
            title: "HTML5 Document Structure",
            content: "Every HTML5 document starts with `<!DOCTYPE html>`. The root element is `<html>`, containing `<head>` (metadata) and `<body>` (content)."
          },
          {
            type: ContentType.Code,
            language: "html",
            content: `<!DOCTYPE html>
<html>
<head>
    <title>Page Title</title>
    <meta charset="UTF-8">
</head>
<body>
    <h1>Main Heading</h1>
    <p>This is a paragraph.</p>
</body>
</html>`
          },
          {
            type: ContentType.Text,
            title: "Text Formatting Tags",
            content: "HTML provides tags to format text appearance and meaning."
          },
          {
            type: ContentType.List,
            content: [
              "<b>Bold</b>: Logical equivalent is <strong>.",
              "<i>Italic</i>: Logical equivalent is <em> (emphasis).",
              "<u>Underline</u>: Use specific CSS usually, but tag exists.",
              "<sup>Superscript</sup> and <sub>Subscript</sub>.",
              "<pre>: Preformatted text (preserves whitespace)."
            ]
          }
        ],
        quiz: [
          {
            id: 1,
            question: "Which tag defines the document type?",
            options: ["<html>", "<doctype>", "<!DOCTYPE html>", "<xml>"],
            correctIndex: 2,
            explanation: "<!DOCTYPE html> tells the browser the document is HTML5."
          }
        ]
      },
      {
        id: 'html-elements',
        title: 'Lists, Links, Images, Tables',
        description: 'Essential HTML content elements explained.',
        blocks: [
          {
            type: ContentType.Text,
            title: "Lists",
            content: "Three types: Ordered (<ol>), Unordered (<ul>), and Definition (<dl>)."
          },
          {
            type: ContentType.Code,
            language: "html",
            content: `<!-- Unordered List -->
<ul type="square">
  <li>Item 1</li>
</ul>
<!-- Definition List -->
<dl>
  <dt>Term</dt>
  <dd>Description of the term</dd>
</dl>`
          },
          {
            type: ContentType.Text,
            title: "Images & Links",
            content: "Images use the `<img>` tag (void tag, no closing). Links use `<a>` (anchor)."
          },
          {
            type: ContentType.Note,
            content: "Exam Important: The `alt` attribute in <img> is mandatory for accessibility. The `target='_blank'` attribute in <a> opens links in a new tab."
          },
          {
            type: ContentType.Text,
            title: "Tables",
            content: "Tables are defined with `<table>`, rows with `<tr>`, headers with `<th>`, and data with `<td>`. Use `rowspan` and `colspan` to merge cells."
          },
          {
            type: ContentType.Code,
            language: "html",
            content: `<table border="1">
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Alice</td>
    <td>22</td>
  </tr>
</table>`
          }
        ],
        quiz: [
          {
            id: 1,
            question: "Which attribute merges two columns in a table?",
            options: ["rowmerge", "colmerge", "colspan", "span"],
            correctIndex: 2,
            explanation: "colspan='2' will make a cell span across two columns."
          },
          {
            id: 2,
            question: "Which tag is used for a definition description?",
            options: ["<dt>", "<dd>", "<dl>", "<ds>"],
            correctIndex: 1,
            explanation: "<dd> stands for Definition Description, used inside a Definition List (<dl>)."
          }
        ]
      },
      {
        id: 'html-forms',
        title: 'Forms & Frames',
        description: 'Creating interactive forms and using iframes.',
        blocks: [
          {
            type: ContentType.Text,
            title: "HTML Forms",
            content: "Forms collect user input. The `<form>` tag wraps elements. Key attributes: `action` (server URL) and `method` (GET/POST)."
          },
          {
            type: ContentType.Table,
            title: "GET vs POST",
            content: `GET|POST
Appends data to URL|Sends data in HTTP body
Not secure (visible in history)|Secure (not visible in URL)
Limit on data length|No limit on data length
Used for search/retrieval|Used for submitting sensitive data`
          },
          {
            type: ContentType.Text,
            title: "Form Elements",
            content: "Common inputs: text, password, radio, checkbox, submit, reset, file, hidden."
          },
          {
            type: ContentType.Code,
            language: "html",
            content: `<form action="/submit" method="POST">
  Username: <input type="text" name="user"><br>
  Gender: 
  <input type="radio" name="gen" value="M"> Male
  <input type="radio" name="gen" value="F"> Female<br>
  <select name="city">
    <option>New York</option>
    <option>London</option>
  </select>
  <input type="submit" value="Send">
</form>`
          },
          {
            type: ContentType.Text,
            title: "Frames",
            content: "Traditionally `<frameset>` (obsolete in HTML5). Modern HTML5 uses `<iframe>` to embed another document within the current one."
          },
          {
            type: ContentType.Code,
            language: "html",
            content: `<iframe src="https://www.example.com" width="300" height="200"></iframe>`
          }
        ],
        quiz: [
          {
            id: 1,
            question: "Which method is best for sending passwords?",
            options: ["GET", "POST", "PUT", "SEND"],
            correctIndex: 1,
            explanation: "POST sends data in the body, hiding it from the URL bar, making it more secure for secrets."
          },
          {
            id: 2,
            question: "Which tag is used to create a dropdown list?",
            options: ["<list>", "<input type='dropdown'>", "<select>", "<option>"],
            correctIndex: 2,
            explanation: "The <select> tag creates the dropdown container, and <option> tags define the items."
          }
        ]
      }
    ]
  },
  {
    id: 'unit-3',
    title: 'CSS3 Styling',
    icon: 'Video',
    lessons: [
      {
        id: 'css-basics',
        title: 'Selectors & Levels',
        description: 'CSS Syntax, Inclusion methods, and Selectors.',
        blocks: [
          {
            type: ContentType.Text,
            title: "Levels of Style Sheets",
            content: "CSS can be applied in three ways (levels):"
          },
          {
            type: ContentType.List,
            content: [
              "Inline: Inside HTML tag using 'style' attribute. (Highest Priority)",
              "Internal/Embedded: Inside <style> tag in <head>.",
              "External: Linked via <link> tag. (Best for maintenance)"
            ]
          },
          {
            type: ContentType.Text,
            title: "CSS Selectors",
            content: "Selectors determine which HTML elements are styled."
          },
          {
            type: ContentType.Table,
            title: "Common Selectors",
            content: `Selector|Syntax|Example|Description
Element|tagname|p { }|Selects all <p> elements
Class|.classname|.info { }|Selects all elements with class="info"
ID|#idname|#header { }|Selects one element with id="header"
Universal|*|* { }|Selects ALL elements
Group|s1, s2|h1, h2 { }|Selects both h1 and h2`
          },
          {
            type: ContentType.Text,
            title: "Attribute Selectors (Forms)",
            content: "Useful for styling specific input types."
          },
          {
            type: ContentType.Code,
            language: "css",
            content: `/* Selects input fields with type="text" */
input[type="text"] {
  background-color: #f0f0f0;
}
/* Selects links with target="_blank" */
a[target="_blank"] {
  color: red;
}`
          }
        ],
        quiz: [
          {
            id: 1,
            question: "Which CSS inclusion method has the highest priority?",
            options: ["External", "Internal", "Inline", "Browser Default"],
            correctIndex: 2,
            explanation: "Inline styles overwrite internal and external styles."
          },
          {
            id: 2,
            question: "How do you select an element with id='demo'?",
            options: [".demo", "#demo", "demo", "*demo"],
            correctIndex: 1,
            explanation: "ID selectors use the hash (#) symbol."
          }
        ]
      },
      {
        id: 'css-box-props',
        title: 'Box Model & Properties',
        description: 'Box Model, Font, Color, List and Background properties.',
        blocks: [
          {
            type: ContentType.Text,
            title: "The CSS Box Model",
            content: "Every HTML element is a box. It consists of: Content, Padding (space inside), Border, and Margin (space outside)."
          },
          {
            type: ContentType.Code,
            language: "css",
            content: `div {
  width: 300px;        /* Content width */
  padding: 20px;       /* Space between content and border */
  border: 5px solid;   /* Thickness around padding */
  margin: 10px;        /* Space outside border */
}`
          },
          {
            type: ContentType.Text,
            title: "Styling Properties",
            content: "Key properties to know for the exam:"
          },
          {
            type: ContentType.List,
            content: [
              "Font: font-family, font-size, font-weight (bold), font-style (italic).",
              "Text: color, text-align, text-decoration (underline/none).",
              "Background: background-color, background-image: url('img.jpg'), background-repeat.",
              "List: list-style-type (circle, square, none), list-style-image."
            ]
          },
          {
            type: ContentType.Code,
            language: "css",
            content: `ul {
  list-style-type: square;
}
p {
  font-family: Arial, sans-serif;
  color: #FF0000; /* Red */
  text-align: center;
}`
          }
        ],
        quiz: [
          {
            id: 1,
            question: "Which property controls the space INSIDE the border?",
            options: ["Margin", "Padding", "Spacing", "Outline"],
            correctIndex: 1,
            explanation: "Padding is the space between the content and the border. Margin is outside."
          },
          {
            id: 2,
            question: "How do you remove the bullet points from a list?",
            options: ["list-style-type: none", "text-decoration: none", "bullet: none", "list: empty"],
            correctIndex: 0,
            explanation: "list-style-type: none removes default markers."
          }
        ]
      }
    ]
  },
  {
    id: 'unit-4',
    title: 'JavaScript Fundamentals',
    icon: 'Code',
    lessons: [
      {
        id: 'js-intro',
        title: 'Intro & Functions',
        description: 'JS Syntax, Variables, and Functions.',
        blocks: [
          {
            type: ContentType.Text,
            title: "Introduction",
            content: "JavaScript is a lightweight, interpreted programming language. It is designed for creating network-centric applications. It is complementary to and integrated with Java and HTML."
          },
          {
            type: ContentType.Code,
            language: "javascript",
            content: `// Variables
var x = 10; 
let y = 20; // Block scoped
const PI = 3.14;

// Output
document.write("Hello World");
console.log(x);
alert("Warning");`
          },
          {
            type: ContentType.Text,
            title: "Functions",
            content: "Functions are blocks of code designed to perform a particular task. They are executed when 'invoked' (called)."
          },
          {
            type: ContentType.Code,
            language: "javascript",
            content: `function add(a, b) {
  return a + b;
}

var result = add(5, 10); // result is 15`
          }
        ],
        quiz: [
          {
            id: 1,
            question: "Which keyword declares a block-scoped variable?",
            options: ["var", "let", "global", "dim"],
            correctIndex: 1,
            explanation: "'let' and 'const' are block-scoped, whereas 'var' is function-scoped."
          }
        ]
      },
      {
        id: 'js-objects-arrays',
        title: 'Arrays & Built-in Objects',
        description: 'String, Math, Date objects and Array manipulation.',
        blocks: [
          {
            type: ContentType.Text,
            title: "Arrays",
            content: "Arrays store multiple values in a single variable. Indices start at 0."
          },
          {
            type: ContentType.Code,
            language: "javascript",
            content: `var fruits = ["Apple", "Banana", "Orange"];
fruits.push("Mango"); // Adds to end
fruits.pop(); // Removes last element
var len = fruits.length; // Property, not method`
          },
          {
            type: ContentType.Text,
            title: "Built-in Objects",
            content: "JavaScript has several built-in objects:"
          },
          {
            type: ContentType.Table,
            title: "Common Objects",
            content: `Object|Method|Description
String|toUpperCase()|Converts to uppercase
String|charAt(0)|Returns char at index
Math|Math.random()|Random number between 0 and 1
Math|Math.round(4.7)|Rounds to nearest integer (5)
Date|new Date()|Current date and time
Date|getDay()|Returns day of week (0-6)`
          }
        ],
        quiz: [
          {
            id: 1,
            question: "What is the correct way to round 7.25 to the nearest integer?",
            options: ["Math.rnd(7.25)", "Math.round(7.25)", "round(7.25)", "Math.floor(7.25)"],
            correctIndex: 1,
            explanation: "Math.round() rounds to the nearest integer."
          }
        ]
      },
      {
        id: 'js-regex',
        title: 'Regular Expressions',
        description: 'Pattern matching with RegExp.',
        blocks: [
          {
            type: ContentType.Text,
            title: "RegExp Basics",
            content: "A Regular Expression is a sequence of characters that forms a search pattern. Used for validation (email, phone)."
          },
          {
            type: ContentType.Code,
            language: "javascript",
            content: `var patt = /w3schools/i; // i = case insensitive
var str = "Visit W3Schools";
var result = patt.test(str); // Returns true`
          },
          {
            type: ContentType.Text,
            title: "Modifiers & Patterns",
            content: "Common patterns:\n`[abc]` - Find any character between brackets\n`[0-9]` - Find any digit\n`^` - Start of string\n`$` - End of string"
          }
        ],
        quiz: [
          {
            id: 1,
            question: "Which modifier performs a case-insensitive match?",
            options: ["g", "m", "i", "c"],
            correctIndex: 2,
            explanation: "'i' stands for case-insensitive."
          }
        ]
      }
    ]
  },
  {
    id: 'unit-5',
    title: 'DOM & Dynamic Scripting',
    icon: 'Globe',
    lessons: [
      {
        id: 'dom-manipulation',
        title: 'Document Object Model',
        description: 'Understanding the DOM Tree and manipulating nodes.',
        blocks: [
          {
            type: ContentType.Text,
            title: "The DOM Tree",
            content: "The DOM creates a tree-like representation of the HTML document. JavaScript can change all HTML elements, attributes, and styles."
          },
          {
            type: ContentType.Code,
            language: "javascript",
            content: `// Accessing Elements
var el = document.getElementById("demo");
var els = document.getElementsByTagName("p");

// Changing Content
el.innerHTML = "New Text";

// Changing Style
el.style.color = "blue";
el.style.fontSize = "20px";`
          },
          {
            type: ContentType.Text,
            title: "Dynamic Documents (Creation)",
            content: "You can create and append new elements dynamically."
          },
          {
            type: ContentType.Code,
            language: "javascript",
            content: `// Create a new <p> element
var newPara = document.createElement("p");
var node = document.createTextNode("This is new.");
newPara.appendChild(node);

// Append to an existing div
var element = document.getElementById("div1");
element.appendChild(newPara);`
          },
          {
            type: ContentType.Note,
            content: "Exam Concept: 'Dynamic Documents' refers to pages that update their content/style on the fly using DOM manipulation without reloading."
          }
        ],
        quiz: [
          {
            id: 1,
            question: "Which property is used to change the HTML content of an element?",
            options: ["innerText", "innerHTML", "content", "value"],
            correctIndex: 1,
            explanation: "innerHTML sets or returns the HTML content (including tags) of an element."
          }
        ]
      },
      {
        id: 'events-validation',
        title: 'Events & Validation',
        description: 'Handling user events and validating forms.',
        blocks: [
          {
            type: ContentType.Text,
            title: "Event Handling",
            content: "Events are things that happen to HTML elements (clicks, loads, input). JS can 'listen' for these."
          },
          {
            type: ContentType.Code,
            language: "javascript",
            content: `<button onclick="this.innerHTML='Clicked!'">Click Me</button>

// OR in JS
document.getElementById("btn").onclick = function() {
    alert("Hello");
};`
          },
          {
            type: ContentType.Text,
            title: "Common Events",
            content: "`onclick`, `onmouseover`, `onmouseout`, `onload` (page finished loading), `onchange` (input field changed)."
          },
          {
            type: ContentType.Text,
            title: "Form Validation",
            content: "Ensuring user input is correct before sending to server."
          },
          {
            type: ContentType.Code,
            language: "javascript",
            content: `function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}`
          }
        ],
        quiz: [
          {
            id: 1,
            question: "Which event occurs when a user clicks on an HTML element?",
            options: ["onchange", "onmouseclick", "onclick", "onmouseover"],
            correctIndex: 2,
            explanation: "onclick is the standard event for mouse clicks."
          },
          {
            id: 2,
            question: "Why is client-side validation important?",
            options: ["Reduces server load", "It is more secure", "Required by HTML5", "It looks better"],
            correctIndex: 0,
            explanation: "It prevents invalid data from reaching the server, saving bandwidth and processing time (UX speed)."
          }
        ]
      }
    ]
  }
];