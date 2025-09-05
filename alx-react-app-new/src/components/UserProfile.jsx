const UserProfile = (props) => {
  return (
    <div
      style={{
        border: '1px solid #d1d5db',
        borderRadius: '10px',
        padding: '16px',
        margin: '12px 0',
        backgroundColor: 'white',
        boxShadow: '0 1px 2px rgba(0,0,0,0.06)'
      }}
    >
      {/* Requirement: h2 name must be blue */}
      <h2 style={{ color: 'blue', margin: '0 0 8px 0', fontSize: '1.25rem' }}>
        {props.name}
      </h2>
      <p style={{ margin: '4px 0', color: '#374151' }}>
        Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span>
      </p>
      <p style={{ margin: '4px 0', color: '#4b5563' }}>{props.bio}</p>
    </div>
  );
};

export default UserProfile;
