import React, { useEffect, useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';
import { useAuth } from '../contexts/AuthContext';

const ImageItem = ({ image, index, moveImage }) => {
  const { currentUser } = useAuth();
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const imageItemDiv = document.querySelector(`#image-item-${image.id}`);
    if (currentUser) {
      imageItemDiv.style.cursor = 'grab';
    } else {
      imageItemDiv.style.cursor = 'normal';
    }
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [currentUser, image.id]);

  const [, ref] = useDrag({
    type: 'IMAGE',
    item: { id: image.id, index },
  });

  const [, drop] = useDrop({
    accept: 'IMAGE',
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveImage(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  console.log(`Image ${image.id} Loading: ${loading}`); 

  return (
    <figure id={`image-item-${image.id}`} ref={(node) => ref(drop(node))} className="image-item">
      {loading ? ( 
        <div className="image-item-skeleton">
          <div className="skeleton-image"></div>
        </div>
      ) : (
        <img className='image' src={image.src} alt={`Image ${image.id}`} />
      )}
    </figure>
  );
};

export default ImageItem;
