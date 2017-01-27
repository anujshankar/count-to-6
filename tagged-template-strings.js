console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function html(stringsArray, username, comment) {
  var replacedComment = escape(comment);
  var replacedUsername = escape(username);
  var result = (stringsArray[0] + replacedUsername + stringsArray[1] + replacedComment + '\"')
  return result;
}

function escape(s) {
  return s.replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&apos;")
    .replace(/"/g, "&quot;");
}