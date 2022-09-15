let sortArr = function (arrToSort) {
  arrToSort.sort(function (a, b) {
    let movieA = a.name.toUpperCase();
    let movieB = b.name.toUpperCase();
    return movieA < movieB ? -1 : movieA > movieB ? 1 : 0;
  });
  return arrToSort;
};

export default sortArr;
