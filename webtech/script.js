function searchAndHighlight() {
    var searchInput = document.getElementById('searchInput');
    var searchText = searchInput.value.toLowerCase();
    var paragraphs = document.getElementsByTagName('p');
  
    for (var i = 0; i < paragraphs.length; i++) {
      var paragraph = paragraphs[i];
      var text = paragraph.textContent.toLowerCase();
  
      if (text.includes(searchText)) {
        paragraph.classList.add('highlight');
      } else {
        paragraph.classList.remove('highlight');
      }
    }
  }
  
  