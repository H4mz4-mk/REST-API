"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var logging_1 = __importDefault(require("../config/logging"));
var NAMESPACE = 'This is quick Test!!';
var pathController = function (req, res, next) {
    logging_1.default.info(NAMESPACE, "Sample health check route called");
    return res.status(200).json({
        path: '/'
    });
};
var secondPathController = function (req, res, next) {
    logging_1.default.info(NAMESPACE, "Sample health check route called");
    return res.status(200).json({
        path: "/" + req.params.path
    });
};
var thirdPathController = function (req, res, next) {
    logging_1.default.info(NAMESPACE, "Sample health check route called");
    return res.status(200).json({
        path: "/" + req.params.path + "/" + req.params.secondPath
    });
};
exports.default = { pathController: pathController, secondPathController: secondPathController, thirdPathController: thirdPathController };
