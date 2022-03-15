const lineNotify = require("./line-notify");

const TOKEN1 = "<API TOKEN 1>";
const TOKEN2 = "<API TOKEN 2>";
const TOKEN3 = "<API TOKEN 3>";

const message = `
ORDERID: 180002202
PARTCODE: 43029343
PARTNAME: PASTIC-VALVE
DATE: 2022-01-01
`;

lineNotify(message, TOKEN1);
lineNotify(message, TOKEN2);
lineNotify(message, TOKEN3);
