import React from "react";
import { Text,StyleSheet, View,Image } from "react-native";

const Rating = ({ rating}) =>{
    const arr = [1,2,3,4,5]



    const renderStar = () =>{
        return arr?.map(star =>{
            if(Math.round(rating) >= star){
                return(
                    <Image key={star} style={styles.star} source={require('../assets/rating.png')}/>
                )
            }

            return(
                <Image key={star} style={styles.star} source={require('../assets/rating empty.png')}/>
            )
            
        })
    }

    return(
        <View style={styles.row}>
            {renderStar()}
        </View>
    )
};



export default React.memo(Rating)

const styles = StyleSheet.create({
    row:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    star:{
        width:12,
        height:12,
        margin:2
    }
})


