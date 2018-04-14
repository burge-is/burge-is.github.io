(function() {
  //
  //         88  88
  //         88  ""
  //         88
  //         88  88   ,adPPYb,d8  ,adPPYba,  ,adPPYYba,  8b      db      d8
  //         88  88  a8"    `Y88  I8[    ""  ""     `Y8  `8b    d88b    d8'
  //         88  88  8b       88   `"Y8ba,   ,adPPPPP88   `8b  d8'`8b  d8'
  // 88,   ,d88  88  "8a,   ,d88  aa    ]8I  88,    ,88    `8bd8'  `8bd8'
  //  "Y8888P"   88   `"YbbdP"Y8  `"YbbdP"'  `"8bbdP"Y8      YP      YP
  //                  aa,    ,88
  //                   "Y8bbdP"
  
  document.getElementById("editor-form").oninput = function(){
    updateIFrame({
      iframe: window.frames[0],
      css: document.getElementById("css-editor").value,
      html: document.getElementById("html-editor").value,
      js: document.getElementById("js-editor").value
    });
  };
  function updateIFrame({ iFrame, css, html, js }) {
    resultsFrameDoc = resultsFrame.contentDocument;

    resultsFrameDoc.open();
    resultsFrameDoc.write(
      `
          <!doctype html>
          <html> 
            <head> 
              <meta charset="utf-8"> 
              <title>Guess</title> 
              <style>${css}</style>
            </head> 
            <body> 
              ${html}
              <script>${js}</script>
            </body> 
          </html>
        `
    );
    resultsFrameDoc.close();
  }
})();
