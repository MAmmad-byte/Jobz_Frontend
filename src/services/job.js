import apiClient from "./api-client";

class Job{
    JobList(query){
        if(query)
            return  apiClient.get(`/jobs?search=${query}`)
        else
            return  apiClient.get("/jobs")
    }
    JobSearch(query){
        if(query)
            return  apiClient.get(`/jobs?search=${query}`)

    }
    JobFindResult(query){
        if(query)
            return  apiClient.get(`/jobs/find/${query}`)

    }
    jobPreview(id){
        return  apiClient.get(`/jobs/${id}`)
    }
    jobPost(data){
        return apiClient.post('/jobs',{
            title:data.title,
            description:data.description,
            lastDate:data.deadline,
            city:data.city,
            country:data.country,
            location:data.location,
            featured:data.featured,
            jobType:data.jobType,
            salary:data.salary,
            address:data.address,
            noOfPositions:data.noOfPositions
        })
    }
}

export default new Job;