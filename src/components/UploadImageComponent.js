import { useState, useEffect } from 'react';
import axios from 'axios'
import { toast } from 'react-toastify';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Dropzone from 'react-dropzone'

const UploadImageComponent = () => {
    const [imageFile, setImageFile] = useState(null)

    const [previewImage, setPreviewImage] = useState(null)
    const [message, setMessage] = useState('')

    const postImage = () => {

        let token = localStorage.getItem("token");
        let formData = new FormData();

        formData.append("image", imageFile);

        axios.post("https://insta.nextacademy.com/api/v1/images/", formData, {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(response => {
                if (response.data.success) {
                    setMessage("Image Uploaded Successfully!")
                    setPreviewImage(null)
                    setImageFile(null)
                    toast.success(`Your image has successfully been uploaded!`, {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
            })
            .catch(error => {
                console.log(error.response);
                toast.error('There was a problem upload your image. Please try again.', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                }); // so that we know what went wrong if the request failed
            });

    }
    return (
        <div className='UploadImageComponent'>
            <Dropzone onDrop={
                (e) => {
                    e.preventDefault()
                    postImage();
                }
            }>
                {({ getRootProps, getInputProps }) => (
                    <section>
                        <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            <p>Drag 'n' drop some files here, or click to select files</p>
                        </div>
                    </section>
                )}
            </Dropzone>





            
            <Form onSubmit={
                (e) => {
                    e.preventDefault();
                    postImage();

                }
            }>
                <FormGroup>
                    <Input
                        type="file"
                        name="image-file"
                        onChange={
                            (e) => {
                                setImageFile(e.target.files[0])
                                setPreviewImage(URL.createObjectURL(e.target.files[0]))
                                setImageFile(e.target.files[0])
                            }
                        }
                    />
                    {/* <FormText color="muted">
                        Make sure the image being uploaded is a supported format.
    </FormText> */}
                    <div className="card">
                        {previewImage ? (
                            <img
                                src={previewImage}
                                width="50%"
                                height="50%"
                            />
                        ) : (
                            <p className="text-center">
                                {message ? message : "Make sure the image being uploaded is a supported format."}
                            </p>
                        )}
                    </div>
                </FormGroup>
                <Button type="submit" color="success">
                    Upload
  </Button>
            </Form>
        </div>

    )
}

export default UploadImageComponent;