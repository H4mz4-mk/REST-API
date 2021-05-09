"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var express_1 = __importDefault(require("express"));
var sample_1 = __importDefault(require("../controllers/sample"));
var router = express_1.default.Router();
router.get('/', sample_1.default.pathController);
router.get('/:path', sample_1.default.secondPathController);
router.get('/:path/:secondPath', sample_1.default.thirdPathController);
module.exports = router;
