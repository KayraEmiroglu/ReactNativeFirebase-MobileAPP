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
        bgColor="#d72f36"
        fgColor="#fcfcfc"
        iconName="google" 
      />
    </>
  );
}
