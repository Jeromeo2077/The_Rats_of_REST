import { locationsService } from "../services/LocationsService.js";
import BaseController from "../utils/BaseController.js";

export class LocationsController extends BaseController {
  constructor() {
    super('api/locations')
    this.router
      .get('', this.getLocations)
  }

  async getLocations(request, response, next) {
    try {
      const locations = await locationsService.getLocations()
      response.send(locations)
    } catch (error) {
      next(error)
    }
  }
}