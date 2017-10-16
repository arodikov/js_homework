import superTransform from '../src/home-task';

const testIn = [{
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
const testOut = {"2017-07-31": {"links": [{"href": "http://google.com", "method": "GET", "name": "link1"}, {"href": "https://amazon.com", "method": "GET", "name": "link2"}, {"href": "http://googasafafsfle.com", "method": "GET", "name": "link3"}], "operations": [{"amount": "5422", "date": "2017-07-31", "links": [{"href": "http://google.com", "method": "GET", "name": "link1"}]}, {"amount": "111", "date": "2017-07-31", "links": [{"href": "http://googasafafsfle.com", "method": "GET", "name": "link3"}, {"href": "https://amazon.com", "method": "GET", "name": "link2"}]}, {"amount": "34343", "date": "2017-07-31", "links": [{"href": "https://amazon.com", "method": "GET", "name": "link2"}]}]}, "2017-08-31": {"links": [{"href": "https://testsense.alfabank.ru/marathon/ui/#/apps/%2Fplatform%2Fui%2Ftemplates", "method": "GET", "name": "link1"}, {"href": "https://templates", "method": "POST", "name": "link5"}], "operations": [{"amount": "121", "date": "2017-08-31", "links": [{"href": "https://templates", "method": "POST", "name": "link5"}]}, {"amount": "5422", "date": "2017-08-31", "links": [{"href": "https://testsense.alfabank.ru/marathon/ui/#/apps/%2Fplatform%2Fui%2Ftemplates", "method": "GET", "name": "link1"}]}]}}

describe('super transform', function() {

  it('should return object with date keys and operations list with unique link within date', function() {
    expect(superTransform(testIn)).toEqual(testOut);
  });

});
