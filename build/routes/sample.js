"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var express_1 = __importDefault(require("express"));
var sample_1 = __importDefault(require("../controllers/sample"));
var router = express_1.default.Router();
router.get('/:string', sample_1.default.sampleHealthCheck);
router.get('/:firstString/:secondString', sample_1.default.secondHealthCheck);
module.exports = router;
