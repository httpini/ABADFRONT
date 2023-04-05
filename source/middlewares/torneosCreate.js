const multer = require('multer');
const create = require("../validaciones/torneosCreate")
const storage = require('../modules/storage')
const upload = multer({storage: storage('reglamentos-torneos')});

module.exports = [upload.any(), create]