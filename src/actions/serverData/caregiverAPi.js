"use server";

import { collections, dbConnect } from "@/lib/databaseConnect";

export const caregiverDataSaved = async (data) => {
  // console.log("Crakdf", data);

  const result = await dbConnect(collections.BOOKINGCAREGIVERS).insertOne(data);
  return result;
};
