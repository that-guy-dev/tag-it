
function clickHandler(e) {

  chrome.tabs.query(
    {
      currentWindow: true,
      active: true,
    },
    function (foundTabs) {
      if (foundTabs.length > 0) {
        var url = foundTabs[0].url;
        $.post('http://localhost:3030/tagArticle', { articleUrl: url });
      } else {
        // there's no window or no selected tab
      }
    }
  );
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('button').addEventListener('click', clickHandler);
});
