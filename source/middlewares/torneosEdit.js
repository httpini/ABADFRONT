const multer = require('multer');
const edit = require("../validaciones/torneosEdit")
const storage = require('../modules/storage')
const upload = multer({storage: storage('reglamentos-torneos')});

module.exports = [upload.any(), edit]