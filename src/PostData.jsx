export function PostData(type, userData) {
    let BaseURL = 'https://ballc-frontend-be.herokuapp.com/';
    //let BaseURL = 'https://localhost:8082/';
    return new Promise((resolve, reject) =>{
        fetch(BaseURL+type, {
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify(userData)
          })
          .then(response => response.text())
          .then((res) => {
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });


      });
}
