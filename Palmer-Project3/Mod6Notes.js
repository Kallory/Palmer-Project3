// Making a GET Request
// JS fetch function -
//  takes two params
//      1) URL fetching from
//      2) ooptional obj allowing to set number of params for req
// Many possible options to specify, default usually works
// Options of interest:
//  headers - list of suboptions that call might require
//  body - actual content being sent
//  most i mportant - method option. GET, POST, etc.

// working with response obj
// Response.status - code response - 200 = success
// Response.ok - boolean is true if status is success code
// Response.text - body of response in text representation
// Response.json - body parsed as JSON



// Making POST req
// can use fetch, also can use axios
//  build req like GET
//  provide data to be POSTed
//      1) add header within header, add param for content type
//      2) outsode of header, add params param, which lists data you want to POST
//      3) post with fetch or axios