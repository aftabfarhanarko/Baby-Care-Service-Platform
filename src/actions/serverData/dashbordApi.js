"use server"

import { collections, dbConnect } from "@/lib/databaseConnect"


export const myAllBookings = async (query)  => {
    const result = await dbConnect(collections.BOOKING).find({'user.email':query});
    return result
}