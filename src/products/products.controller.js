const { response } = require("express");
const productsService = require("./products.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

// WITH .THEN:
// function productExists(req, res, next) {
//   productsService
//     .read(req.params.productId)
//     .then((product) => {
//       if(product){
//         res.locals.product = product;
//         return next()
//       }
//       next({ status:404, Message:`Product cannot be found.`})
//     })
//     .catch(next)
// }

async function listOutOfStockCount(req, res, next) {
  res.json({ data: await productsService.listOutOfStockCount() })
}

async function listPriceSummary(req, res, next) {
  res.json({ data: await productsService.listPriceSummary() })
}

async function listTotalWeightByProduct(req, res) {
  res.json({ data: await productsService.listTotalWeightByProduct() })
}

async function productExists(req, res, next){
  const product = await productsService.read(req.params.productId)
  if(product) {
    res.locals.product = product;
    return next()
  }
  next({status:404, message:`Product cannot be found.`})
}


function read(req, res, next) {
  const { product: data } = res.locals;
  res.json({ data });
}

// function list(req, res, next) {
//   productsService
//     .list()
//     .then((data) => res.json({ data }))
//     .catch(next)
// }

async function list(req, res, next) {
  const data = await productsService.list()
  res.json({ data })
}

module.exports = {
  read: [asyncErrorBoundary(productExists), read],
  list: asyncErrorBoundary(list),
  listOutOfStockCount: asyncErrorBoundary(listOutOfStockCount),
  listPriceSummary: asyncErrorBoundary(listPriceSummary),
  listTotalWeightByProduct: asyncErrorBoundary(listTotalWeightByProduct),
};
