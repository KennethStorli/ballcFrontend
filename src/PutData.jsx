export function PutData(type, userData) {
    let BaseURL = 'http://localhost:8080/';

    return new Promise((resolve, reject) =>{


        fetch(BaseURL+type, {
            method: 'PUT',
            mode: 'no-cors',
            body: JSON.stringify(userData)
          })
          .then(response => {
            response.text()
            console.log(response.username);
          })
          .then((res) => {
            console.log();
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });


      });
}
