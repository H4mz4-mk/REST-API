"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var logging_1 = __importDefault(require("../config/logging"));
var NAMESPACE = 'This is quick Test!!';
var sampleHealthCheck = function (req, res, next) {
    logging_1.default.info(NAMESPACE, "Sample health check route called");
    return res.status(200).json({
        message: "You just entered " + req.params.string
    });
};
var secondHealthCheck = function (req, res, next) {
    logging_1.default.info(NAMESPACE, "Second health check route called");
    return res.status(200).json({
        message: "You just entered /" + req.params.firstString + "/" + req.params.secondString
    });
};
exports.default = { sampleHealthCheck: sampleHealthCheck, secondHealthCheck: secondHealthCheck };
