function sortByLink(a, b) {
  if (a.name > b.name) return 1;
  if (a.name < b.name) return -1;
}

export default function superTransform(arr) {

  let operDate = {};

  arr.forEach(function(item) {

    if (operDate[item.date] === undefined) {
      let buf = {
        "operations": [],
        "links": []
      };
      buf.operations.push(item);
      buf.links = item.links;
      operDate[item.date] = buf;
    } else {
      operDate[item.date].operations.push(item);
      operDate[item.date].links = operDate[item.date].links.concat(item.links);
    }
  });

  for (let key in operDate) {

    operDate[key].links.sort(sortByLink);

    operDate[key].links = operDate[key].links.reduce(function(prev, curr) {
      if ((prev.length == 0) || (prev[prev.length - 1].name !== curr.name)) {
        prev = prev.concat(curr)
      }
      return prev
    }, [])
  }

  return operDate;
}
