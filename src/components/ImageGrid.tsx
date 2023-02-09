import React from 'react'

interface Props {
  images: string[]
}

const ImageGrid: React.FC<Props> = ({ images }) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 10fr)',
        gridGap: '16px'
      }}
    >
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          style={{ width: '100%', height: 'auto' }}
        />
      ))}
    </div>
  )
}

export default ImageGrid
