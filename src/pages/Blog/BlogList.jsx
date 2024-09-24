import React, { useState } from 'react';
import PageWrapper from '../../components/PageWrapper'; // Update with correct path

const BlogList = () => {
  const [hoveredPostId, setHoveredPostId] = useState(null);
  const [hoveredButtonId, setHoveredButtonId] = useState(null);

  const blogPosts = [
    {
      id: 1,
      title: 'Marching Cubes Exploration',
      date: 'Sep 7, 2023',
      description:
        'A short exploration on how Marching Cubes works, my implimentation, and why it is an interesting technique',
      imageUrl: '/assets/blogThumbnails/marchingCubesExploration.jpg', // Replace with your image path
      path: 'https://www.youtube.com/watch?v=Cpu0KtIXcOw&t=385s', // Path to the blog post
    },
    {
      id: 2,
      title: 'How I Made Custom Games For The Wii U',
      date: 'July 10, 2024',
      description:
        'A full tutorial on how to build homebrew Wii U games. This is an extention of the Wii U VR project.',
      imageUrl: '/assets/blogThumbnails/makingWiiUGames.jpg', // Replace with your image path
      path: 'https://www.youtube.com/watch?v=_pC9j1yde9c', // Path to the blog post
    },
    {
      id: 3,
      title: 'Making My Own Guitar Hero',
      date: 'May 9, 2024',
      description:
        'Building a custom rhythm game based on Guitar Hero. This project uses the Midi files from the origional games along with the fan made ones.',
      imageUrl: '/assets/blogThumbnails/makingGuitarHero.jpg', // Replace with your image path
      path: 'https://www.youtube.com/watch?v=82LAlbSSgRY', // Path to the blog post
    },
  ];

  return (
    <PageWrapper>
      {/* Container for title and description */}
      <div style={{ textAlign: 'center', marginBottom: '40px', width: '100vw', height: '100vh' }}>
      <h1>This Website Is Being Rebuild</h1>
      <p>
      My old website was not able to keep up with the projects being made. This is the WIP of that fix. These cards currently link to the videos but will soon have their own articles like before, along with interactive explainers and code snippets.
        </p>
        <h1>Projects n' Such</h1>
        <p>
          Welcome to my blog, where I share insights and discoveries from my projects and
          experiences.
        </p>
        <p>
          These can range from write-ups on explorations into concepts or full tutorials and explainers.
          Feel free to steal anything I make, it is on my GitHub :)
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '30px',
            paddingInline: '70px',
            paddingTop: '25px',
          }}
        >
          {blogPosts.map((post) => (
            <div
              key={post.id}
              style={{
                ...styles.tile,
                ...(hoveredPostId === post.id ? styles.tileHover : {}),
              }}
              onMouseEnter={() => setHoveredPostId(post.id)}
              onMouseLeave={() => setHoveredPostId(null)}
            >
              <img
                src={post.imageUrl}
                alt={post.title}
                style={{ width: '100%', height: 'auto', maxHeight: '400px', objectFit: 'cover' }}
              />
              <div style={{ padding: '15px' }}>
                <h3 style={{ margin: '0 0 10px 0' }}>{post.title}</h3>
                <p style={{ margin: '0 0 10px 0', fontSize: '14px', color: '#ccc' }}>{post.date}</p>
                <a
                  href={post.path}
                  style={{
                    ...styles.button,
                    ...(hoveredButtonId === post.id ? styles.buttonHover : {}),
                  }}
                  onMouseEnter={() => setHoveredButtonId(post.id)}
                  onMouseLeave={() => setHoveredButtonId(null)}
                >
                  {post.description}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};

const styles = {
  tile: {
    border: '1px solid #ccc',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#1a1a1a',
    color: '#fff',
    transition: 'transform 0.3s ease, border 0.3s ease',
  },
  tileHover: {
    transform: 'scale(1.05)', // Slight zoom on hover
    backgroundColor: '#202020',
    border: '1px solid #0896D4', // Border changes to #0896D4 on hover
    color: '#0AB4FF',
  },
  button: {
    display: 'inline-block',
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px 15px',
    border: '1px solid #333', // Default border color matches background
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    textDecoration: 'none',
    textAlign: 'center',
    width: '90%',
    transition: 'transform 0.3s ease, background-color 0.3s ease, border 0.3s ease',
  },
  buttonHover: {
    transform: 'scale(1.05)', // Zoom-in on hover
    backgroundColor: '#555', // Change background color on hover
    border: '1px solid #0896D4', // Border changes to #0896D4 on hover
  },
};

export default BlogList;
