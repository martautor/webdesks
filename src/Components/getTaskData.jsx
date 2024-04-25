// import * as React from 'react';
export default async function GetTaskData() {
    let data = fetch('https://autorshtrih-default-rtdb.europe-west1.firebasedatabase.app/task.json', {
        method: 'GET'
    }).then(response => response.json())
    .then(response => data = response)
    return data
    // let data = tasks
    // fetch('https://autorshtrih-default-rtdb.europe-west1.firebasedatabase.app/task.json', {
    //     method: 'POST',
    //     body: JSON.stringify(data),
    //     headers: {
    //         "Access-Control-Allow-Headers" : "Content-Type",
    //           "Access-Control-Allow-Origin": "*",
    //         'Content-Type': 'application/json',
    //          "Access-Control-Allow-Methods": "PUT,POST,GET,PATCH"
    //     }
    // })
    // .then(response => response.json())
    // .then(data => console.log(data))
}