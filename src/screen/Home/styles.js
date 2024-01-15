import { StyleSheet } from "react-native";
import { windowHeight } from "../../utils/Dimensions";
import { MyColor } from "../../theme/colors";

const styles = StyleSheet.create({
    container:{
        height:windowHeight*0.064,
        backgroundColor:'white'
    },
    headerMain:{
        height:windowHeight*0.064,
        flexDirection:'row',
        backgroundColor:MyColor.primary,
        alignItems:'center',
        justifyContent:'space-between'
    },
    headerOne:{
        height:windowHeight*0.064,
        width:'74%',
        backgroundColor:'white',
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:'3%',
        borderTopRightRadius:15,
        borderBottomRightRadius:15
    },
    image:{
        height: 30, 
        width: 30,
    },
    headerOneView:{
        flexDirection:'row',
        alignItems:'center',
        marginLeft:8,
        paddingLeft:8,
        borderLeftColor:'#F3F2FD',
        borderLeftWidth:2,
        height:windowHeight*0.035,

    },
    headerTwo:{
        width:'25%',
        height:windowHeight*0.065,
        flexDirection:'column',
        justifyContent:'center',
        paddingRight:10
    }
})
export default styles