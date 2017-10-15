const operations = [{
    "date": "2017-07-31",
    "amount": "5422",
    "links": [{
      "name": "link1",
      "href": "http://google.com",
      "method": "GET"
    }]
  },
  {
    "date": "2017-08-31",
    "amount": "121",
    "links": [{
      "name": "link5",
      "href": "https://templates",
      "method": "POST"
    }]
  },
  {
    "date": "2017-07-31",
    "amount": "111",
    "links": [{
        "name": "link3",
        "href": "http://googasafafsfle.com",
        "method": "GET"
      },
      {
        "name": "link2",
        "href": "https://amazon.com",
        "method": "GET"
      }
    ]
  },
  {
    "date": "2017-07-31",
    "amount": "34343",
    "links": [{
      "name": "link2",
      "href": "https://amazon.com",
      "method": "GET"
    }]
  },
  {
    "date": "2017-08-31",
    "amount": "5422",
    "links": [{
      "name": "link1",
      "href": "https://testsense.alfabank.ru/marathon/ui/#/apps/%2Fplatform%2Fui%2Ftemplates",
      "method": "GET"
    }]
  },
];

function sortByDate(a, b) {
  if (a.date < b.date) return 1;
  if (a.date > b.date) return -1;
}

function sortByLink(a, b) {
  if (a.name > b.name) return 1;
  if (a.name < b.name) return -1;
}

operations.sort(sortByDate);

let operDate = {};

operations.forEach(function(item) {

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

for (key in operDate) {

  operDate[key].links.sort(sortByLink);

  operDate[key].links = operDate[key].links.reduce(function(prev, curr) {
    if ((prev.length == 0) || (prev[prev.length - 1].name !== curr.name)) {
      prev = prev.concat(curr)
    }
    return prev
  }, [])
}

console.log(operDate);
