function clickHandler(e) {
  chrome.tabs.query(
    {
      currentWindow: true,
      active: true,
    },
    function (foundTabs) {
      if (foundTabs.length > 0) {
        const url = foundTabs[0].url;
        const tags = document.getElementById('tags').value.split(',');
        $.post('http://localhost:3030/tagArticle', { articleUrl: url, tags });
      } else {
        // there's no window or no selected tab
      }
    }
  );
}

document.addEventListener('DOMContentLoaded', function () {
  chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
      document.querySelector("#urlpath").value = tabs[0].url;
  });
  document.querySelector('#tagButton').addEventListener('click', clickHandler);
});
