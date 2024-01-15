import "./App.css";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
} from "@firebase/firestore";
import { db } from "./firebase-config";
import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged, signOut } from "@firebase/auth";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "@firebase/storage";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  //creating a stateful variable for each input
  const [posts, setPosts] = useState([]);
  const [newText, setNewText] = useState("");
  const [userId, setUserId] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    getData();

    checkUser();
  }, []);

  const checkUser = async () => {
    const auth = getAuth();
    const user = await getAuth().currentUser;
    if (user) {
      setUserId(user.displayName);
    }
  };

  const deletePost = async (postId) => {
    try {
      await deleteDoc(doc(db, "posts", postId));
      console.log("Document deleted with ID: ", postId);
      getData(); // Refresh the list after deletion
    } catch (e) {
      console.error("Error removing document: ", e);
    }
  };

  const postData = async (author, text) => {
    const storage = getStorage();
    const uniqueImageId = uuidv4(); // Generate a unique ID for the image

    // Extract the file extension from the selected image jpg, png etc.
    const imageExtension = selectedImage.name.split(".").pop();

    // Create the image file name with the correct extension
    const imageFileName = `${uniqueImageId}.${imageExtension}`;

    const storageRef = ref(storage, `images/${imageFileName}`);

    try {
      // Upload the image to Firebase Storage
      const snapshot = await uploadBytes(storageRef, selectedImage);

      const imageUrl = await getDownloadURL(snapshot.ref); // Get the download URL of the uploaded image

      // Add document to Firestore
      const docRef = await addDoc(collection(db, "posts"), {
        Author: author,
        Text: text,
        ImageUrl: imageUrl, // Store the download URL or the unique ID
      });

      console.log("Document written with ID: ", docRef.id);
      // Reset the state to clear the inputs
      setNewText("");

      setSelectedImage(null);

      //update the list of posts
      getData();
    } catch (e) {
      console.error("Error: ", e);
    }
  };

  const signOutFunc = async () => {
    setUserId("");
    const auth = getAuth();
    await signOut(auth);
    console.log("signed out");
  };

  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "posts"));
    const postsArray = []; // Step 1: Create an empty array
    querySnapshot.forEach((doc) => {
      let post = doc.data();
      post.id = doc.id; // Step 2: Add the ID to each post
      postsArray.push(post); // Step 3: add each post to the array
    });
    console.log(postsArray);
    setPosts(postsArray); // Step 4: Update the posts state
  };

  return (
    <main>
      <button onClick={() => signOutFunc()}>Sign out</button>
      <br />
      <span className="text-container">
        <span>Author</span>
        <span>{userId}</span>
      </span>
      <br />
      <span>Text</span>
      <input
        type="text"
        value={newText}
        onChange={(e) => setNewText(e.target.value)}
      />
      Image{" "}
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      />
      <button onClick={() => postData(userId, newText)}>submit</button>
      <div>
        {posts.map((post) => (
          <div key={post.id}>
            <h1>{post.Author}</h1>
            <p>{post.Text}</p>

            <button onClick={() => deletePost(post.id)}>Delete</button>
            {post.ImageUrl ? (
              <img src={post.ImageUrl} alt={`Posted by ${post.Author}`} />
            ) : (
              <p>No image available</p>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
