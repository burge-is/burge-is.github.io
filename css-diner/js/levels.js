var levels = [
  {
    "helpTitle": "Select elements by their type",
    "selectorName": "Type Selector",
    "doThis": "Select the plates",
    "selector": "plate",
    "syntax": "A",
    "help": "Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.",
    "examples": [
      "<strong>div</strong> selects all <tag>div</tag> elements.",
      "<strong>p</strong> selects all <tag>p</tag> elements."
    ],
    "boardMarkup": "\n    <plate/>\n    <plate/>\n    "
  },
  {
    "doThis": "Select the bento boxes",
    "selector": "bento",
    "syntax": "A",
    "helpTitle": "Select elements by their type",
    "selectorName": "Type Selector",
    "help": "Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.",
    "examples": [
      "<strong>div</strong> selects all <tag>div</tag> elements.",
      "<strong>p</strong> selects all <tag>p</tag> elements."
    ],
    "boardMarkup": "\n    <bento/>\n    <plate/>\n    <bento/>\n    "
  },
  {
    "doThis": "Select the fancy plate",
    "selector": "#fancy",
    "selectorName": "ID Selector",
    "helpTitle": "Select elements with an ID",
    "syntax": "#id",
    "help": "Selects the element with a specific <strong>id</strong>. You can also combine the ID selector with the type selector.",
    "examples": [
      "<strong>#cool</strong> selects any element with <strong>id=\"cool\"</strong>",
      "<strong>ul#long</strong> selects <tag>ul id=\"long\"</tag>"
    ],
    "boardMarkup": "\n    <plate id=\"fancy\"/>\n    <plate/>\n    <bento/>\n    "
  },
  {
    "helpTitle": "Select an element inside another element",
    "selectorName": "Descendant Selector",
    "doThis": "Select the apple on the plate",
    "selector": "plate apple",
    "syntax": "A&nbsp;&nbsp;B",
    "help": "Selects all <strong>B</strong> inside of <strong>A</strong>. <strong>B</strong> is called a descendant because it is inside of another element.",
    "examples": [
      "<strong>p&nbsp;&nbsp;strong</strong> selects all <tag>strong</tag> elements that are inside of any <tag>p</tag>",
      "<strong>#fancy&nbsp;&nbsp;span</strong> selects any <tag>span</tag> elements that are inside of the element with <strong>id=\"fancy\"</strong>"
    ],
    "boardMarkup": "\n    <bento/>\n    <plate>\n      <apple/>\n    </plate>\n    <apple/>\n    "
  },
  {
    "doThis": "Select the pickle on the fancy plate",
    "selector": "#fancy pickle",
    "helpTitle": "Combine the Descendant & ID Selectors",
    "syntax": "#id&nbsp;&nbsp;A",
    "help": "You can combine any selector with the descendent selector.",
    "examples": [
      "<strong>#cool&nbsp;span</strong> selects all <tag>span</tag> elements that are inside of elements with <strong>id=\"cool\"</strong>"
    ],
    "boardMarkup": "\n    <bento>\n    <orange/>\n    </bento>\n    <plate id=\"fancy\">\n      <pickle/>\n    </plate>\n    <plate>\n      <pickle/>\n    </plate>\n    "
  },
  {
    "doThis": "Select the small apples",
    "selector": ".small",
    "selectorName": "Class Selector",
    "helpTitle": "Select elements by their class",
    "syntax": ".classname",
    "help": "The class selector selects all elements with that class attribute. Elements can only have one ID, but many classes.",
    "examples": [
      "<strong>.neato</strong> selects all elements with <strong>class=\"neato\"</strong>"
    ],
    "boardMarkup": "\n    <apple/>\n    <apple class=\"small\"/>\n    <plate>\n      <apple class=\"small\"/>\n    </plate>\n    <plate/>\n    "
  },
  {
    "doThis": "Select the small oranges",
    "selector": "orange.small",
    "helpTitle": "Combine the Class Selector",
    "syntax": "A.className",
    "help": "You can combine the class selector with other selectors, like the type selector.",
    "examples": [
      "<strong>ul.important</strong> selects all <tag>ul</tag> elements that have <strong>class=\"important\"</strong>",
      "<strong>#big.wide</strong> selects all elements with <strong>id=\"big\"</strong> that also have <strong>class=\"wide\"</strong>"
    ],
    "boardMarkup": "\n    <apple/>\n    <apple class=\"small\"/>\n    <bento>\n      <orange class=\"small\"/>\n    </bento>\n    <plate>\n      <orange/>\n    </plate>\n    <plate>\n      <orange class=\"small\"/>\n    </plate>"
  },
  {
    "doThis": "Select the small oranges in the bentos",
    "selector": "bento orange.small",
    "syntax": "Put your back into it!",
    "helpTitle": "You can do it...",
    "help": "Combine what you learned in the last few levels to solve this one!",
    "boardMarkup": "\n    <bento>\n      <orange/>\n    </bento>\n    <orange class=\"small\"/>\n    <bento>\n      <orange class=\"small\"/>\n    </bento>\n    <bento>\n      <apple class=\"small\"/>\n    </bento>\n    <bento>\n      <orange class=\"small\"/>\n    </bento>\n    "
  },
  {
    "doThis": "Select all the plates and bentos",
    "selector": "plate,bento",
    "selectorName": "Comma Combinator",
    "helpTitle": "Combine, selectors, with... commas!",
    "syntax": "A, B",
    "help": "Thanks to Shatner technology, this selects all <strong>A</strong> and <strong>B</strong> elements. You can combine any selectors this way, and you can specify more than two.",
    "examples": [
      "<strong>p, .fun</strong> selects all <tag>p</tag> elements as well as all elements with <strong>class=\"fun\"</strong>",
      "<strong>a, p, div</strong> selects all <tag>a</tag>, <tag>p</tag> and <tag>div</tag> elements"
    ],
    "boardMarkup": "\n    <pickle class=\"small\"/>\n    <pickle/>\n    <plate>\n      <pickle/>\n    </plate>\n    <bento>\n      <pickle/>\n    </bento>\n    <plate>\n      <pickle/>\n    </plate>\n    <pickle/>\n    <pickle class=\"small\"/>\n    "
  },
  // {
  //   "doThis": "Select all the things!",
  //   "selector": "*",
  //   "selectorName": "The Universal Selector",
  //   "helpTitle": "You can select everything!",
  //   "syntax": "*",
  //   "help": "You can select all elements with the universal selector! ",
  //   "examples": [
  //     "<strong>p *</strong> selects any element inside all <tag>p</tag> elements."
  //   ],
  //   "boardMarkup": "\n    <apple/>\n    <plate>\n      <orange class=\"small\" />\n    </plate>\n    <bento/>\n    <bento>\n      <orange/>\n    </bento>\n    <plate id=\"fancy\"/>\n    "
  // },
  // {
  //   "doThis": "Select everything on a plate",
  //   "selector": "plate *",
  //   "syntax": "A&nbsp;&nbsp;*",
  //   "helpTitle": "Combine the Universal Selector",
  //   "help": "This selects all elements inside of <strong>A</strong>.",
  //   "examples": [
  //     "<strong>p *</strong> selects every element inside all <tag>p</tag> elements.",
  //     "<strong>ul.fancy *</strong> selects every element inside all <tag>ul class=\"fancy\"</tag> elements."
  //   ],
  //   "boardMarkup": "\n    <plate id=\"fancy\">\n      <orange class=\"small\"/>\n    </plate>\n    <plate>\n      <pickle/>\n    </plate>\n    <apple class=\"small\"/>\n    <plate>\n      <apple/>\n    </plate>"
  // },
  {
    "selectorName": "Child Selector",
    "syntax": "A > B&nbsp;",
    "doThis": "Select the apple directly on a plate",
    "selector": "plate > apple",
    "helpTitle": "Select direct children of an element",
    "help": "You can select elements that are direct children of other elements. A child element is any element that is nested directly in another element. <br><br>Elements that are nested deeper than that are called descendant elements.",
    "examples": [
      "<strong>A > B</strong> selects all <strong>B</strong> that are a direct children <strong>A</strong>"
    ],
    "boardMarkup": "\n    <plate>\n      <bento>\n        <apple/>\n      </bento>\n    </plate>\n    <plate>\n      <apple/>\n    </plate>\n    <plate/>\n    <apple/>\n    <apple class=\"small\"/>\n    "
  },
  {
    "selectorName": "Nth Child Pseudo-selector",
    "helpTitle": "Select an element by its order in another element",
    "doThis": "Select the 3rd plate",
    "selector": ":nth-child(3)",
    "syntax": ":nth-child(A)",
    "help": "Selects the <strong>nth</strong> (Ex: 1st, 3rd, 12th etc.) child element in another element.",
    "examples": [
      "<strong>:nth-child(8)</strong> selects every element that is the 8th child of another element.",
      "<strong>div p:nth-child(2)</strong> selects the second <strong>p</strong> in every <strong>div</strong>"
    ],
    "boardMarkup": "\n    <plate/>\n    <plate/>\n    <plate/>\n    <plate id=\"fancy\"/>\n    "
  },
  {
    "selectorName": "Attribute Selector",
    "helpTitle": "Select all elements that have a specific attribute",
    "doThis": "Select the items for someone",
    "selector": "[for]",
    "syntax": "[attribute]",
    "help": "Attributes appear inside the opening tag of an element, like this: <tag>span attribute=\"value\"</tag>. An attribute does not always have a value, it can be blank!",
    "examples": [
      "<strong>a[href]</strong> selects all <tag>a</tag> elements that have a <strong>href=\"anything\"</strong> attribute.",
      "<strong>[type]</strong> selects all elements that have a <strong>type=\"anything\"</strong>. attribute"
    ],
    "boardMarkup": "\n    <bento><apple class=\"small\"/></bento>\n    <apple for=\"Ethan\"/>\n    <plate for=\"Alice\"><pickle/></plate>\n    <bento for=\"Clara\"><orange/></bento>\n    <pickle/>"
  },
  {
    "selectorName": "Attribute Selector",
    "helpTitle": "Select all elements that have a specific attribute",
    "doThis": "Select the plates for someone",
    "selector": "plate[for]",
    "syntax": "A[attribute]",
    "help": "Combine the attribute selector with another selector (like the tag name selector) by adding it to the end.",
    "examples": [
      "<strong>[value]</strong> selects all elements that have a <strong>value=\"anything\"</strong> attribute.",
      "<strong>a[href]</strong> selects all <tag>a</tag> elements that have a <strong>href=\"anything\"</strong> attribute.",
      "<strong>input[disabled]</strong> selects all <tag>input</tag> elements with the <strong>disabled</strong> attribute"
    ],
    "boardMarkup": "\n    <plate for=\"Sarah\"><pickle/></plate>\n    <plate for=\"Luke\"><apple/></plate>\n    <plate/>\n    <bento for=\"Steve\"><orange/></bento>\n    "
  },
  {
    "selectorName": "Attribute Value Selector",
    "helpTitle": "Select all elements that have a specific attribute value",
    "doThis": "Select Vitaly's meal",
    "selector": "[for=Vitaly]",
    "syntax": "[attribute=\"value\"]",
    "help": "Attribute selectors are case sensitive, each character must match exactly.",
    "examples": [
      "<strong>input[type=\"checkbox\"]</strong> selects all checkbox input elements."
    ],
    "boardMarkup": "\n    <apple for=\"Alexei\" />\n    <bento for=\"Albina\"><apple /></bento>\n    <bento for=\"Vitaly\"><orange/></bento>\n    <pickle/>\n    "
  },
  {
    "selectorName": "Attribute Starts With Selector",
    "helpTitle": "Select all elements with an attribute value that starts with specific characters",
    "doThis": "Select the items for names that start with 'Sa'",
    "selector": "[for^=\"Sa\"]",
    "syntax": "[attribute^=\"value\"]",
    "examples": [
      "<strong>.toy[category^=\"Swim\"]</strong> selects elements with class <strong>toy</strong> and either <strong>category=\"Swimwear</strong> or <strong>category=\"Swimming\"</strong>."
    ],
    "boardMarkup": "\n    <plate for=\"Sam\"><pickle/></plate>\n    <bento for=\"Sarah\"><apple class=\"small\"/></bento>\n    <bento for=\"Mary\"><orange/></bento>\n    "
  },
  {
    "selectorName": "Attribute Ends With Selector",
    "helpTitle": "Select all elements with an attribute value that ends with specific characters",
    "doThis": "Select the items for names that end with 'ato'",
    "selector": "[for$=\"ato\"]",
    "syntax": "[attribute$=\"value\"]",
    "help": "",
    "examples": [
      "<strong>img[src$=\".jpg\"]</strong> selects all images display a <strong>.jpg</strong> image."
    ],
    "boardMarkup": "\n    <apple class=\"small\"/>\n    <bento for=\"Hayato\"><pickle/></bento>\n    <apple for=\"Ryota\"></apple>\n    <plate for=\"Minato\"><orange/></plate>\n    <pickle class=\"small\"/>\n    "
  },
  {
    "selectorName": "Attribute Wildcard Selector",
    "helpTitle": "Select all elements with an attribute value that contains specific characters anywhere",
    "syntax": "[attribute*=\"value\"]",
    "doThis": "Select the meals for names that contain 'obb'",
    "selector": "[for*=\"obb\"]",
    "help": "A useful selector if you can identify a common pattern in things like <strong>class</strong>, <strong>href</strong> or <strong>src</strong> attributes.",
    "examples": [
      "<strong>img[src*=\"/thumbnails/\"]</strong> selects all image elements that show images from the \"thumbnails\" folder.",
      "<strong>[class*=\"heading\"]</strong> selects all elements with \"heading\" in their class, like <strong>class=\"main-heading\"</strong> and <strong>class=\"sub-heading\"</strong>"
    ],
    "boardMarkup": "\n    <bento for=\"Robbie\"><apple /></bento>\n    <bento for=\"Timmy\"><pickle /></bento>\n    <bento for=\"Bobby\"><orange /></bento>\n    "
  }
]