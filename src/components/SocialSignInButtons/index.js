import CustomButton from '../CustomButton';


export default function SocialSignInButtons() {

  const onSignInWithGoogle = () => {
    console.log("in process");
  };


  return (
    <>
      <CustomButton
        onPress={onSignInWithGoogle}
        text="Sign in with Google"
        type="primary"
        bgColor="#fae9ea"
        fgColor="#dd4d44"
        iconName="google" 
      />
    </>
  );
}
