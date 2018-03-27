export const copyToClipboard = txt => {
  const Textarea = document.getElementById("clipboard");
  Textarea.value = txt;
  Textarea.select();

  try {
    var status = document.execCommand("copy");
    if (!status) {
      console.error("Cannot copy text");
    } else {
      console.log("The text is now on the clipboard");
    }
  } catch (err) {
    console.log("Unable to copy.");
  }
};

export const copyTestListToClipBoard = testList => {
  const txt = testList.reduce((str, item) => str.concat("\n" + item));
  return copyToClipboard(txt);
};
