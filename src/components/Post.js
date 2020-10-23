import React from 'react';

const styles = {
  borderBottom: '2px solid #eee',
  background: '#fafafa',
  margin: '.75rem auto',
  padding: '.6rem 1rem',
  maxWidth: '500px',
  borderRadius: '7px'
};

export default ({ post: { title, body, _id }, onDelete }) => {
  return (
    <div style={ styles }>
     
      <h3 className="bg-info text-white">Title :{title }</h3>
      <h4>Body :{body}</h4>
      {/* <button className="btn btn-danger" type="button" onClick={() => onDelete(_id)}>
        Remove
      </button> */}
    </div>
  );
};