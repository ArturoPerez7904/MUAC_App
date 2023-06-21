import { Link } from 'react-router-dom';

const FileUploader = () => {
    return(
        <Link to = "/files">
            <button>
                Files
            </button>
        </Link>
    );
};


export default FileUploader;