import { Router } from "express";
import { discoveryRoutes } from "./discovery.routes";

const router = Router()

discoveryRoutes(router)

export { router }