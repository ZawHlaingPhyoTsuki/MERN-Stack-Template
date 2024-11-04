import productModel from "../models/productModel.js";

const getAllProducts = async (req, res) => {
  try {
    const products = await productModel.find({});
    res.json({ success: true, data: products });
  } catch (error) {
    res.json({ success: false, message: "Error" });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await productModel.findById(req.params.id);
    res.json({ success: true, data: product });
  } catch (error) {
    res.json({ success: false, message: "Error" });
  }
};

const  createProduct = async (req, res) => {
  try {
    const product = await productModel.create(req.body);
    res.json({ success: true, data: product });
  } catch (error) {
    res.json({ success: false, message: "Error" });
  }
}

export { getAllProducts, getProductById, createProduct };