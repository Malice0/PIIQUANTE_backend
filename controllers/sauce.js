const Sauce = require("../models/Sauce");

exports.likeSauce = (req, res, next) => {};

exports.createSauce = (req, res, next) => {
  const sauceObject = JSON.parse(req.body.sauce);
  delete sauceObject._id;
  delete sauceObject._userId;
  const sauce = new Sauce ({
    ...sauceObject,
    userId: req.auth.userId,
    imageUrl: `${req.protocol}://${req.get("host")}/image/${req.filename}`
  });
  sauce.save()
    .then(() => res.status(201).json({ message: "Sauce enregistré" }))
    .catch((error) => res.status(400).json({ error }));

  // delete req.body._id;
  // const sauce = new Sauce({
  //   ...req.body,
  // });
  // sauce.save()
  //   .then(() => res.status(201).json({ message: "objet ok" }))
  //   .catch((error) => res.status(400).json({ error }));
};

exports.modifySauce = (req, res, next) => {
  Sauce.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: "Objet modifié" }))
    .catch((error) => req.status(400).json({ error }));
};

exports.deleteSauce = (req, res, next) => {
  Sauce.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "Objet sepprimé" }))
    .catch((error) => req.status(400).json({ error }));
};

exports.getOneSauce = (req, res, next) => {
  Sauce.findOne({ _id: req.params.id })
    .then((sauce) => res.status(200).json(sauce))
    .catch((error) => res.status(404).json({ error }));
};

exports.getAllSauce = (req, res, next) => {
  Sauce.find()
    .then((sauce) => res.status(200).json(sauce))
    .catch((error) => res.statut(400).json({ error }));
};
