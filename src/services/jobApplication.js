import apiClient from "./api-client";
import { getToken } from "./authServices";
class JobApplication {
  applicationPost(data) {

    return apiClient.post(
      "/users/jobs",
      data,
      {
        headers: {
          auth: getToken(),
        'Content-Type': 'multipart/form-data',
        },
      }
    );
  }
  fetchAppliedJobs(){
    return apiClient.get('/admin/users/appliedjobs', {
      
        headers: {
          auth: getToken(),
    }
  })
}
  fetchUserAppliedJobs(id){
    return apiClient.get(`/admin/users/appliedjobs/${id}`, {
        headers: {
          auth: getToken(),
    }
  })
}
}

export default new JobApplication();
