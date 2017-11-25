$(document).ready(function() {
  // we do this in JS as it only makes sense to have these when JS is enabled
  $("div#burger-content").append("<input type='radio' name='burger-toggle-numbering' value='burger-toggle-numbers' id='burger-toggle-numbers' checked><label for='burger-toggle-numbers'>show numbers</label><br>")
  $("div#burger-content").append("<input type='radio' name='burger-toggle-numbering' value='burger-toggle-tags' id='burger-toggle-tags'><label for='burger-toggle-tags'>show tags</label>")

  $("section#meta").append("<input type='radio' name='meta-toggle-numbering' value='meta-toggle-numbers' id='meta-toggle-numbers' checked><label for='meta-toggle-numbers'>show numbers</label><br>")
  $("section#meta").append("<input type='radio' name='meta-toggle-numbering' value='meta-toggle-tags' id='meta-toggle-tags'><label for='meta-toggle-tags'>show tags</label>")

  // TODO link the two buttons as in https://stackoverflow.com/questions/23350062/jquery-how-to-auto-sync-groups-of-radio-buttons
  // TODO
});