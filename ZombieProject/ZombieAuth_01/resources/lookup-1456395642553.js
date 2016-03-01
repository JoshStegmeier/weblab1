(function(window, undefined) {
  var dictionary = {
    "078b09c5-5950-4933-bb9b-f35aad505753": "createPasscode",
    "7390f593-34df-4de5-88ef-d36a2b38d551": "nearbyMap",
    "a556ad8c-28dc-40bd-acf2-1bb54581f8a8": "donateANook",
    "a8817caf-c32a-4e45-8664-5653ce92f591": "Facetime",
    "70bb128e-46f2-4626-8d71-4815e1caf146": "Loading screen",
    "903e64a2-9f1b-4311-a73c-9d925209e1d0": "iPhone Home",
    "77cc334f-6602-42c7-9107-7730ca86a0a3": "quickUnlock",
    "c230b15e-6b09-4ad3-a293-b40536946460": "Floating Menu",
    "95adc887-3e85-4566-95d6-d7b6077c8c85": "Login",
    "1d63eff8-0626-49fd-8201-e0625df30fbd": "Support",
    "5d3ed7cf-0b17-4d04-b6a8-9d25600e33d4": "Meditation",
    "1e8a452c-0c3e-434b-9a69-9f88c989dab1": "Template 1",
    "default": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);