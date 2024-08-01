import { ToastAndroid } from "react-native";

const CreateToast = (message : string) => {
    ToastAndroid.showWithGravity(message,ToastAndroid.SHORT,ToastAndroid.BOTTOM);
};

export default CreateToast;
