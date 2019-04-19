module.exports = {
  display: (req, res) => {
    const dbInstance = req.app.get('db')

    dbInstance.get_inventory().then((results) => res.status(200).send(results))
    .catch(err => res.status(500).send({errorMessage: `error`}))
    
  }
}

