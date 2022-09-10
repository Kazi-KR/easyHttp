class EasyHttp{
    async get(url){
        const resoponse=await fetch(url);
        const res_data=await resoponse.json();
        return res_data;
    }
    async post(url,data){
        const response=await fetch(url,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        });
        const res_data=await response.json();
        return res_data;
    }
    async put(url,data){
        const response=await fetch(url,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        });
        const res_data=await response.json();
        return res_data;
    }
    async delete(url){
        const response=await fetch(url,{
            method:'DELETE',
            headers:{
                'content-type':'application/json'
            },
        });
        const res_data=await "The data has been deleted";
        return res_data;
    }
}