import { DbConnection } from "../db/DbConfig.js"
import { dbContext } from "../db/DbContext.js"

class LocationsService {

  async getLocations() {
    const locations = await dbContext.Locations.find()
    return locations
  }

}

export const locationsService = new LocationsService