import {useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

import './style.css';

export const FileUploader = ({onSuccess}) => {
    const [file, setFile] = useState();
    const [filename, setFilename] = useState("");
    const onInputChange = (e) => {
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name)
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("fileName", filename)
        //data.append(file, file)
        data.append("creator", "John")
        var object = {};
        data.forEach((value, key) => object[key] = value);
        var json = JSON.stringify(object);
        

        axios.post('http://localhost:8080/api/files', json, {
            headers: {'Content-Type': 'application/json'}
        })
            .then((response) => {
                toast.success('Upload Success')
                onSuccess(response.data)
            })
            .catch((e) => {
                toast.error('Upload Error')
            })
    };

    return(
        <><Link to="/">
            <button>
                Home
            </button>
        </Link>

        <form method="post" action="#" id="#" onSubmit={onSubmit}>
            <div className="form-group files">
                <label> {filename} </label>
                <input type="file"
                    onChange={onInputChange}
                    className="form-control"
                    multiple="" />
                
            </div>

            <button>Submit</button>
        </form>
        </>
    )
};

export default FileUploader;