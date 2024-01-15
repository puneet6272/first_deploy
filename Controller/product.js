const fs = require('fs')
const modal = require('../modal/schema')
const mongoose  = require('mongoose')
const Product = modal.Product
//product


// Create
exports.create_product = (req, res) => {
    const product = new Product(req.body)
    // product.title = 'hello';
    // product.price = 999;
    product.save().then((err, doc) => {
        console.log({ err, doc })
        res.status(201).json(doc)
    }).catch(() => {
        console.log("showing err")
    })

//  console.log(product)   

}

exports.get_All_Products = async(req, res) => {
    const product =await Product.find()
    res.json(product)
}

exports.get_id_product = async(req, res) => {
    const id = req.params.id
    const para = await Product.findById(id)
    res.json(para)
}

exports.update_products = async(req, res) => {
    const id = req.params.id
    const doc = await Product.findOneAndReplace({_id:id},req.body)
    res.status(201).json(doc)
    // const prod = product.findIndex(p => p.id === +id)
    // product.splice(prod, 1, { ...req.body, id: id })
}

exports.update_id_product = async(req, res) => {
    const id = req.params.id
    const doc = await Product.findOneAndUpdate({_id:id},req.body)
    res.status(201).json(doc)

    // const prod = product.findIndex(p => p.id === +id)
    // old_product = product[prod]
    // product.splice(prod, 1, { ...old_product, ...req.body })
}
exports.delete_product =async (req, res) => {
    const id = req.params.id
    const doc = await Product.findOneAndDelete({_id:id})
    res.status(201).json(doc)
}
