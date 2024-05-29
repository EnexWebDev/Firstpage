import { useEffect, useState, useRef } from 'react';
import axios from 'axios';

const  BASE_URL = 'https://jsonplaceholder.typicode.com';

function FetchApiComp() {
    const [Data, setData] = useState([]);
    const [urlResource, setUrlResource] = useState('users');
    const [sent, setSent] = useState(false);
    const [formData, setformData] = useState({ name: '', email: '' });
    const CurrentPostIndex=useRef[null]

    useEffect(() => {
        axios
            .get(`${BASE_URL}/${urlResource}`)
            .then((res) => setData(res.data))
            .catch((err) => console.log(err));
    }, [urlResource, sent]);

    const resetInput = () => {
        setformData({
            name:"",
            email:""
        })
    }

    const handleChnage = (e) => {
        setformData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const postRequest = (e) => {
        e.preventDefault();
        axios
            .post(
                `${BASE_URL}/${urlResource}`,
                JSON.stringify({
                    first_name: formData.name,
                    last_name: 'ANyValue',
                    email: formData.email,
                    avatar: '',
                })
            )
            .then((res) => {
                resetInput()
                setData([...Data, formData])
            })
            .catch((err) => console.log(err));
    };

    
    const deletePost = (currentIndex) => {
        axios
        .delete(`${BASE_URL}/${urlResource}/${currentIndex}`)
        .then((res) => {
            let filtereTodo = Data.filter((item) => {
                return item.id != currentIndex;
            })
            setData(filtereTodo)
        })
        .catch ((err)=>{
            console.log(err)
        })

    }
    const editPost=(currentIndex)=>{
        axios
        .put(`${BASE_URL}/${urlResource}/${currentIndex}`)
        .then((res)=>{
            setSent=(false)
            let SelectedPost = Data.find((item)=>item.id===currentIndex)
            setformData({name:SelectedPost.name, email:SelectedPost.email})
            CurrentPostIndex.current=currentIndex
        })
    }
    

    return (
        <section className='App'>
            <h2 align=''>All Posts</h2>

            <div>
                <form action='' onSubmit={postRequest}>
                    <div> <br />
                        <label htmlFor=''>Title: </label>

                        
                        <input
                            type='text'
                            value={formData.name}
                            onChange={handleChnage}
                            id='name'
                        />
                       
                    </div>

                    <div> <br /> 
                        <label htmlFor=''>Body:</label>
                        <input
                            type='text'
                            id='email'
                            value={formData.email}
                            onChange={handleChnage}
                            name=''
                        />{' '}
                    </div>
                    <br />
                    <button style={{margin:"auto 43px"}}>Submit Post</button>
                </form>
            </div>

            <div className='posts'>
                {Data.map((item) => {
                    return (
                        <div key={item.id}>
                            <h2>{item.name}</h2>
                            <p>{item.email}</p>
                            <button type='submit' onClick={()=>deletePost(item.id)}>Delete Post</button>
                            <button onClick={()=>editPost(item.id)}>editPost</button>
                            <button>add Post</button>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default FetchApiComp;