import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Main = () => {
    const [data, setData] = useState([]);
    const [isEdit, setIsEdit] = useState(false);
    const [editValue, setEditValue] = useState({
        id: null,
        name: "",
        age: ""
    });
    const [post, setPost] = useState({
        name: "",
        age: ""
    });

    const handleChange = (e) => {
        setPost({
            ...post,
            [e.target.name]: e.target.value
        });
    };

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3001/login');
            setData(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleClick = async () => {
        // Check if any field is empty before proceeding
        if (!post.name || !post.age) {
            alert("Please fill in all fields.");
            return;
        }

        try {
            await axios.post('http://localhost:3001/login', post);
            fetchData();
            setPost({ name: "", age: "" });
        } catch (error) {
            console.log(error);
        }
    };

    const handleEdit = (item) => {
        setIsEdit(true);
        setEditValue({
            id: item.id,
            name: item.name,
            age: item.age
        });
    };

    const handleUpdate = async () => {
        // Check if any field is empty before proceeding
        if (!editValue.name || !editValue.age) {
            alert("Please fill in all fields.");
            return;
        }

        try {
            await axios.put(`http://localhost:3001/login/${editValue.id}`, editValue);
            setIsEdit(false);
            fetchData();
        } catch (error) {
            console.log(error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3001/login/${id}`);
            fetchData();
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className='main__Div'>
            <h1 >TODO LIST</h1>
            <center className='main__todo'>
                <main className='inputBox'>
                <input type="text" placeholder='name' value={post.name} name='name' onChange={handleChange} />
                <input type="date" placeholder='time' value={post.age} name='age' onChange={handleChange} />
                <button onClick={handleClick}>Submit</button>
                </main>
                {isEdit &&
                    <div className='update ' id='update'>
                        <input type='text' value={editValue.name} onChange={(e) => setEditValue({ ...editValue, name: e.target.value })} />
                        <input type='date' value={editValue.age} onChange={(e) => setEditValue({ ...editValue, age: e.target.value })} />
                        <button onClick={handleUpdate}>Update</button>
                    </div>
                }
                <table border={1}>
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>Name</td>
                            <td>DOB</td>
                            <td>Edit</td>
                            <td>Delete</td>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, i) => (
                            <tr key={i}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td ><a href="#update"><button onClick={() => handleEdit(item)} >Edit</button></a></td>
                                <td><button onClick={() => handleDelete(item.id)}>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
               
            </center>
        </div>
    );
};

export default Main;






