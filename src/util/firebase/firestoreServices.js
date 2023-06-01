import { getFirestore, collection, doc, updateDoc, addDoc, getDocs } from "firebase/firestore";
import { app } from "../../firebase";
import { auth } from "firebase/auth";

// This class is used to interact with the Firestore database
class FirestoreService {
  constructor() {
    this.db = getFirestore(app);
  }

  ///**************WOUNDDSSS***************
  // This method adds a wound to the database
  async addWound(wound) {
    try {
      const woundRef = await addDoc(collection(this.db, "wounds"), wound);
      return woundRef.id;
    } catch (error) {
      console.error("Error adding wound: ", error);
      throw error;
    }
  }

  // This method updates a wound in the database
  async updateWound(wound) {
    try {
      const woundRef = doc(this.db, "wounds", wound.id);
      await updateDoc(woundRef, wound);
    } catch (error) {
      console.error("Error updating wound: ", error);
      throw error;
    }
  }


  async getWounds() {
    try {
      const woundsCollection = collection(this.db, "wounds");
      const snapshot = await getDocs(woundsCollection);
      const wounds = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return wounds;
    } catch (error) {
      console.error("Error getting wounds: ", error);
      throw error;
    }
  };
  //*****************User************ */

  //User register with email, password , name, surname
  async  registerUser(email, password, name, surname) {
    try {
      const db = getFirestore();
      const userCollection = collection(db, "users");
  
      // Check if email already exists
      const emailQuery = query(userCollection, where("email", "==", email));
      const emailSnapshot = await getDocs(emailQuery);
      if (!emailSnapshot.empty) {
        throw new Error("Email already exists");
      }
  
      // Add user to the collection
      const user = {
        email: email,
        password: password,
        name: name,
        surname: surname,
      };
      const userRef = await addDoc(userCollection, user);
      return userRef.id;
    } catch (error) {
      console.error("Error registering user: ", error);
      throw error;
    }
  }


  //User login email, password
  async loginUser(email, password) {
    try {
      const db = getFirestore();
      const userCollection = collection(db, "users");
  
      // Check if email exists
      const emailQuery = query(userCollection, where("email", "==", email));
      const emailSnapshot = await getDocs(emailQuery);
      if (emailSnapshot.empty) {
        throw new Error("Email does not exist");
      }
  
      // Check if password is correct
      const user = emailSnapshot.docs[0].data();
      if (user.password !== password) {
        throw new Error("Password is incorrect");
      }
  
      return user;
    } catch (error) {
      console.error("Error logging in user: ", error);
      throw error;
    }
  }

  //forgot password email
  async forgotPassword(email) { 
    try {
      const db = getFirestore();
      const userCollection = collection(db, "users");
  
      // Check if email exists
      const emailQuery = query(userCollection, where("email", "==", email));
      const emailSnapshot = await getDocs(emailQuery);
      if (emailSnapshot.empty) {
        throw new Error("Email does not exist");
      }
  
      // Send password reset email
      await sendPasswordResetEmail(email);
    } catch (error) {
      console.error("Error resetting password: ", error);
      throw error;
    }
  }

  //confirm email 
  async confirmEmail(email) {
    try {
      const user = auth().currentUser;
      if (user) {
        await user.sendEmailVerification();
        console.log("Email verification sent to", email);
      } else {
        throw new Error("User not found");
      }
    } catch (error) {
      console.error("Error confirming email: ", error);
      throw error;
    }
  }

  //resend Code
  async resendCode(email) {
    try {
      await auth().sendEmailVerification(auth().currentUser);
      console.log("Verification code resent to", email);
    } catch (error) {
      console.error("Error resending verification code: ", error);
      throw error;
    }
  }



}

export default new FirestoreService();




