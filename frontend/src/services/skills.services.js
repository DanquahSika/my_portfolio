import { apiClient } from "./config";

export const apiGetAllSkills = async ()  => {
    return apiClient.get( "/skill");
}

export const apiGetSkill = async (id) => {
    return apiClient.get(`/skill/${id}`);
};

//  Add a new skill to the database, returns promise with newly created skill object
export const apiAddSkill = async () =>{
    return apiClient.post("/skill");
}