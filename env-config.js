const debug = process.env.NODE_ENV !== "production";
const repository = "RealEstateHomepage_Client";

module.exports = {
  "process.env.BACKEND_URL": !debug ? `/${repository}` : "",
};
