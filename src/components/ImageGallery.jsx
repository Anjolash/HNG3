import React, { useState, useEffect } from 'react';
import ImageItem from './ImageItem';
import image1 from '../assets/images/1.jpg';
import image2 from '../assets/images/2.jpg';
import image3 from '../assets/images/3.jpg';
import image4 from '../assets/images/4.jpg';
import image5 from '../assets/images/5.jpg';
import image6 from '../assets/images/6.jpg';
import image7 from '../assets/images/7.jpg';
import image8 from '../assets/images/8.jpg';
import image9 from '../assets/images/9.jpg';
import image10 from '../assets/images/10.jpg';
import image11 from '../assets/images/11.jpg';
import image12 from '../assets/images/12.jpg';
import image13 from '../assets/images/13.jpg';
import image14 from '../assets/images/14.jpg';
import image15 from '../assets/images/15.jpg';
import image16 from '../assets/images/16.jpg';
import image17 from '../assets/images/17.jpg';

import sitelogo from '../assets/images/tv.png';
import { useAuth } from '../contexts/AuthContext';
import { Dropdown, Button, Card, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const ImageGallery = () => {
    const { currentUser, logout } = useAuth();
    const [searchTerm, setSearchTerm] = useState('');
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [images, setImages] = useState([
        { id: 'img1', src: image1, tags: ['fun', 'girl', 'landscape', 'nature'] },
        { id: 'img2', src: image2, tags: ['landscape', 'sky'] },
        { id: 'img3', src: image3, tags: ['girl', 'rocks', 'landscape', 'nature']},
        { id: 'img4', src: image4, tags: ['sky', 'stars', 'night']},
        { id: 'img5', src: image5, tags: ['fun', 'man', 'landscape','sky'] },
        { id: 'img6', src: image6, tags: ['road', 'trees', 'fall'] },
        { id: 'img7', src: image7, tags: ['girl', 'sky'] },
        { id: 'img8', src: image8, tags: ['old', 'love', 'people','tree'] },
        { id: 'img9', src: image9, tags: ['africa', 'trees', 'girl', 'nature'] },
        { id: 'img10', src: image10, tags: ['building', 'restaurant', 'girl'] },
        { id: 'img11', src: image11, tags: ['man', 'sky', 'silhouette','nature'] },
        { id: 'img12', src: image12, tags: ['trees', 'girl', 'sky'] },
        { id: 'img13', src: image13, tags: ['girl', 'model', 'beauty'] },
        { id: 'img14', src: image14, tags: ['road', 'sign', 'sky'] },
        { id: 'img15', src: image15, tags: ['car', 'building'] },
        { id: 'img16', src: image16, tags: ['road', 'trees', 'car'] },
        { id: 'img17', src: image17, tags: ['water', 'ocean', 'swim','people','sky'] },
    ]);

    useEffect(() => {
        
        setEnabled(true);
    }, []);

    const filteredImages = images.filter((image) => {
        return image.tags.some((tag) =>
            tag.toLowerCase().includes(searchTerm.toLowerCase())
        );
    });

    async function handleLogout(e){
        e.preventDefault()
        try{
            setError("")
            setLoading(true)
            await logout()
            navigate("/");
        }
        catch(error){
            console.log("logout error", error)
        }
    }

    const [enabled, setEnabled] = useState(false);
    const [draggable, setDraggable] = useState(currentUser !== null);

    const moveImage = (fromIndex, toIndex) => {
        if (!draggable) {
            return;
        }
        const updatedImages = [...images];
        const movedImage = updatedImages.splice(fromIndex, 1)[0];
        updatedImages.splice(toIndex, 0, movedImage);
        setImages(updatedImages);
    };


    console.log(currentUser);

    return (
        <div>
            <div id="toppart">
                <nav className='d-flex navbar py-4 mb-4'>
                    <div className="d-flex logo text-center">
                        <img src={ sitelogo } alt="" />
                        <div className="logo-text">MovieBox</div>
                    </div>
                    <div className="user-profile">
                        {!currentUser && (<Button className="login button-visible" ><Link to ="/">Login</Link></Button>)}
                        {currentUser && (
                            <Dropdown>
                                <Dropdown.Toggle  id="dropdown-basic" className='dropdown-label toggle-no-arrow'>
                                    {currentUser.email.charAt(0)}
                                </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item className="login2 button-visible" onClick={handleLogout}>Log Out</Dropdown.Item>
                            </Dropdown.Menu>
                            </Dropdown>
                            )
                        }
                    </div>
                </nav>
                <div className="intro container d-flex align-items-center justify-content-center">
                    <h2 className='col-6 mb-4'>The best free stock photos, royalty free images & videos shared by creators.</h2>
                    <input
                        type="text"
                        placeholder="Search by tag"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <p className='mt-4'><span>Trending: </span>people,nature,sky,HNG,abeg,stage4,ways</p>
                </div>
            </div>
            {enabled && (
                <div className="image-gallery containers active-grid">
                    {filteredImages.map((image, index) => (
                        <ImageItem
                            key={image.id}
                            image={image}
                            index={index}
                            moveImage={moveImage}
                            draggable={draggable}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ImageGallery;
