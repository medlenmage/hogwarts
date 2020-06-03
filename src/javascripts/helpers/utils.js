const printToDom = (selector, text) => {
  // console.error($(selector));
  $(selector).html(text);
};


export default { printToDom };
