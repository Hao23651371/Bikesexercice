import React, {useEffect, useState} from 'react'

import { View,Text,Image,FlatList, TouchableOpacity, StyleSheet } from 'react-native'

export default function Screen2() {
    const [bike,setbike]=useState<any[]>([]);

    useEffect(() =>{
        fetch(("https://6abb5968b2118ed7abb84e88.mockapi.io/bikes"))
        .then((res) =>res.json())
        .then((data) => setbike(data))
        .catch((err) =>console.log(err));
    },[])

    return (
        <View style={styles.container}>
            <Text style={styles.title}> The World's Best Bike</Text>

        <View> 

        <TouchableOpacity style={styles.category}>
            <Text>ALL</Text>
         </TouchableOpacity>

         <TouchableOpacity style={styles.category}>
            <Text>RoadBike</Text>
         </TouchableOpacity>
         
         <TouchableOpacity style={styles.category}>
            <Text>Moutain</Text>
         </TouchableOpacity>

        </View>

        <FlatList
        data={bike}
        numColumns={2}
        keyExtractor={(item) =>
        item.id.toString()}
        renderItem={({item}) =>(
            <View>
               <Image
    source={{ uri: item.image }}
    style={styles.image}
/>

                <Text>{item.name}</Text>
                <Text>${item.price}</Text>
            </View>
            

        )}
        />
            
        
        </View>
    )


}
const styles =StyleSheet.create({
   container:{
    flex:1,
    padding:20,

   } ,
   title:{
    fontSize:20,
   },
   category:{

   },
   image: {
    width: 150,
    height: 150,
    resizeMode: "contain",
},

})
