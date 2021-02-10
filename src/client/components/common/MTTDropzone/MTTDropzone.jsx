import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import './mtt-dropzone.scss';
import { useDropzone } from 'react-dropzone';
import { clone, deepClone } from 'lodash';

const MTTDropzone = ({
    id,
    label,
    message,
    maxFileCount,
    onChange
}) => {
    const [ acceptedFiles, setAcceptedFiles ] = useState([]);

    const onDrop = (uploadedFiles) => {
        let tempFiles = clone(acceptedFiles)
        uploadedFiles.forEach((file) => {
            const reader = new FileReader()
    
            reader.onabort = () => console.log('file reading was aborted')
            reader.onerror = () => console.log('file reading has failed')
            reader.onload = () => {
                // Do whatever you want with the file contents
                const binaryStr = reader.result
                console.log(binaryStr)
            }
            if (tempFiles.length < maxFileCount) {
                tempFiles.push(file.name)
                onChange(id, tempFiles);
                setAcceptedFiles(tempFiles);
            }
            reader.readAsArrayBuffer(file)
        })
    };

    const generateAcceptedFiles = () => {
        return acceptedFiles.map((file, key) => {
            return (
                <div className='uploaded-files' key={key}>
                    <span onClick={() => removeFile(file)}>X</span>
                    <p>
                        { file }
                    </p>
                </div>
            )
        })
    }

    const removeFile = fileName => {
        let tempFiles = clone(acceptedFiles);
        const idx = tempFiles.findIndex(x => x === fileName);
        if (idx > -1) {
            tempFiles.splice(idx, 1);
        }
        onChange(id, tempFiles);
        setAcceptedFiles(tempFiles);
    }

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <div className='mtt-dropzone'>
            <label>
                { label }
            </label>
            <div className="dropzone-area" {...getRootProps()}>
                <input {...getInputProps()} />
                {
                    isDragActive ?
                    <p>Drop the files here ...</p> :
                    <p>{ message }</p>
                }
            </div>
            <div className='dropzone-accepted-files'>
                { generateAcceptedFiles() }
            </div>
        </div>
    )
}

MTTDropzone.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    message: PropTypes.string,
    maxFileCount: PropTypes.number,
    onChange: PropTypes.func.isRequired
}

MTTDropzone.defaultProps = {
    label: "File Upload",
    message: "Drag n Drop your files here or click to upload",
    maxFileCount: Number.POSITIVE_INFINITY,
}

export default MTTDropzone;