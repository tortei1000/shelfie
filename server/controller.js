module.exports = {
  create: (req, res) => {
    const dbInstance = req.app.get('db')
    const { title, image_url, description, ingredients } = req.body

    dbInstance.create_product([title, image_url, description, ingredients]).then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({ errorMessage: `something went wrong in creation` })
        console.log(err)
      })
  },

  delete: (req, res) => {
    const dbInstance = req.app.get('db')
    const { id } = req.params

    dbInstance.delete_product(id).then(() => res.status(200))
      .catch(err => {
        res.status(500).send({ errorMessage: `something went wrong in creation` })
        console.log(err)
      })
  },

  update: (req, res) => {
    const dbInstance = req.app.get('db')
    const { params, query } = req

    dbInstance.update_product([params.id, query.desc]).then(() => res.status(200))
      .catch(err => {
        res.status(500).send({ errorMessage: `something went wrong in creation` })
        console.log(err)
      })
  },

  display: (req, res) => {
    console.log(`fireeeeeeeed`)
    const dbInstance = req.app.get('db')
    
    dbInstance.get_inventory().then((recipes) => res.status(200).send(recipes))
    .catch(err => {
        res.status(500).send({ errorMessage: `something went wrong in creation` })
        console.log(err)
      })
  }
}