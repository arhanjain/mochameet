import axios from "axios";
import type { Location } from "../types";

export const getCafes = async (latitude: number, longitude: number) => {
  const data = {
    "includedTypes": [
      "cafe",
    ],
    "maxResultCount": 5,
    "locationRestriction": {
      "circle": {
        "center": {
          "latitude": latitude, 
          "longitude": longitude
        },
        "radius": 1000
      }
    }
  }

  const headers = { 
      'X-Goog-Api-Key': process.env.MAPS_API_KEY, 
      'X-Goog-FieldMask': 'places.displayName,places.id,places.photos', 
      'Content-Type': 'application/json'
  }

  try {
    const placeReq = await axios.post(
      'https://places.googleapis.com/v1/places:searchNearby',
      data, { headers }
      )

    const idx = Math.floor(Math.random() * 5)
    const imageName = placeReq.data.places[idx].photos[0].name
    const imgUri = await getPlacePhoto(imageName)

    const place: Location = {
      name: placeReq.data.places[idx].displayName,
      photo: imgUri,
      id: placeReq.data.places[idx].id
    }
    return place
  } catch (e) {
    console.error(e)
  }
}

const getPlacePhoto = async (name: string) => {
    const imgReq = await axios.get(
        `https://places.googleapis.com/v1/${name}/media`,
        {
        params: {
            maxHeightPx: 500, 
            maxWidthPx: 500,
            skipHttpRedirect: true
        },
        headers: { 'X-Goog-Api-Key': process.env.MAPS_API_KEY }
        }
    )
    return imgReq.data.photoUri
}