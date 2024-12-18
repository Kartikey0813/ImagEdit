import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Redirect to the editor page with the file
      navigate('/editor', { state: { file } });
    }
  };

  return (
    <div className="home">
      <h1>Welcome to the Image Editor</h1>
      <input
        type="file"
        accept="image/*"
        onChange={handleUpload}
        style={{ margin: '20px 0' }}
      />
    </div>
  );
}

export default Home;
