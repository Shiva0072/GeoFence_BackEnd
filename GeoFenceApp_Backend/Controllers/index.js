const Users = require("../model/UserSchema");

module.exports.createNewUser = async (req, res) => {
  try {
    let name = req.params.name;
    let doc = await Users.findOne({ name: name });
    if (!doc) {
      await Users.create({ name });
      return res.status(200).json({
        message: "user created successfully",
      });
    }
    return res.status(200).json({
      message: "User already exists",
    });
  } catch (err) {
    console.log("Error in creating new User : ", err);
    return;
  }
};

module.exports.createNewCenter = async (req, res) => {
  try {
    let name = req.params.name;
    let center = JSON.parse(req.params.center);
    let doc = await Users.findOne({ name });

    if (doc) {
      if (doc.centers.length > 0) {
        //if old center and just-reported-center was same. then dont create new center
        let lastCenter = doc.centers.slice(-1);
        if (
          lastCenter[0].latitude == center.latitude &&
          lastCenter[0].longitude == center.longitude
        ) {
          return res.status(200).json({
            message: "Still at the same center",
          });
        }
      }

      doc.centers.push(center);
      doc.save();
      return res.status(200).json({
        message: "New center added",
      });
    }
  } catch (err) {
    console.log("Error in adding center : ", err);
    return;
  }
};

module.exports.addNewCoord = async (req, res) => {
  try {
    let name = req.params.name;
    let newCoord = JSON.parse(req.params.coord);

    let doc = await Users.findOne({ name });
    // console.log(doc);

    if (doc) {
      let cen_len = doc.centers.length;
      let cor_len = doc.coordinates.length;
      if (cen_len > cor_len) {
        //user shifted to some new center. start tracking for this zone.
        doc.coordinates.push([newCoord]);
      } else {
        doc.coordinates[cen_len - 1].push(newCoord);
      }
      doc.save();

      return res.status(200).json({
        message: `New coordinate added for ${name}`,
      });
    }
  } catch (err) {
    console.log("Error in adding new coordinate");
    return;
  }
};
