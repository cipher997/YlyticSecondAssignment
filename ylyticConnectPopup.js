function openPopupWindow() {
    var url = "https://app.ylytic.com/popup";
    var windowName = "popupWindow";
    var windowSize = "width=700,height=600";
    var windowFeatures = "toolbar=no,scrollbars=yes";

    window.open(url, windowName, windowSize, windowFeatures);
  }

function createButton() {
    var button = document.createElement("button");
    button.innerHTML = "Click Me";
    button.addEventListener("click", function() {
        openPopupWindow()
    },false);

    document.body.appendChild(button);
  }
createButton();
