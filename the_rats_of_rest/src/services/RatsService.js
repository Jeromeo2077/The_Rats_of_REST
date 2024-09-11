import { dbContext } from "../db/DbContext.js"

class RatsService {

  async getRats() {
    const rats = await dbContext.Rats.find()
    return rats
  }

}

export const ratsService = new RatsService