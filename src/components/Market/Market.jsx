// const Market = () => {
//   return <>

//   </>;
// };

// export default Market;

import React, { useState } from "react";

const Market = () => {
  const [contentBlocks, setContentBlocks] = useState([]);
  const [title, setTitle] = useState("");
  const [isTitleSet, setIsTitleSet] = useState(false);

  const addContentBlock = (type) => {
    setContentBlocks([...contentBlocks, { type, value: "" }]);
  };

  const removeContentBlock = (index) => {
    const updatedBlocks = contentBlocks.filter((_, i) => i !== index);
    setContentBlocks(updatedBlocks);
  };

  const handleContentChange = (index, value) => {
    const updatedBlocks = [...contentBlocks];
    updatedBlocks[index].value = value;
    setContentBlocks(updatedBlocks);
  };

  const handleMediaChange = (index, file) => {
    const updatedBlocks = [...contentBlocks];
    updatedBlocks[index].value = URL.createObjectURL(file);
    setContentBlocks(updatedBlocks);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Post submitted:", { title, contentBlocks });
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        {!isTitleSet && (
          <input
            type="text"
            style={styles.titleInput}
            placeholder="Add a title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        )}

        {contentBlocks.map((block, index) => (
          <div key={index} style={styles.contentBlock}>
            {block.type === "text" && (
              <textarea
                style={styles.textarea}
                placeholder="Write something..."
                value={block.value}
                onChange={(e) => handleContentChange(index, e.target.value)}
              ></textarea>
            )}
            {block.type === "media" && (
              <div>
                <input
                  type="file"
                  accept="image/*,video/*"
                  style={styles.fileInput}
                  onChange={(e) => handleMediaChange(index, e.target.files[0])}
                />
                {block.value &&
                  (block.value.endsWith(".mp4") ? (
                    <video
                      controls
                      src={block.value}
                      style={styles.mediaPreview}
                    ></video>
                  ) : (
                    <img
                      src={block.value}
                      alt="Preview"
                      style={styles.mediaPreview}
                    />
                  ))}
              </div>
            )}
            {block.type === "link" && (
              <input
                type="url"
                style={styles.input}
                placeholder="Add a link"
                value={block.value}
                onChange={(e) => handleContentChange(index, e.target.value)}
              />
            )}
            <button
              type="button"
              onClick={() => removeContentBlock(index)}
              style={styles.removeButton}
            >
              X
            </button>
          </div>
        ))}

        <div style={styles.buttonGroup}>
          <button
            type="button"
            onClick={() => addContentBlock("text")}
            style={styles.addButton}
          >
            Add Text
          </button>
          <button
            type="button"
            onClick={() => addContentBlock("media")}
            style={styles.addButton}
          >
            Add Media
          </button>
          <button
            type="button"
            onClick={() => addContentBlock("link")}
            style={styles.addButton}
          >
            Add Link
          </button>
        </div>

        <button type="submit" style={styles.submitButton}>
          Post
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    maxWidth: "600px",
    margin: "20px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    fontFamily: "Arial, sans-serif",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  titleInput: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontSize: "18px",
    fontWeight: "bold",
  },
  contentBlock: {
    marginBottom: "15px",
    position: "relative",
  },
  textarea: {
    width: "100%",
    height: "80px",
    resize: "none",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontSize: "16px",
  },
  input: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontSize: "16px",
  },
  fileInput: {
    display: "block",
    marginBottom: "10px",
  },
  mediaPreview: {
    width: "100%",
    maxHeight: "300px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  buttonGroup: {
    display: "flex",
    gap: "10px",
  },
  addButton: {
    padding: "10px",
    backgroundColor: "#1da1f2",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  removeButton: {
    position: "absolute",
    top: "5px",
    right: "5px",
    padding: "5px 10px",
    backgroundColor: "#ff4d4d",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  submitButton: {
    padding: "10px",
    backgroundColor: "#1da1f2",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default Market;
