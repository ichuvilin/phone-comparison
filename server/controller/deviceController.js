const { Device } = require("../model/models");
const uuid = require("uuid");
const path = require("path");

class DeviceController {
  async create(req, res) {
    try {
      const {
        name,
        producer,
        releaseYear,
        inch,
        country,
        srr,
        nfc,
        ram,
        esim,
        swc,
        price,
      } = req.body;
      const { img } = req.files;
      let fileName = uuid.v4() + ".png";
      img.mv(path.resolve(__dirname, "..", "static", fileName));

      const device = await Device.create({
        name,
        producer,
        releaseYear,
        inch,
        country,
        srr,
        nfc,
        ram,
        esim,
        swc,
        price,
        img: fileName,
      });

      return res.json(device);
    } catch (error) {
      console.log(error.message);
    }
  }

  async getAll(req, res) {
    const devices = await Device.findAll();
    return res.json(devices);
  }

  async getOne(req, res) {
    const { id } = req.params;
    const device = await Device.findOne({ where: { id } });
    return res.json(device);
  }
}

module.exports = new DeviceController();
