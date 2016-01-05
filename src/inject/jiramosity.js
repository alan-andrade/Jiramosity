var url = 'https://raw.githubusercontent.com/alan-andrade/Jiramosity/moveTemplate/template.md'

$.fn.exists = function(selector) {
  return selector ? this.find(selector).length : this.length;
};

$.get(url, function (response) {
  var template = response;

  $(document).bind('DOMSubtreeModified', function(e) {

    if ($('#create-issue-dialog').exists()) {
      if ($('#description').text().length == 0) {
        $('#description').text(template);
      }
    }
  });
});
