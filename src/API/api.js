import axios from 'axios';

const token = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJJZCI6IjZjNzRjMWQ5LTViNTEtNDAzMy04NjJhLWExZjk5MzgwNWI0NiIsInN1YiI6ImFuZ2llLnJvZHJpZ3VlekB0YW1ib3JhLmNvIiwiZW1haWwiOiJhRUdwem10YXhaVHpnYTljNUx0Y0FRPT0iLCJqdGkiOiJiMDIxMWIwZC1iMGZlLTRlOGUtOThkZS05Y2M4MDE5YzAxMzkiLCJuYmYiOjE3NDY3OTgxNDUsImV4cCI6MTc0NjgzMDU0NSwiaWF0IjoxNzQ2Nzk4MTQ1LCJpc3MiOiJodHRwczovL2FwcC5kYXNod29yay5jby8iLCJhdWQiOiJodHRwczovL2FwcC5kYXNod29yay5jby8ifQ.7I6IapTjeHkFER9f2iiT-r2XM7oWhhHX5j5NRAQnhdv-V82_8CSps_GOI1WLhiWuWQMze1EaVD4JksROKwYcSw"

const api = axios.create({
  baseURL: "https://app.dashwork.co:444/api"});
  api.interceptors.request.use(
  (config) => {
    if (token) {config.headers.Authorization = `Bearer ${token}`}
    return config;
  },
  (error) => Promise.reject(error)
);


export const getByFolderID = async ( id)=>{
  const res = await api.get(`/Libraries/GetByIdCompany/${id}`).then(response =>  response).catch(error => error);
  return res.data.data
}

export const getByCompanyId = async ( id)=>{
  const res = await api.get(`/Libraries/GetByIdCompany/${id}`).then(response =>  response).catch(error => error);
  return res.data.data 
}

export const postFolder = async (data)=>{
  const res = await api.post(`/Libraries/AddFolder`, data).then(response =>  response.data).catch(error => {return error.response.data}); 
  return res
}


export const postFile = async (data)=>{
  const res = await api.post(`/Libraries/AddFile`, data).then(response =>  response).catch(error => {return error.response}); 
  return res.data.data
}

export const postImage = async (data)=>{
    const res = await api.post(`/Utilities/AddImage`, data).then(response =>  response).catch(error => {return error.response}); 
    return res.data.data
  }
  