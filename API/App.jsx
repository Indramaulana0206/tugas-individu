import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { fetchData } from './src/home/home';
import { useEffect, useState } from 'react';


const App = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchDataFromApi = async () => {
            try {
                const apiData = await fetchData();
                setData(apiData);
            } catch (error) {
                //handle error
            }
        };

        fetchDataFromApi();

    }, [])
  return (
    <View>
      <Text>{data ? data.someProperti : 'loading...'}</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})