const GetData = async(url)=>{
    let resp = await fetch(url)
    let data = await resp.json()
    console.log(data);
    return data;
   
}

export default GetData