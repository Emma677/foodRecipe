import React from 'react';
import { FlatList,Text, TouchableOpacity, StyleSheet} from 'react-native';

const Categories = ({ categories,selectedCategory,onCategoryPress }) =>{
    return(
        <FlatList
            horizontal
            data={categories}
            keyExtractor={item => String(item)}
            showsHorizontalScrollIndicator={false}
            style = {{marginHorizontal: -24}}
            renderItem={({ item, index})=>{
                    const selected = selectedCategory === item;
                    const displayName = item?.replace('_', ' ')

                    return(
                        <TouchableOpacity
                            onPress={() =>onCategoryPress(item)}
                            style={[styles.itemContainer, selected ? styles.selectedItemContainer : {}, index === 0 ? {marginLeft: 24} :{}]}
                        >
                                <Text style={[styles.item, selected ? styles.selectedItem : {}]}>{displayName}</Text>
                        </TouchableOpacity>
                    );
            }}
        />
    );
}


export default React.memo(Categories);

const styles = StyleSheet.create({
    item:{
        fontSize: 12,
        fontWeight:'bold',
        color:"green",
        padding:8,
        paddingHorizontal:12,
        textTransform: 'capitalize',
    },
    selectedItem:{
        color:'white'
    },
    itemContainer:{
        marginBottom:14,
        marginRight: 8,
    },
    selectedItemContainer:{
        backgroundColor: 'green',
        borderRadius:10

    }
})