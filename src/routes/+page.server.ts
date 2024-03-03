import { MAPS_API_KEY } from "$env/static/private"
import type { PageServerLoad } from "./$types"
import axios from "axios"
import type { Location } from "../types"
import { getCafes } from "$lib/googleplaces"

export const load: PageServerLoad = async ({ locals }) => {

  return {
    user: locals.user,
  }
}
