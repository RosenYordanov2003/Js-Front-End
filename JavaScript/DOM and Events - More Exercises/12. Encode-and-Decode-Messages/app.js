function encodeAndDecodeMessages() {
  const textAreaElements = document.getElementsByTagName("textarea");
  const [encodeTextArea, decodeTextArea] = textAreaElements;
  const buttons = document.getElementsByTagName("button");
  const [sendButton, readButton] = buttons;
  sendButton.addEventListener("click", sentMessage);
  readButton.addEventListener("click", read);

  function sentMessage() {
    const originalMessage = encodeTextArea.value;
    let newMessage = "";
    for (let index = 0; index < originalMessage.length; index++) {
      let newAsciCode = originalMessage[index].charCodeAt(0);
      const newChar = String.fromCharCode(newAsciCode + 1);
      newMessage += newChar;
    }
    decodeTextArea.value = newMessage;
    encodeTextArea.value = "";
  }
  function read() {
    const originalMessage = decodeTextArea.value;
    let newMessage = "";
    for (let index = 0; index < originalMessage.length; index++) {
      let newAsciCode = originalMessage[index].charCodeAt(0);
      const newChar = String.fromCharCode(newAsciCode - 1);
      newMessage += newChar;
    }
    decodeTextArea.value = newMessage;
  }
}
