export function PostData(type, userData) {
    let BaseURL = 'http://localhost:8080/';

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
