 export let BASE_URL = 'https:jsonplaceholder.typicode.com'

// import React, { useEffect, useState, useRef } from 'react';
// import axios from 'axios';

// const BASE_URL = 'https://jsonplaceholder.typicode.com';

// function FetchApiComp() {
//     const [data, setData] = useState([]);
//     const [urlResource, setUrlResource] = useState('users');
//     const [sent, setSent] = useState(false);
//     const [formData, setFormData] = useState({ name: '', email: '' });
//     const currentPostIndex = useRef(null);

//     useEffect(() => {
//         axios
//             .get(`${BASE_URL}/${urlResource}`)
//             .then((res) => setData(res.data))
//             .catch((err) => console.log(err));
//     }, [urlResource, sent]);

//     const resetInput = () => {
//         setFormData({ name: '', email: '' });
//     };

//     const handleChange = (e) => {
//         setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
//     };

//     const postRequest = (e) => {
//         e.preventDefault();
//         axios
//             .post(`${BASE_URL}/${urlResource}`, {
//                 first_name: formData.name,
//                 last_name: 'AnyValue',
//                 email: formData.email,
//                 avatar: '',
//             })
//             .then((res) => {
//                 resetInput();
//                 setData([...data, formData]);
//             })
//             .catch((err) => console.log(err));
//     };

//     const deletePost = (currentIndex) => {
//         axios
//             .delete(`${BASE_URL}/${urlResource}/${currentIndex}`)
//             .then((res) => {
//                 const filteredData = data.filter((item) => item.id !== currentIndex);
//                 setData(filteredData);
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     };

//     const editPost = (currentIndex) => {
//         axios
//             .put(`${BASE_URL}/${urlResource}/${currentIndex}`)
//             .then((res) => {
//                 setSent(false);
//                 const selectedPost = data.find((item) => item.id === currentIndex);
//                 setFormData({ name: selectedPost.name, email: selectedPost.email });
//                 currentPostIndex.current = currentIndex;
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     };

//     return (
//         <section className='App'>
//             <h2 align='center'>All Posts</h2>

//             <div>
//                 <form onSubmit={postRequest}>
//                     <div>
//                         <label>Title:</label>
//                         <input type='text' value={formData.name} onChange={handleChange} id='name' />
//                     </div>

//                     <div>
//                         <label>Body:</label>
//                         <input type='text' value={formData.email} onChange={handleChange} id='email' />
//                     </div>

//                     <button className='addpost'>{sent ? 'Update Post' : 'Add Post'}</button>
//                     <br />
//                     <button type='submit'>Submit Post</button>
//                 </form>
//             </div>

//             <div className='posts'>
//                 {data.map((item) => (
//                     <div key={item.id}>
//                         <h2>{item.name}</h2>
//                         <p>{item.email}</p>
//                         <button onClick={() => deletePost(item.id)}>Delete Post</button>
//                         <button onClick={() => editPost(item.id)}>Edit Post</button>
//                         <button>Add Post</button>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     );
// }

// export default FetchApiComp;
