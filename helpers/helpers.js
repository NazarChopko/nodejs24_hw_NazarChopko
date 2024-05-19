const pad = (num) => (num > 9 ? "" : "0") + num;
const generator = () => {
  const time = new Date();

  var month = time.getFullYear() + "-" + pad(time.getMonth() + 1);
  var day = pad(time.getDate());

  return `${month}-${day}-file.log`;
};

module.exports = { generator };
