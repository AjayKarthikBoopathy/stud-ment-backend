import { ObjectId } from "bson";
import { client } from "../db.js";

//separate functions for queries
export function getAllMentors(req){
    return client
    .db("b45WD")
    .collection("mentors")
    .find(req.query)
    .toArray();
}

export function getMentorsById(id){
    return client
    .db("b45WD")
    .collection("mentors")
    .findOne({_id: new ObjectId(id)})  
}

export function addMentorData(data){
  return client
  .db("b45WD")
  .collection("mentors")
  .insertOne(data)

}

export function updateMentorData(id, updatedData){
    return client
    .db("b45WD")
    .collection("mentors")
    .findOneAndUpdate({_id: new ObjectId(id)},{$set:updatedData})
}

export function deleteMentorData(id){
    return client
  .db("b45WD")
  .collection("mentors")
  .deleteOne({_id: new ObjectId(id)})
}