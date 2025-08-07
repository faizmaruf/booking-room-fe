const limitString = (string, panjangMaksimal) => {
  return string.length <= panjangMaksimal
    ? string
    : string.substring(0, panjangMaksimal - 3) + '...';
};

export default limitString;
