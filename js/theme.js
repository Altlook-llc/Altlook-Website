(function () {
  var colorScheme = window.matchMedia("(prefers-color-scheme: dark)");

  function applyTheme(event) {
    document.documentElement.dataset.theme = event.matches ? "dark" : "light";
  }

  applyTheme(colorScheme);

  if (colorScheme.addEventListener) {
    colorScheme.addEventListener("change", applyTheme);
  } else {
    colorScheme.addListener(applyTheme);
  }
})();
