import { StyleSheet } from "react-native"
import { primaryColor } from "./colors";

//All page specific styles are found in that page's specific file, here you can find
//styles which can be used by all the pages.

//mainStyles used by all the pages in the app
const mainStyles = StyleSheet.create({
    background: {
        backgroundColor: primaryColor,
        paddingTop: 40,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    text: {
        fontFamily: 'Jua-Regular',
    },
    title: {
        fontSize: 40,
        color: 'white',
        fontFamily: 'Jua-Regular',
    }
})

export default mainStyles;