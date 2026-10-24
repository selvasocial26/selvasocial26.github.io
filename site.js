// Fills in the GitHub links automatically from the page address
// (https://USERNAME.github.io/REPOSITORY/), so nothing needs editing.
(function () {
  var host = location.hostname, parts = location.pathname.split("/").filter(Boolean);
  // Source code and releases live in the selva-sync repository.
  var repo = "https://github.com/selvasocial26/selva-sync";
  document.querySelectorAll(".repo-link").forEach(function (a) {
    if (repo) a.href = repo; else a.style.display = "none";
  });
  document.querySelectorAll(".dl-link").forEach(function (a) {
    a.href = repo ? repo + "/releases/latest" : "#";
  });
})();
