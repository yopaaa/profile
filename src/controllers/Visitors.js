import Database from "./dbMethod";

const visitorSchema = {
  _id: String,
  ua: String,
  browser: {},
  engine: {},
  os: {},
  device: {},
  cpu: {},
  visitor: {},
};

const visitor = new Database("visitors", visitorSchema);

export default visitor;
