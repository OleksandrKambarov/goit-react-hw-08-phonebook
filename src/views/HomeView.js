import React from 'react';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginTop: 100,
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
  description: {
    marginTop: 100,
    fontSize: 24,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    border: 'solid',
    padding: 20,
    margin: 50,
    backgroundColor: 'lightgrey',
  },
};

const HomeView = () => (
  <div style={styles.container}>
    <h1 style={styles.title}>
      Hello!!!
      <span role="img" aria-label="Hi">
        💁
      </span>
    </h1>
    <div style={styles.description}>Welcome to comfortable program.</div>
  </div>
);

export default HomeView;
