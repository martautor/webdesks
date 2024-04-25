import GetTaskData from "../getTaskData";

export default async function getEmdedData (url, data = GetTaskData(), fmethod = 'GET') {
    await data
     const mainData = await fetch (url, {
        method: fmethod,
        body: fmethod === 'GET' ? null : JSON.stringify(data),
        headers: {
            "Access-Control-Allow-Headers" : "Content-Type",
              "Access-Control-Allow-Origin": "*",
            'Content-Type': 'application/json',
             "Access-Control-Allow-Methods": "PUT,POST,GET,PATCH"
        }
        
        
    })
    .then(response => response.json())
    // .then(data => Object.keys(data).map(key => Object.keys(data[key]).map(keys => typeof data[key][keys] === 'object' ? data[key][keys] : delete data[key][keys])))
    // .then(data => Object.keys(data).map(key => typeof data[key].value === 'object' ? data[key].value : delete data[key].value)) //// data[Object.keys(data).map(key => key)].Tasks
    .then(data => Object.keys(data).map(key => data[key].Tasks))
    if(typeof mainData === 'object') {
        const formattedData = []
         Object.keys(mainData).map(key => Object.keys(mainData[key]).map(keys => formattedData.push(mainData[key][keys])))
        return formattedData
    } else {
        return console.log('Не нашли данных.')
    }
    // .then(data => console.log(data))
    // .then(data => Object.keys(data).map(key => console.log(data[key])))
}