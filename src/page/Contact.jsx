import React from 'react'

const Contact = () => {
    const styles = {
        container: {
          backgroundColor: 'lightblue',
          padding: '20px',
          borderRadius: '5px',
        },
        title: {
          color: 'white',
          fontSize: '24px',
          fontWeight: 'bold',
        },
        description: {
          color: 'gray',
          marginTop: '10px',
        },
      };
      
  return (
    <div>
      <h2 style={styles.title}>Welcome to  Contact Page</h2>
    </div>
  )
}

export default Contact
