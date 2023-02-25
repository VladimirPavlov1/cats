import axios from 'axios';

export async function getImages(){
    try{
        const response= await axios.get('https://pixabay.com/api/',{
            params:{
                key:'31785434-56897078df27680e7b71d8ebf',
                q:'cat',
                page:1,
                per_page:10
            }
        });
        return response.data.hits;
        
    }
    catch(error){
        console.error(error)
    }
}


// async function getUser() {
//     try {
//       const response = await axios.get('/user?ID=12345');
//       console.log(response);
//     } catch (error) {
//       console.error(error);
//     }
//   }