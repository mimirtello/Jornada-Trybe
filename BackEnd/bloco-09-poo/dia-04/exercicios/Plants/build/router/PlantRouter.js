"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PlantsController_1 = __importDefault(require("../controllers/PlantsController"));
const PlantModel_1 = __importDefault(require("../models/PlantModel"));
const PlantService_1 = __importDefault(require("../services/PlantService"));
const plantModel = new PlantModel_1.default();
const plantService = new PlantService_1.default(plantModel);
const plantController = new PlantsController_1.default(plantService);
const plantRouter = (0, express_1.Router)();
plantRouter.get('/', (req, res, next) => plantController.getAll(req, res, next));
plantRouter.post('/', (req, res, next) => plantController.create(req, res, next));
plantRouter.get('/:id', (req, res, next) => plantController.getById(req, res, next));
plantRouter.delete('/:id', (req, res, next) => plantController.remove(req, res, next));
plantRouter.put('/:id', (req, res, next) => plantController.update(req, res, next));
exports.default = plantRouter;
