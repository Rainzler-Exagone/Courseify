import axios from 'axios';


export const options = {
    method: 'GET',
    url: 'https://paid-udemy-course-for-free.p.rapidapi.com/',
    params: {page: '0'},
    headers: {
      'x-rapidapi-key': '714e4db0d4msh605c25af3bdc20bp19c05ajsn93eab5d080aa',
      'x-rapidapi-host': 'paid-udemy-course-for-free.p.rapidapi.com'
    }
  };
  

// export const getData= async() =>{
// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }
// }




// export async function getServerSideProps(): Promise<{ props: { data: any } }> {
//     // Fetch data from external API
//     const res = await axios.request(options);
//     const data = res.data;
//     console.log(data);
      
//     // Pass data to the page via props
//     return { 
//       props: { 
//         data 
//       } 
//     };
//   }
  