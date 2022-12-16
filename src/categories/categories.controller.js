const asyncErrorBoundary = require("../errors/asyncErrorBoundary");
const categoriesService = require("./categories.service");

// With .then:
// function list(req, res, next) {
//   categoriesService
//     .list()
//     .then((data) => res.json({ data }))
//     .catch(next);
// };

async function list(req, res) {
  try{
    const data = await categoriesService.list();
    res.json({ data })
  } catch(error) {
    next(error)
  }
}

module.exports = {
  list: asyncErrorBoundary(list),
};
