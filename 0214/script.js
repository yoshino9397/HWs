function updateOutput() {
  $("iframe").contents().find("html").html(`
      <html>
      <head>
          <style type="text/css">
              ${$("#cssPanel").val()}
          </style>
      </head>
      <body>
          ${$("#htmlPanel").val()}
      </body>
      </html>
  `);
}
