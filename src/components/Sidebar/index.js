import { Image, Modal, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { styles } from "./style";
import { handleCameraPress } from "../../util/camera";


const Sidebar = () => {
    return (
        <Modal
        animationType="slide"
        transparent={true}
        visible={sidebarVisible}
        onRequestClose={() => {
          setSidebarVisible(!sidebarVisible);
        }}
      >
        <View style={styles.modalView}>
          <TouchableOpacity onPress={() => setSidebarVisible(false)}>
            <Icon style={styles.icon} name="close" size={30} color="#000" />
          </TouchableOpacity>
          {imageUri ? (
            <Image style={styles.profileImage} source={{ uri: imageUri }} />
          ) : (
            <TouchableOpacity onPress={handleCameraPress}>
              <Icon name="user" size={100} color="#000" />
            </TouchableOpacity>
          )}
          <Text style={styles.textStyle}>{`${firstName} ${lastName}`}</Text>

          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => {
              navigation.navigate("ProfileScreen");
            }}
          >
            <Icon name="user" size={30} color="#000" />
            <Text style={styles.buttonText}>Account</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => navigation.navigate("SignIn")}
          >
            <Icon name="sign-out" size={30} color="#000" />
            <Text style={styles.buttonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
    }

 
export default Sidebar;


