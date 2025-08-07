const convertISODateToText = (isoDate) => {
  if (!isoDate) {
    return '';
  }
  const months = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];

  const dateObj = new Date(isoDate);
  const day = dateObj.getDate();
  const month = months[dateObj.getMonth()];
  const year = dateObj.getFullYear();
  const hours = dateObj.getHours();
  const minutes = dateObj.getMinutes();

  return `${day} ${month} ${year}, Pukul ${hours}:${minutes}`;
};
export default convertISODateToText;
