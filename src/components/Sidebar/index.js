



//write a sideBar component which has icon "user" and "Account" and "Logout"
//when user clicks on "user" icon, user can upload profil picture
//when user clicks on "Account" icon, it should navigate to ProfileScreen
//when user clicks on "Logout" icon, it should navigate to SignInScreen
const Sidebar = () => {
    return (
        <View style={styles.container}>
        <View style={styles.header}>
            <Image
            style={styles.avatar}
            source={{
                uri: 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png',
            }}
            />
            <Text style={styles.name}>User Name</Text>
        </View>
        <View style={styles.body}>
            <View style={styles.bodyContent}>
            <TouchableOpacity style={styles.buttonContainer}>
                <Icon name="user" size={30} color="#01a699" />
                <Text style={styles.buttonText}>Upload Profile Picture</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer}>
                <Icon name="user" size={30} color="#01a699" />
                <Text style={styles.buttonText}>Account</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer}>
                <Icon name="sign-out" size={30} color="#01a699" />
                <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
            </View>
        </View>
        </View>
    );
    }

    const styles = StyleSheet.create({
    header: {
        backgroundColor: '#01a699',
        height: 200,
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: 'white',
        marginBottom: 10,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: 130,
    },
    name: {
        fontSize: 22,
        color: '#FFFFFF',
        fontWeight: '600',
    },
    body: {
        marginTop: 40,
    },
    bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding: 30,
    },
    buttonContainer: {
        marginTop: 10,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
        backgroundColor: '#01a699',
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
    },
    });

export default Sidebar;


