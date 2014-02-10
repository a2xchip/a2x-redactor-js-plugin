# a2x-redactor-js-plugin 

## About 

This is the plugin for popular html5 wysiwig editor redactor v8.2.2. And adds some additional features to the editor. 

## Features

* Adds quote button to insert `blockquote` with `footer`;
* ...comming soon

## Usage 

You will need to clone jquery and redactor-js repository and include it as a dependency into your page. 

*HTML*

```html
...
<head>
<script type="text/javascript" src="//code.jquery.com/jquery-1.10.2.min.js"></script>
  <!-- Redactor is here -->
  <link rel="stylesheet" href="PATH_TO_REDACTOR/redactor-js/redactor/redactor.css" />
  <link rel="stylesheet" href="../stylesheets/a2x.redactor.plugin.css" />
  ...
  <script src="../javascripts/a2x.redactor.plugin.js"></script>
  <script src="PATH_TO_REDACTOR/redactor-js/redactor/redactor.js"></script>
</head>
...
<body>
  <textarea id="your-id"></textarea>
</body>
```

*javascript*

```javascript
  $(document).ready(
    function() {
    $('#your-id').redactor({
      plugins: ['a2x']
    });
  });
``` 

## See working demo on projects page

[http://a2xchip.github.io/a2x-redactor-js-plugin/]