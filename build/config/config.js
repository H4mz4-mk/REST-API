"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var SERVER_PORT = process.env.SERVER_PORT || 1337;
var SERVER_HOST = process.env.SERVER_HOST || 'localhost';
var SERVER = {
    hostname: SERVER_HOST,
    port: SERVER_PORT
};
var config = {
    server: SERVER
};
exports.default = config;
