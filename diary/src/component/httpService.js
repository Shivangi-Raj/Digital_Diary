import "whatwg-fetch";
import React,{ Component } from "react";


class HttpService extends Component{

getContents=()=>{
    var promise=new Promise(function(resolve,reject){
        fetch("http://localhost:3001/home/content")
        .then(response=>{
          resolve(response.json())
    })

    });
    return promise;
  }


  getContentsTitle=(t)=>{
    console.log(t)
    // var data={"title":title};
    var promise=new Promise(function(resolve,reject){
        fetch(`http://localhost:3001/home/content/${t}`)
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'text/json, text/plain, */*',
        //         'Content-Type': 'text/json',

        //       },
        //     body:JSON.stringify({"title":t})
        // })
        .then(response=>{
          resolve(response.json())
    })

    });
    return promise;
  }

  
  getContentsImage=(mood)=>{
    console.log(mood)
    // var data={"title":title};
    var promise=new Promise(function(resolve,reject){
        fetch(`http://localhost:3001/home/mood/${mood}`)
        //     method: 'POST',
        //     headers: {
        //         'Accept': 'text/json, text/plain, */*',
        //         'Content-Type': 'text/json',

        //       },
        //     body:JSON.stringify({"title":t})
        // })
        .then(response=>{
          resolve(response.json())
    })

    });
    return promise;
  }


    // const rawResponse = await fetch('https://httpbin.org/post', {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({a: 1, b: 'Textual content'})
    // });
    // const content = await rawResponse.json();
  
    // console.log(content);
  



}

export default HttpService;